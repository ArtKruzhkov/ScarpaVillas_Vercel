export function smoothScrollToTop() {
  const start = window.scrollY;

  if (start === 0) return;

  // Время зависит от расстояния
  const duration = Math.min(Math.max(start * 0.4, 550), 1800);

  const startTime = performance.now();
  let animationFrameId: number;

  const removeListeners = () => {
    window.removeEventListener('wheel', cancelScroll);
    window.removeEventListener('touchstart', cancelScroll);
  };

  const cancelScroll = () => {
    cancelAnimationFrame(animationFrameId);
    removeListeners();
  };

  window.addEventListener('wheel', cancelScroll, { passive: true });
  window.addEventListener('touchstart', cancelScroll, { passive: true });

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, start * (1 - ease));

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      removeListeners();
    }
  };

  animationFrameId = requestAnimationFrame(animate);
}
