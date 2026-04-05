/* section-reveal.js — IntersectionObserver scroll reveals
 * Loaded on both pages. Targets all elements with class .reveal
 */

(function () {
  var elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  // Skip animation if reduced motion preferred
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    elements.forEach(function (el) {
      el.classList.add('revealed');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(function (el) {
    observer.observe(el);
  });
})();
