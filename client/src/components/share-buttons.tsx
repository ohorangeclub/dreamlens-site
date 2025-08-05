import React from 'react';
import { useLanguage } from './language-provider';

interface ShareButtonsProps {
  dreamText: string;
  interpretation: string;
}

export function ShareButtons({ dreamText, interpretation }: ShareButtonsProps) {
  const { t } = useLanguage();

  const shareText = `${t.share.text}\n\n"${dreamText.slice(0, 100)}${dreamText.length > 100 ? '...' : ''}"\n\n${interpretation.slice(0, 200)}${interpretation.length > 200 ? '...' : ''}`;
  const shareUrl = window.location.href;

  const shareToTwitter = () => {
    const text = encodeURIComponent(shareText);
    const url = encodeURIComponent(shareUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const shareToFacebook = () => {
    const url = encodeURIComponent(shareUrl);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareToKakao = () => {
    // Note: KakaoTalk sharing requires SDK setup, simplified for demo
    if (navigator.share) {
      navigator.share({
        title: 'DreamLens',
        text: shareText,
        url: shareUrl,
      }).catch(console.error);
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    const fullText = `${shareText}\n\n${shareUrl}`;
    navigator.clipboard.writeText(fullText).then(() => {
      alert(t.controls.language === '한국어' ? '링크가 복사되었습니다!' : 'Link copied to clipboard!');
    }).catch(() => {
      alert(t.controls.language === '한국어' ? '복사에 실패했습니다.' : 'Failed to copy link.');
    });
  };

  return (
    <div className="bg-white/5 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 dark:border-white/10">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white/90 mb-4 text-center">
        {t.share.title}
      </h4>
      <div className="flex justify-center space-x-4">
        <button
          onClick={shareToTwitter}
          className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-500/30 transition-all duration-300"
        >
          <i className="fab fa-twitter text-lg"></i>
        </button>
        <button
          onClick={shareToFacebook}
          className="p-3 bg-blue-600/20 rounded-xl border border-blue-600/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600/30 transition-all duration-300"
        >
          <i className="fab fa-facebook text-lg"></i>
        </button>
        <button
          onClick={shareToKakao}
          className="p-3 bg-yellow-400/20 rounded-xl border border-yellow-400/30 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-400/30 transition-all duration-300"
        >
          <i className="fas fa-comment text-lg"></i>
        </button>
        <button
          onClick={copyToClipboard}
          className="p-3 bg-green-500/20 rounded-xl border border-green-500/30 text-green-600 dark:text-green-400 hover:bg-green-500/30 transition-all duration-300"
        >
          <i className="fas fa-link text-lg"></i>
        </button>
      </div>
    </div>
  );
}
