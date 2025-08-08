import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/components/language-provider';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        {theme === 'dark' ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-night-primary via-night-secondary to-dream-purple"></div>
            <div 
              className="absolute inset-0 opacity-30" 
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-night-primary/50 to-transparent"></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
            <div 
              className="absolute inset-0 opacity-20" 
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          </>
        )}
      </div>

      {/* Header */}
      <header className="relative z-50 px-4 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dream-purple to-dream-purple-light flex items-center justify-center">
                <i className="fas fa-moon text-white text-lg"></i>
              </div>
              <h1 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-dream-purple to-dream-purple-light bg-clip-text text-transparent">
                  {t.app.title}
                </span>
              </h1>
            </div>
          </Link>

          <Link href="/">
            <Button variant="outline" className="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/20">
              <i className="fas fa-arrow-left mr-2"></i>
              홈으로
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 dark:bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 dark:border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-warm-gold to-warm-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-ad text-white text-2xl"></i>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white/90 mb-4">
                광고문의
              </h1>
            </div>

            <div className="text-center max-w-2xl mx-auto">
              <div className="bg-white/5 dark:bg-white/5 rounded-2xl p-8 border border-white/10 dark:border-white/10 space-y-6">
                <p className="text-lg text-gray-800 dark:text-white/80 leading-relaxed">
                  업무 제휴 또는 광고관련 문의는<br />
                  운영자 이메일로 문의 내용을 보내주시면,<br />
                  확인 후 최대한 빠르게 답변드리겠습니다.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3 text-gray-800 dark:text-white/80">
                    <i className="fas fa-envelope text-dream-purple text-xl"></i>
                    <span className="text-lg font-semibold">이메일:</span>
                    <a 
                      href="mailto:ohorangeclub@gmail.com" 
                      className="text-dream-purple hover:text-dream-purple-light transition-colors font-medium"
                    >
                      ohorangeclub@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-white/70">
                    <i className="fas fa-clock text-warm-gold text-lg"></i>
                    <span>답변 시간:</span>
                    <span>평일 오전 10시 ~ 오후 5시 (KST)</span>
                  </div>

                  <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-white/70">
                    <i className="fas fa-hourglass-half text-warm-gold text-lg"></i>
                    <span>평균 응답 시간:</span>
                    <span>1~2 영업일 내</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    onClick={() => window.open('mailto:ohorangeclub@gmail.com?subject=DreamLens 광고문의&body=안녕하세요, DreamLens 관련 문의드립니다.', '_blank')}
                    className="px-8 py-3 bg-gradient-to-r from-dream-purple to-dream-purple-light rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    이메일 보내기
                  </Button>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-warm-gold/10 to-warm-gold-dark/10 rounded-2xl p-6 border border-warm-gold/20">
                <div className="flex items-center justify-center space-x-3 text-warm-gold dark:text-warm-gold mb-3">
                  <i className="fas fa-info-circle"></i>
                  <span className="font-semibold">참고사항</span>
                </div>
                <p className="text-gray-700 dark:text-white/70 text-sm leading-relaxed">
                  광고 및 제휴 문의 시 구체적인 제안 내용과 연락처를 포함해 주시면<br />
                  더욱 신속하고 정확한 답변을 드릴 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}