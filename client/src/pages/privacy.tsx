import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/components/language-provider';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

export default function Privacy() {
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
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white/90 mb-4">
                개인정보처리방침
              </h1>
            </div>

            <div className="prose prose-lg max-w-none text-gray-800 dark:text-white/80 space-y-6">
              <div className="bg-white/5 dark:bg-white/5 rounded-2xl p-6 border border-white/10 dark:border-white/10">
                <p className="leading-relaxed mb-4">
                  꿈의 해석 웹서비스 (dreamlens.saleschamp100.com) 은 사용자 여러분의 개인정보 보호를 중요하게 생각하며, 다음과 같이 개인정보를 처리하고 있습니다.
                </p>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                    <i className="fas fa-info-circle text-dream-purple mr-3"></i>
                    1. 개인정보 수집 및 이용 목적
                  </h2>
                  <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-white/10 dark:border-white/10 space-y-3">
                    <p>본 웹사이트는 회원가입 또는 로그인 기능이 없는 정적 웹사이트이며, 사용자로부터 어떠한 개인정보도 수집하지 않습니다.</p>
                    <p>사용자가 입력하는 꿈의 내용은 단지 AI 해석을 위한 용도로만 사용되며, 어떠한 경우에도 저장하거나 추적하지 않습니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                    <i className="fas fa-ban text-dream-purple mr-3"></i>
                    2. 수집하지 않는 항목
                  </h2>
                  <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-white/10 dark:border-white/10 space-y-3">
                    <p>이름, 이메일 주소, 전화번호, 생년월일, IP 주소 등 개인식별 정보는 수집되지 않습니다.</p>
                    <p>쿠키를 통한 추적, 행동 분석, 마케팅 목적 수집도 하지 않습니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                    <i className="fas fa-robot text-dream-purple mr-3"></i>
                    3. AI 해석 관련 정보 처리
                  </h2>
                  <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-white/10 dark:border-white/10 space-y-3">
                    <p>입력된 꿈 내용은 Google Gemini API를 통해 실시간으로 해석되며, 이 과정에서 사용자 데이터는 일시적으로만 사용되고 저장되지 않습니다.</p>
                    <p>해석 결과는 즉시 사용자에게 제공되며, 이후 데이터는 자동 폐기됩니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                    <i className="fas fa-link text-dream-purple mr-3"></i>
                    4. 외부 서비스 연동
                  </h2>
                  <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-white/10 dark:border-white/10">
                    <p className="mb-4">본 웹사이트는 아래의 외부 서비스를 활용하고 있습니다:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-white/20">
                            <th className="text-left py-2 px-4">서비스명</th>
                            <th className="text-left py-2 px-4">목적</th>
                            <th className="text-left py-2 px-4">개인정보 처리 여부</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-white/10">
                            <td className="py-2 px-4">Google Gemini API</td>
                            <td className="py-2 px-4">꿈 해석 및 조언 제공</td>
                            <td className="py-2 px-4">❌ 저장하지 않음</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                    <i className="fas fa-user-shield text-dream-purple mr-3"></i>
                    5. 개인정보 보호 책임자
                  </h2>
                  <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-white/10 dark:border-white/10 space-y-3">
                    <p><strong>운영자명:</strong> 데이빗 송 (David Song)</p>
                    <p><strong>이메일:</strong> ohorangeclub@gmail.com</p>
                    <p>개인정보 관련 문의 또는 요청은 위 이메일을 통해 접수받고 있습니다.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                    <i className="fas fa-edit text-dream-purple mr-3"></i>
                    6. 개인정보처리방침 변경
                  </h2>
                  <div className="bg-white/5 dark:bg-white/5 rounded-xl p-6 border border-white/10 dark:border-white/10 space-y-3">
                    <p>본 개인정보처리방침은 관련 법령의 변경이나 서비스 정책 변경에 따라 사전 고지 없이 변경될 수 있으며, 중요한 변경 사항은 본 웹사이트를 통해 공지합니다.</p>
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