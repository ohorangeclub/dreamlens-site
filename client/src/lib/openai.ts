// This is a client-side utility for OpenAI-related types and helpers
// The actual OpenAI calls are made from the server

export interface DreamInterpretationResult {
  interpretation: string;
  warmMessage: string;
}

export interface DreamInterpretationRequest {
  dreamText: string;
  language: 'ko' | 'en';
}

// Client-side validation helpers
export const validateDreamText = (text: string, minLength: number = 10): boolean => {
  return text.trim().length >= minLength;
};

export const formatDreamForSharing = (dreamText: string, interpretation: string): string => {
  const maxDreamLength = 100;
  const maxInterpretationLength = 200;
  
  const truncatedDream = dreamText.length > maxDreamLength 
    ? `${dreamText.slice(0, maxDreamLength)}...` 
    : dreamText;
    
  const truncatedInterpretation = interpretation.length > maxInterpretationLength
    ? `${interpretation.slice(0, maxInterpretationLength)}...`
    : interpretation;
    
  return `${truncatedDream}\n\n${truncatedInterpretation}`;
};
