import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/components/language-provider';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

export default function Terms() {
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
              <div className="w-16 h-16 bg-gradient-to-br from-dream-purple to-dream-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-file-contract text-white text-2xl"></i>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white/90 mb-4">
                이용약관
              </h1>
            </div>

            <div className="prose prose-lg max-w-none text-gray-800 dark:text-white/80 space-y-6">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                    <i className="fas fa-bullseye text-dream-purple mr-3"></i>
                    제1조 (목적)
                  </h2>
                  <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-white/10 dark:border-white/10">
                    <p>이 약관은 이용자(이하 "사용자")가 꿈의 해석 웹서비스(이하 "서비스")를 이용함에 있어 필요한 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                    <i className="fas fa-book text-dream-purple mr-3"></i>
                    제2조 (정의)
                  </h2>
                  <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-white/10 dark:border-white/10 space-y-3">
                    <p><strong>"서비스"</strong>란 dreamlens.saleschamp100.com에서 제공하는 꿈 해석 및 조언 기능을 의미합니다.</p>
                    <p><strong>"운영자"</strong>란 본 서비스를 관리·운영하는 자로서, 데이빗 송(David Song)을 말합니다.</p>
                    <p><strong>"사용자"</strong>란 본 서비스에 접속하여 내용을 입력하고 AI 해석 결과를 열람하는 모든 방문자를 말합니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                    <i className="fas fa-cogs text-dream-purple mr-3"></i>
                    제3조 (서비스의 제공 및 변경)
                  </h2>
                  <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-white/10 dark:border-white/10 space-y-3">
                    <p>본 서비스는 회원가입 없이, 사용자가 입력한 꿈의 내용을 Google Gemini API를 통해 해석하고 조언 형태로 제공합니다.</p>
                    <p>제공되는 해석 및 조언은 전문 심리 상담 또는 진단이 아니며, 개인적인 판단에 참고용으로만 활용되어야 합니다.</p>
                    <p>운영자는 서비스 내용, 디자인, 기능 등을 사전 예고 없이 변경하거나 종료할 수 있습니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                    <i className="fas fa-user-check text-dream-purple mr-3"></i>
                    제4조 (이용자의 책임)
                  </h2>
                  <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-white/10 dark:border-white/10 space-y-3">
                    <p>사용자는 본 서비스 이용 시 타인의 권리나 법령을 침해하지 않아야 하며, 비정상적인 접근 및 악성 코드 삽입 등을 해서는 안 됩니다.</p>
                    <p>입력된 내용이 공공질서 및 미풍양속에 위배되거나 법적 문제를 초래할 경우, 그 책임은 전적으로 사용자에게 있습니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                    <i className="fas fa-shield-alt text-dream-purple mr-3"></i>
                    제5조 (개인정보 처리)
                  </h2>
                  <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-white/10 dark:border-white/10 space-y-3">
                    <p>본 서비스는 어떠한 개인정보도 수집하거나 저장하지 않습니다.</p>
                    <p>사용자가 입력한 꿈의 내용은 AI 해석을 위해 실시간으로 처리되며, 별도 서버에 저장되지 않습니다.</p>
                    <p>관련 내용은 개인정보처리방침을 따릅니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                    <i className="fas fa-copyright text-dream-purple mr-3"></i>
                    제6조 (지적재산권)
                  </h2>
                  <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-white/10 dark:border-white/10 space-y-3">
                    <p>본 서비스의 디자인, 텍스트, 기능 및 결과물에 대한 지적재산권은 운영자에게 있으며, 이를 무단 복제·배포·상업적 이용하는 행위는 금지됩니다.</p>
                    <p>단, 사용자가 입력한 꿈의 내용과 해석 결과는 개인적 이용 목적 내에서 자유롭게 사용할 수 있습니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                    <i className="fas fa-exclamation-triangle text-dream-purple mr-3"></i>
                    제7조 (면책조항)
                  </h2>
                  <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-white/10 dark:border-white/10 space-y-3">
                    <p>운영자는 AI 해석 결과에 대한 정확성, 신뢰성, 완전성을 보장하지 않으며, 해당 결과는 사용자 판단에 따라 활용되어야 합니다.</p>
                    <p>본 서비스는 무료로 제공되며, 사용 중 발생할 수 있는 오류, 해석 불일치, 불편 등에 대해 법적 책임을 지지 않습니다.</p>
                    <p>외부 서비스(Google Gemini API) 장애 또는 정책 변경으로 인한 서비스 중단에 대해서도 운영자는 책임을 지지 않습니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                    <i className="fas fa-edit text-dream-purple mr-3"></i>
                    제8조 (약관의 개정)
                  </h2>
                  <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-white/10 dark:border-white/10 space-y-3">
                    <p>운영자는 본 약관을 사전 고지 없이 변경할 수 있으며, 변경된 약관은 웹사이트에 게시함으로써 효력을 발생합니다.</p>
                    <p>사용자가 변경된 약관에 동의하지 않을 경우, 서비스 이용을 중단할 수 있습니다.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}