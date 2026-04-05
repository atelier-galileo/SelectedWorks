/* mobile-gallery.js — Thumbnail grid + swipe lightbox for mobile
 * Only activates on screens <= 768px
 * Transforms the editorial gallery into a 4-column grid
 * Tap to open full-screen lightbox with swipe navigation
 */

(function () {
  if (window.innerWidth > 768) return;

  var gallery = document.getElementById('projGallery');
  if (!gallery) return;

  // Collect all gallery images
  var allImages = [];
  gallery.querySelectorAll('img').forEach(function (img) {
    allImages.push({ src: img.src, alt: img.alt || '', srcset: img.srcset || '' });
  });

  if (allImages.length === 0) return;

  // ── Move gallery right after the info text (portrait only) ──
  var metaSection = document.querySelector('.proj-detail__meta');
  var metaLeft = document.querySelector('.proj-detail__meta-left');
  var gallerySection = gallery.closest('.proj-detail__gallery') || gallery.parentNode;
  if (metaSection && metaLeft) {
    metaSection.appendChild(gallerySection);
    gallerySection.style.order = '2';
    gallerySection.style.width = '100%';
    metaLeft.style.order = '3';
  }

  // ── Replace gallery with thumbnail grid ──
  gallery.innerHTML = '';
  gallery.className = 'mobile-grid';

  allImages.forEach(function (item, idx) {
    var thumb = document.createElement('div');
    thumb.className = 'mobile-grid__thumb';

    var img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.loading = 'lazy';
    // Use thumb srcset for grid thumbnails
    var thumbSrc = getThumbSrc(item.src);
    var mobileSrc = getMobileSrc(item.src);
    img.srcset = thumbSrc + ' 200w, ' + mobileSrc + ' 800w';
    img.sizes = '25vw';

    thumb.appendChild(img);
    thumb.addEventListener('click', function () { openLightbox(idx); });
    gallery.appendChild(thumb);
  });

  // ── Lightbox ──
  var lightbox = document.createElement('div');
  lightbox.className = 'mobile-lightbox';
  lightbox.innerHTML =
    '<div class="mobile-lightbox__close">&times;</div>' +
    '<div class="mobile-lightbox__viewport">' +
      '<div class="mobile-lightbox__track"></div>' +
    '</div>' +
    '<div class="mobile-lightbox__dots"></div>' +
    '<div class="mobile-lightbox__counter"></div>';
  document.body.appendChild(lightbox);

  var track = lightbox.querySelector('.mobile-lightbox__track');
  var dotsContainer = lightbox.querySelector('.mobile-lightbox__dots');
  var counter = lightbox.querySelector('.mobile-lightbox__counter');
  var closeBtn = lightbox.querySelector('.mobile-lightbox__close');

  // Set track width to hold all slides
  track.style.width = (allImages.length * 100) + '%';

  // Build slides
  allImages.forEach(function (item, idx) {
    var slide = document.createElement('div');
    slide.className = 'mobile-lightbox__slide';
    slide.style.width = (100 / allImages.length) + '%';

    var img = document.createElement('img');
    img.alt = item.alt;
    img.dataset.src = item.src;
    if (idx === 0) img.src = item.src;

    slide.appendChild(img);
    track.appendChild(slide);

    var dot = document.createElement('span');
    dot.className = 'mobile-lightbox__dot';
    dotsContainer.appendChild(dot);
  });

  var currentIdx = 0;
  var isOpen = false;
  var startX = 0;
  var startY = 0;
  var deltaX = 0;
  var isDragging = false;
  var directionLocked = false;
  var isVertical = false;

  function getSlideWidth() {
    return lightbox.querySelector('.mobile-lightbox__viewport').offsetWidth;
  }

  function openLightbox(idx) {
    currentIdx = idx;
    isOpen = true;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    // Small delay to ensure layout is calculated
    requestAnimationFrame(function () {
      goTo(idx, false);
      preloadAround(idx);
    });
  }

  function closeLightbox() {
    isOpen = false;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function goTo(idx, animate) {
    currentIdx = idx;
    var slideW = getSlideWidth();
    var offset = -idx * slideW;
    track.style.transition = animate ? 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';
    track.style.transform = 'translate3d(' + offset + 'px, 0, 0)';

    dotsContainer.querySelectorAll('.mobile-lightbox__dot').forEach(function (d, i) {
      d.classList.toggle('active', i === idx);
    });

    counter.textContent = (idx + 1) + ' / ' + allImages.length;
    preloadAround(idx);
  }

  function preloadAround(idx) {
    for (var i = Math.max(0, idx - 1); i <= Math.min(allImages.length - 1, idx + 1); i++) {
      var img = track.querySelectorAll('.mobile-lightbox__slide')[i].querySelector('img');
      if (!img.src && img.dataset.src) {
        img.src = img.dataset.src;
      }
    }
  }

  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    closeLightbox();
  });

  // ── Touch handling ──
  var viewport = lightbox.querySelector('.mobile-lightbox__viewport');

  viewport.addEventListener('touchstart', function (e) {
    if (!isOpen) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    deltaX = 0;
    isDragging = true;
    directionLocked = false;
    isVertical = false;
    track.style.transition = 'none';
  }, { passive: true });

  viewport.addEventListener('touchmove', function (e) {
    if (!isDragging) return;

    var dx = e.touches[0].clientX - startX;
    var dy = e.touches[0].clientY - startY;

    // Lock direction on first significant move
    if (!directionLocked && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
      directionLocked = true;
      isVertical = Math.abs(dy) > Math.abs(dx);
    }

    if (!directionLocked) return;

    if (isVertical) {
      if (dy > 80) {
        isDragging = false;
        closeLightbox();
      }
      return;
    }

    deltaX = dx;

    // Add resistance at edges
    if ((currentIdx === 0 && deltaX > 0) || (currentIdx === allImages.length - 1 && deltaX < 0)) {
      deltaX = deltaX * 0.3;
    }

    var slideW = getSlideWidth();
    var baseOffset = -currentIdx * slideW;
    track.style.transform = 'translate3d(' + (baseOffset + deltaX) + 'px, 0, 0)';
  }, { passive: true });

  viewport.addEventListener('touchend', function () {
    if (!isDragging) return;
    isDragging = false;

    if (isVertical || !directionLocked) return;

    var slideW = getSlideWidth();
    var threshold = slideW * 0.2;

    if (deltaX < -threshold && currentIdx < allImages.length - 1) {
      goTo(currentIdx + 1, true);
    } else if (deltaX > threshold && currentIdx > 0) {
      goTo(currentIdx - 1, true);
    } else {
      goTo(currentIdx, true);
    }
  }, { passive: true });

})();
