import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "your-api-key-here"
});

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
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 1000,
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    
    if (!result.interpretation || !result.warmMessage) {
      throw new Error("Invalid response format from OpenAI");
    }

    return {
      interpretation: result.interpretation,
      warmMessage: result.warmMessage,
    };
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to interpret dream. Please try again later.");
  }
}
