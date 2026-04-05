/* main.js — Clock, nav state, DOM rendering, mobile menu
 * Loaded on both index.html and works.html
 */

(function () {
  // -- Live Clock --
  var clock = document.getElementById('clock');
  if (clock) {
    function updateClock() {
      var now = new Date();
      clock.textContent = SITE_CONFIG.timezoneLabel + ' ' + now.toLocaleTimeString('en-US', {
        timeZone: SITE_CONFIG.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
    }
    setInterval(updateClock, 1000);
    updateClock();
  }

  // -- Nav Active State --
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage === '') currentPage = 'index.html';
  var navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('nav__link--active');
    }
  });

  // -- Mobile Menu Toggle --
  var navToggle = document.getElementById('navToggle');
  var navLinksEl = document.getElementById('navLinks');
  if (navToggle && navLinksEl) {
    navToggle.addEventListener('click', function () {
      navLinksEl.classList.toggle('open');
    });
    navLinksEl.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinksEl.classList.remove('open');
      });
    });
  }

  // -- Footer Rendering --
  var footerCopy = document.getElementById('footerCopy');
  if (footerCopy) {
    footerCopy.textContent = SITE_CONFIG.logoText + ' ' + SITE_CONFIG.year;
  }


  // -- Homepage: Render Selected Works --
  var worksGrid = document.getElementById('worksGrid');
  var isHomepage = currentPage === 'index.html' || currentPage === '';
  if (worksGrid && isHomepage) {
    var featured = PROJECTS.filter(function (p) { return p.featured; });
    featured.forEach(function (project) {
      var card = document.createElement('a');
      card.href = 'project.html?id=' + project.id;
      card.className = 'project-card';

      var img = document.createElement('img');
      img.className = 'project-card__image';
      img.src = project.image.src;
      img.alt = project.image.alt;
      img.loading = 'lazy';
      addSrcset(img, project.image.src);
      if (project.image.position) {
        img.style.objectPosition = project.image.position;
      }

      var name = document.createElement('h3');
      name.className = 'project-card__name';
      name.textContent = project.name;

      var tagline = document.createElement('p');
      tagline.className = 'project-card__tagline';
      tagline.textContent = project.tagline;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(tagline);
      worksGrid.appendChild(card);
    });
  }

  // -- Homepage: Render Services --
  var servicesGrid = document.getElementById('servicesGrid');
  if (servicesGrid) {
    SERVICES.forEach(function (service) {
      var card = document.createElement('div');
      card.className = 'service-card';

      var img = document.createElement('img');
      img.className = 'service-card__image';
      img.src = service.image.src;
      img.alt = service.image.alt;
      img.loading = 'lazy';
      addSrcset(img, service.image.src);

      var overlay = document.createElement('div');
      overlay.className = 'service-card__overlay';

      var label = document.createElement('span');
      label.className = 'service-card__label';
      label.textContent = service.name;

      var icon = document.createElement('span');
      icon.className = 'service-card__icon';

      var desc = document.createElement('p');
      desc.className = 'service-card__desc';
      desc.textContent = service.description;

      // Toggle active state on tap for touch devices
      card.addEventListener('click', function (e) {
        if ('ontouchstart' in window) {
          e.preventDefault();
          card.classList.toggle('active');
        }
      });

      card.appendChild(img);
      card.appendChild(overlay);
      card.appendChild(label);
      card.appendChild(icon);
      card.appendChild(desc);
      servicesGrid.appendChild(card);
    });
  }

  // -- Homepage: Render About --
  var aboutText = document.getElementById('aboutText');
  if (aboutText) {
    BIO_TEXT.forEach(function (paragraph) {
      var p = document.createElement('p');
      p.textContent = paragraph;
      aboutText.appendChild(p);
    });
  }
})();
