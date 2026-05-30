const GLITCH_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()你好我是LEO设计师开发者';

export const useGlitchText = (originalText) => {
  const triggerGlitch = (element) => {
    if (!element) return;

    let iterations = 0;
    const interval = setInterval(() => {
      element.textContent = originalText
        .split('')
        .map((char, index) => {
          if (index < iterations) return originalText[index];
          if (char === ' ' || char === '，' || char === '。') return char;
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join('');

      if (iterations >= originalText.length) {
        clearInterval(interval);
        element.textContent = originalText;
      }
      iterations += 1 / 3;
    }, 30);
  };

  return triggerGlitch;
};
