import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { DreamInput } from '@/components/dream-input';
import { DreamResult } from '@/components/dream-result';
import { useLanguage } from '@/components/language-provider';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import type { DreamInterpretation } from '@shared/schema';

export default function Home() {
  const [currentResult, setCurrentResult] = useState<DreamInterpretation | null>(null);
  const [localHistory, setLocalHistory] = useState<DreamInterpretation[]>([]);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  // Load local history
  useEffect(() => {
    const saved = localStorage.getItem('dreamlens-history');
    if (saved) {
      setLocalHistory(JSON.parse(saved));
    }
  }, [currentResult]);

  // Fetch server history
  const { data: serverHistory = [] } = useQuery<DreamInterpretation[]>({
    queryKey: ['/api/dreams'],
    enabled: false, // Only fetch when needed
  });

  const handleResult = (result: DreamInterpretation) => {
    setCurrentResult(result);
    // Scroll to result
    setTimeout(() => {
      const resultSection = document.getElementById('result-section');
      if (resultSection) {
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleNewInterpretation = () => {
    setCurrentResult(null);
    // Scroll to input
    setTimeout(() => {
      const inputSection = document.getElementById('input-section');
      if (inputSection) {
        inputSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const renderHeroTitle = () => {
    const titleParts = t.hero.title.split('\n');
    return (
      <>
        <span className="block text-gray-900 dark:text-white/90">{titleParts[0]}</span>
        <span className="block bg-gradient-to-r from-warm-gold to-warm-gold-dark bg-clip-text text-transparent">
          {titleParts[1]}
        </span>
      </>
    );
  };

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
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dream-purple to-dream-purple-light flex items-center justify-center">
              <i className="fas fa-moon text-white text-lg"></i>
            </div>
            <h1 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-dream-purple to-dream-purple-light bg-clip-text text-transparent">
                {t.app.title}
              </span>
            </h1>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              onClick={toggleLanguage}
              variant="outline"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300"
            >
              <i className="fas fa-globe text-sm"></i>
              <span className="text-sm font-medium">{t.controls.language}</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="outline"
              className="p-2 rounded-lg bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300"
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {renderHeroTitle()}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
          </section>

          {/* Dream Input */}
          <div id="input-section">
            <DreamInput onResult={handleResult} />
          </div>

          {/* Dream Result */}
          {currentResult && (
            <div id="result-section">
              <DreamResult 
                result={currentResult} 
                onNewInterpretation={handleNewInterpretation}
              />
            </div>
          )}

          {/* History Section */}
          {localHistory.length > 0 && (
            <section className="mb-12">
              <div className="bg-white/5 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 dark:border-white/10">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white/90 mb-6 flex items-center">
                  <i className="fas fa-history text-dream-purple mr-3"></i>
                  {t.history.title}
                </h3>
                
                <div className="space-y-4">
                  {localHistory.slice(0, 5).map((item) => (
                    <div 
                      key={item.id}
                      className="p-4 bg-white/5 dark:bg-white/5 rounded-xl border border-white/10 dark:border-white/10 hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer"
                      onClick={() => setCurrentResult(item)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-gray-600 dark:text-white/70 text-sm">
                          {new Intl.DateTimeFormat(language === 'ko' ? 'ko-KR' : 'en-US').format(new Date(item.createdAt))}
                        </p>
                        <button className="text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white/80 transition-colors">
                          <i className="fas fa-chevron-right text-xs"></i>
                        </button>
                      </div>
                      <p className="text-gray-800 dark:text-white/80 line-clamp-2">
                        {item.dreamText.slice(0, 100)}
                        {item.dreamText.length > 100 ? '...' : ''}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-12 border-t border-white/10 dark:border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-dream-purple to-dream-purple-light flex items-center justify-center">
                <i className="fas fa-moon text-white text-sm"></i>
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-dream-purple to-dream-purple-light bg-clip-text text-transparent">
                {t.app.title}
              </span>
            </div>
            <p className="text-gray-600 dark:text-white/60 max-w-md mx-auto">
              {t.footer.description}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            <Link href="/privacy" className="text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white/90 transition-colors font-medium px-2 py-1">
              {t.footer.links.privacy}
            </Link>
            <Link href="/terms" className="text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white/90 transition-colors font-medium px-2 py-1">
              {t.footer.links.terms}
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white/90 transition-colors font-medium px-2 py-1">
              {t.footer.links.contact}
            </Link>
          </div>
          
          <p className="text-gray-500 dark:text-white/40 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </>
  );
}
