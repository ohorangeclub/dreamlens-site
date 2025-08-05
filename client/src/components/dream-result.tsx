import React from 'react';
import { useLanguage } from './language-provider';
import { ShareButtons } from './share-buttons';
import { Button } from '@/components/ui/button';
import type { DreamInterpretation } from '@shared/schema';

interface DreamResultProps {
  result: DreamInterpretation;
  onNewInterpretation: () => void;
}

export function DreamResult({ result, onNewInterpretation }: DreamResultProps) {
  const { t } = useLanguage();

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(t.app.title === 'DreamLens' ? 'ko-KR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(date));
  };

  return (
    <>
      {/* Main Result */}
      <section className="mb-12 animate-fadeIn">
        <div className="bg-white/10 dark:bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 dark:border-white/20 shadow-2xl">
          {/* Result Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-warm-gold to-warm-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-lightbulb text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white/90 mb-2">
              {t.result.title}
            </h3>
            <p className="text-gray-600 dark:text-white/60">
              {formatDate(result.createdAt)}
            </p>
          </div>

          {/* Interpretation Content */}
          <div className="space-y-8">
            {/* Main Interpretation */}
            <div className="bg-white/5 dark:bg-white/5 rounded-2xl p-6 border border-white/10 dark:border-white/10">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white/90 mb-4 flex items-center">
                <i className="fas fa-brain text-dream-purple mr-3"></i>
                {t.result.interpretation.title}
              </h4>
              <p className="text-gray-800 dark:text-white/80 leading-relaxed">
                {result.interpretation}
              </p>
            </div>

            {/* Warm Message */}
            <div className="bg-gradient-to-r from-warm-gold/10 to-warm-gold-dark/10 rounded-2xl p-6 border border-warm-gold/20">
              <h4 className="text-xl font-semibold text-warm-gold dark:text-warm-gold mb-4 flex items-center">
                <i className="fas fa-heart text-warm-gold dark:text-warm-gold mr-3"></i>
                {t.result.message.title}
              </h4>
              <p className="text-gray-800 dark:text-white/80 leading-relaxed">
                {result.warmMessage}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={() => {
                  // Save to localStorage for history
                  const savedResults = JSON.parse(localStorage.getItem('dreamlens-history') || '[]');
                  const exists = savedResults.find((r: DreamInterpretation) => r.id === result.id);
                  if (!exists) {
                    savedResults.unshift(result);
                    localStorage.setItem('dreamlens-history', JSON.stringify(savedResults.slice(0, 10)));
                  }
                  alert(t.controls.language === '한국어' ? '결과가 저장되었습니다!' : 'Result saved!');
                }}
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-white/10 dark:bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/20 text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300"
              >
                <i className="fas fa-bookmark"></i>
                <span>{t.result.actions.save}</span>
              </Button>
              <Button 
                onClick={onNewInterpretation}
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-dream-purple/20 backdrop-blur-sm rounded-xl border border-dream-purple/30 text-gray-900 dark:text-white hover:bg-dream-purple/30 transition-all duration-300"
              >
                <i className="fas fa-plus"></i>
                <span>{t.result.actions.new}</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="mb-12">
        <ShareButtons 
          dreamText={result.dreamText}
          interpretation={result.interpretation}
        />
      </section>
    </>
  );
}
