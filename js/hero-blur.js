/* hero-blur.js — Scroll-linked hero blur animation
 * Homepage only. Progressive enhancement: CSS Scroll-Driven Animations
 * override this JS in supporting browsers.
 */

(function () {
  var hero = document.querySelector('.hero__content');
  if (!hero) return;

  var MAX_SCROLL = 300;
  var MAX_BLUR = 20;
  var MIN_OPACITY = 0.3;
  var MIN_SCALE = 0.95;

  // Check for CSS Scroll-Driven Animations support
  var supportsScrollTimeline = CSS && CSS.supports && CSS.supports('animation-timeline', 'scroll()');

  if (supportsScrollTimeline) {
    document.documentElement.classList.add('css-scroll');
    return; // CSS handles the animation
  }

  // Check reduced motion preference
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var ticking = false;

  function update() {
    var scrollY = window.scrollY;
    var progress = Math.min(scrollY / MAX_SCROLL, 1);

    if (prefersReducedMotion) {
      // Only fade opacity, skip blur and scale
      hero.style.opacity = 1 - progress * (1 - MIN_OPACITY);
      ticking = false;
      return;
    }

    var blur = progress * MAX_BLUR;
    var opacity = 1 - progress * (1 - MIN_OPACITY);
    var scale = 1 - progress * (1 - MIN_SCALE);

    hero.style.filter = 'blur(' + blur + 'px)';
    hero.style.opacity = opacity;
    hero.style.transform = 'scale(' + scale + ') translateZ(0)';

    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  // Initial state (for page-load at non-zero scroll position)
  update();
})();
