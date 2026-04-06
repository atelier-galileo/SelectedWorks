/* works-filter.js — Category filter, tab underline, stagger animation
 * Works page only.
 */

(function () {
  var grid = document.getElementById('worksGrid');
  var tabsContainer = document.getElementById('filterTabs');
  var underline = document.getElementById('filterUnderline');

  if (!grid || !tabsContainer) return;

  var FADE_MS = 250;
  var REFLOW_MS = 300;
  var STAGGER_MS = 75;

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // -- Render Filter Tabs --
  CATEGORIES.forEach(function (cat, index) {
    var btn = document.createElement('button');
    btn.className = 'filter__tab' + (index === 0 ? ' filter__tab--active' : '');
    btn.textContent = cat.label;
    btn.dataset.category = cat.id;
    btn.addEventListener('click', function () { handleFilter(cat.id, btn); });
    tabsContainer.appendChild(btn);
  });

  // -- Render All Project Cards --
  PROJECTS.filter(function (p) { return !p.hidden; }).forEach(function (project) {
    var card = document.createElement('a');
    card.href = 'project.html?id=' + project.id;
    card.className = 'work-card';
    card.dataset.categories = project.categories.join(' ');
    card.dataset.projectId = project.id;

    var img = document.createElement('img');
    img.className = 'work-card__image';
    img.src = project.image.src;
    img.alt = project.image.alt;
    img.loading = 'lazy';
    addSrcset(img, project.image.src);
    if (project.image.position) {
      img.style.objectPosition = project.image.position;
    }

    var name = document.createElement('h3');
    name.className = 'work-card__name';
    name.textContent = project.name;

    card.appendChild(img);
    card.appendChild(name);
    grid.appendChild(card);
  });

  // -- Tab Underline Position --
  function moveUnderline(tab) {
    if (!underline) return;
    var rect = tab.getBoundingClientRect();
    var parentRect = tabsContainer.getBoundingClientRect();
    underline.style.left = (rect.left - parentRect.left) + 'px';
    underline.style.width = rect.width + 'px';
  }

  // Initialize underline on first tab
  var firstTab = tabsContainer.querySelector('.filter__tab');
  if (firstTab) {
    moveUnderline(firstTab);
  }

  // -- Filter Logic --
  function handleFilter(categoryId, activeTab) {
    // Update active tab
    tabsContainer.querySelectorAll('.filter__tab').forEach(function (t) {
      t.classList.remove('filter__tab--active');
    });
    activeTab.classList.add('filter__tab--active');
    moveUnderline(activeTab);

    // Swap card images based on active category
    var allCards = grid.querySelectorAll('.work-card');
    allCards.forEach(function (card) {
      var pid = card.dataset.projectId;
      var project = PROJECTS.find(function (p) { return p.id === pid; });
      if (!project) return;
      var img = card.querySelector('.work-card__image');
      if (!img) return;

      var catImg = project.categoryImages && project.categoryImages[categoryId];
      var target = catImg || project.image;
      img.src = target.src;
      img.alt = target.alt;
      img.style.objectPosition = target.position || '';
      addSrcset(img, target.src);
    });

    var cards = allCards;
    var matching = [];
    var hidden = [];

    cards.forEach(function (card) {
      if (categoryId === 'all' || card.dataset.categories.indexOf(categoryId) !== -1) {
        matching.push(card);
      } else {
        hidden.push(card);
      }
    });

    if (prefersReducedMotion) {
      // Instant show/hide
      hidden.forEach(function (c) { c.style.display = 'none'; });
      matching.forEach(function (c) {
        c.style.display = '';
        c.style.opacity = '1';
        c.style.transform = '';
      });
      return;
    }

    // Phase 1: Fade out non-matching
    hidden.forEach(function (card) {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
    });

    // Phase 2: After fade-out, toggle display and reflow
    setTimeout(function () {
      hidden.forEach(function (card) {
        card.style.display = 'none';
      });

      // Prepare matching cards (hidden initially)
      matching.forEach(function (card) {
        card.style.display = '';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
      });

      // Phase 3: Stagger fade-in matching cards
      matching.forEach(function (card, index) {
        setTimeout(function () {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 50 + index * STAGGER_MS);
      });
    }, REFLOW_MS);
  }
})();
