export interface Translations {
  app: { title: string };
  controls: { language: string };
  hero: {
    title: string;
    subtitle: string;
  };
  form: {
    label: string;
    placeholder: string;
    button: string;
    buttonLoading: string;
    error: string;
  };
  loading: { message: string };
  result: {
    title: string;
    timestamp: string;
    interpretation: { title: string };
    message: { title: string };
    actions: { save: string; new: string };
  };
  share: { 
    title: string;
    text: string;
  };
  history: { 
    title: string;
    empty: string;
  };
  footer: {
    description: string;
    links: {
      privacy: string;
      terms: string;
      contact: string;
    };
    copyright: string;
  };
  errors: {
    minLength: string;
    apiError: string;
    networkError: string;
  };
}

export const translations: Record<string, Translations> = {
  ko: {
    app: { title: 'DreamLens' },
    controls: { language: '한국어' },
    hero: {
      title: '당신의 꿈을\n해석해 드려요',
      subtitle: 'AI가 분석하는 꿈의 의미와 당신을 위한 따뜻한 메시지를 만나보세요'
    },
    form: {
      label: '어떤 꿈을 꾸셨나요?',
      placeholder: '꿈에서 본 모든 것을 자세히 적어주세요. 어떤 사람이 나왔는지, 어떤 장소였는지, 어떤 감정을 느꼈는지...',
      button: '꿈 해석하기',
      buttonLoading: '해석 중...',
      error: '꿈 내용을 입력해주세요 (최소 10자 이상)'
    },
    loading: { message: 'AI가 당신의 꿈을 분석하고 있습니다...' },
    result: {
      title: '꿈 해석 결과',
      timestamp: '',
      interpretation: { title: '심리적 해석' },
      message: { title: '따뜻한 메시지' },
      actions: { save: '결과 저장', new: '새로운 해석' }
    },
    share: { 
      title: '결과 공유하기',
      text: 'DreamLens에서 제 꿈을 해석받았어요!'
    },
    history: { 
      title: '최근 해석 기록',
      empty: '아직 해석한 꿈이 없습니다.'
    },
    footer: {
      description: 'AI 기술로 당신의 꿈을 분석하고 의미있는 인사이트를 제공합니다',
      links: {
        privacy: '개인정보처리방침',
        terms: '이용약관',
        contact: '문의하기'
      },
      copyright: '© 2024 DreamLens. All rights reserved.'
    },
    errors: {
      minLength: '꿈 내용을 최소 10자 이상 입력해주세요.',
      apiError: '꿈 해석 중 오류가 발생했습니다. 다시 시도해주세요.',
      networkError: '네트워크 오류가 발생했습니다. 연결을 확인해주세요.'
    }
  },
  en: {
    app: { title: 'DreamLens' },
    controls: { language: 'English' },
    hero: {
      title: 'Interpret Your\nDreams',
      subtitle: 'Discover the meaning of your dreams with AI analysis and receive warm, personalized messages'
    },
    form: {
      label: 'What did you dream about?',
      placeholder: 'Please describe everything you saw in your dream in detail. Who appeared, what places were there, what emotions you felt...',
      button: 'Interpret Dream',
      buttonLoading: 'Interpreting...',
      error: 'Please enter your dream (at least 10 characters)'
    },
    loading: { message: 'AI is analyzing your dream...' },
    result: {
      title: 'Dream Interpretation Result',
      timestamp: '',
      interpretation: { title: 'Psychological Analysis' },
      message: { title: 'Warm Message' },
      actions: { save: 'Save Result', new: 'New Interpretation' }
    },
    share: { 
      title: 'Share Result',
      text: 'I got my dream interpreted on DreamLens!'
    },
    history: { 
      title: 'Recent Interpretations',
      empty: 'No dream interpretations yet.'
    },
    footer: {
      description: 'Analyze your dreams with AI technology and provide meaningful insights',
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact Us'
      },
      copyright: '© 2024 DreamLens. All rights reserved.'
    },
    errors: {
      minLength: 'Please enter at least 10 characters for your dream.',
      apiError: 'An error occurred while interpreting your dream. Please try again.',
      networkError: 'A network error occurred. Please check your connection.'
    }
  }
};
