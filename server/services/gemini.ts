// server/services/gemini.ts
import { GoogleGenAI } from "@google/genai";

// DON'T DELETE THIS COMMENT
// Follow these instructions when using this blueprint:
// - Note that the newest Gemini model series is "gemini-2.5-flash" or "gemini-2.5-pro"
//   - do not change this unless explicitly requested by the user

// 환경변수에서 API 키 가져오기 (Vercel dashboard에 설정 필요)
const apiKey = process.env.GOOGLE_API_KEY;

if (!apiKey) {
  throw new Error("GOOGLE_API_KEY is not defined in environment variables.");
}

const genai = new GoogleGenAI({ apiKey });

export interface DreamInterpretationResult {
  interpretation: string;
  warmMessage: string;
}

export async function interpretDreamWithAI(
  dreamText: string, 
  language: 'ko' | 'en' = 'ko'
): Promise<DreamInterpretationResult> {
  const isKorean = language === 'ko';
  
  const systemPrompt = isKorean 
    ? `당신은 따뜻하고 공감능력이 뛰어난 꿈 해석 전문가입니다. 사용자의 꿈을 심리학적 관점에서 분석하고, 위로와 격려가 담긴 메시지를 제공해주세요.

응답은 다음 JSON 형식으로 제공해주세요:
{
  "interpretation": "심리학적 해석 (200-300자)",
  "warmMessage": "따뜻한 격려 메시지 (150-200자)"
}

해석은 긍정적이고 건설적인 관점에서 접근하고, 따뜻한 메시지는 위로와 희망을 주는 내용으로 작성해주세요.`
    : `You are a warm and empathetic dream interpretation expert. Analyze the user's dream from a psychological perspective and provide comforting and encouraging messages.

Please respond in the following JSON format:
{
  "interpretation": "Psychological interpretation (200-300 characters)",
  "warmMessage": "Warm encouraging message (150-200 characters)"
}

Approach the interpretation from a positive and constructive perspective, and write warm messages that provide comfort and hope.`;

  const userPrompt = isKorean
    ? `다음 꿈을 해석해주세요:\n\n${dreamText}`
    : `Please interpret the following dream:\n\n${dreamText}`;

  try {
    const response = await genai.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            interpretation: { type: "string" },
            warmMessage: { type: "string" },
          },
          required: ["interpretation", "warmMessage"],
        },
      },
      contents: userPrompt,
    });

    const result = JSON.parse(response.text || "{}");

    if (!result.interpretation || !result.warmMessage) {
      throw new Error("Invalid response format from Gemini");
    }

    return {
      interpretation: result.interpretation,
      warmMessage: result.warmMessage,
    };
  } catch (error: any) {
    console.error("🔴 Gemini API 호출 중 오류 발생:");
    console.error("📌 Error message:", error.message);
    console.error("📦 Full error object:", error);
    throw new Error("Failed to interpret dream. Please try again later.");
  }
}
