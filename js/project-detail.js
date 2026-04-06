/* project-detail.js — Renders project detail page from data.js
 * Reads project ID from URL query param: project.html?id=cafe-boulud
 * Falls back to first project if no ID is provided
 */

(function () {
  var params = new URLSearchParams(window.location.search);
  var projectId = params.get('id') || (PROJECTS.length ? PROJECTS[0].id : null);
  if (!projectId) return;

  // Find the project in PROJECTS array and its detail data
  var project = PROJECTS.find(function (p) { return p.id === projectId; });
  var detail = PROJECT_DETAILS ? PROJECT_DETAILS[projectId] : null;
  if (!project || !detail) return;

  // Page title
  document.getElementById('pageTitle').textContent = project.name + ' — Atelier Galileo Morandi';

  // Hero
  document.getElementById('projTitle').textContent = project.name;
  document.getElementById('projSubtitle').textContent = detail.subtitle;

  // Hero image
  var heroImg = document.getElementById('projHeroImg');
  heroImg.src = detail.heroImage.src;
  heroImg.alt = detail.heroImage.alt;
  addSrcset(heroImg, detail.heroImage.src);

  // Metadata left column
  var metaLeft = document.getElementById('projMetaLeft');
  var metaFields = [
    { label: 'SERVICES', value: detail.meta.services.join(' / ') },
    { label: 'LOCATION', value: detail.meta.location },
    { label: 'CLIENT', value: detail.meta.client },
    { label: 'STATUS', value: detail.meta.status },
    { label: 'YEAR', value: detail.meta.year }
  ];

  metaFields.forEach(function (field) {
    var group = document.createElement('div');
    var label = document.createElement('span');
    label.className = 'proj-detail__label';
    label.textContent = field.label;
    var value = document.createElement('span');
    value.className = 'proj-detail__meta-value';
    value.textContent = field.value;
    group.appendChild(label);
    group.appendChild(value);
    metaLeft.appendChild(group);
  });

  // Info text
  document.getElementById('projInfo').textContent = detail.info;

  // Live link
  var liveLink = document.getElementById('projLiveLink');
  if (detail.liveLink) {
    liveLink.href = detail.liveLink;
    liveLink.target = '_blank';
    liveLink.rel = 'noopener noreferrer';
  } else {
    liveLink.style.display = 'none';
  }

  // Gallery — filmstrip layout
  var gallery = document.getElementById('projGallery');

  if (detail.galleryLayout) {
    // Custom layout from builder
    var classMap = {
      'cine': 'proj-detail__frame--cine',
      'split': 'proj-detail__frame--split',
      'offset': 'proj-detail__frame--offset',
      'offset-r': 'proj-detail__frame--offset-r',
      'const-4': 'proj-detail__frame--const-4',
      'const-6': 'proj-detail__frame--const-6',
      'portrait-1': 'proj-detail__frame--portrait-1',
      'portrait-2': 'proj-detail__frame--portrait-2',
      'portrait-3': 'proj-detail__frame--portrait-3'
    };

    detail.galleryLayout.forEach(function (row) {
      var frame = document.createElement('div');
      frame.className = classMap[row.type] || 'proj-detail__frame--cine';

      row.images.forEach(function (item) {
        var img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.loading = 'lazy';
        addSrcset(img, item.src);
        frame.appendChild(img);
      });

      gallery.appendChild(frame);
    });
  } else if (detail.gallery && detail.gallery.length) {
    // Auto layout
    var images = detail.gallery;
    var patterns = ['cine', 'offset', 'offset-r', 'cine', 'split'];
    var patIdx = 0;
    var i = 0;

    while (i < images.length) {
      var pattern = patterns[patIdx % patterns.length];

      if (pattern === 'cine' || i === images.length - 1) {
        var frame = document.createElement('div');
        frame.className = 'proj-detail__frame--cine';
        var img = document.createElement('img');
        img.src = images[i].src;
        img.alt = images[i].alt;
        img.loading = 'lazy';
        addSrcset(img, images[i].src);
        frame.appendChild(img);
        gallery.appendChild(frame);
        i++;
      } else {
        var frameClass = pattern === 'offset' ? 'proj-detail__frame--offset'
          : pattern === 'offset-r' ? 'proj-detail__frame--offset-r'
          : 'proj-detail__frame--split';
        var frame = document.createElement('div');
        frame.className = frameClass;

        var img1 = document.createElement('img');
        img1.src = images[i].src;
        img1.alt = images[i].alt;
        img1.loading = 'lazy';
        addSrcset(img1, images[i].src);
        frame.appendChild(img1);

        if (i + 1 < images.length) {
          var img2 = document.createElement('img');
          img2.src = images[i + 1].src;
          img2.alt = images[i + 1].alt;
          img2.loading = 'lazy';
          addSrcset(img2, images[i + 1].src);
          frame.appendChild(img2);
          i += 2;
        } else {
          i++;
        }

        gallery.appendChild(frame);
      }
      patIdx++;
    }
  }

  // Next projects — show up to 3 other projects
  var nextGrid = document.getElementById('projNextGrid');
  var others = PROJECTS.filter(function (p) { return p.id !== projectId; });
  // Show the next 3 projects in order
  var currentIndex = PROJECTS.findIndex(function (p) { return p.id === projectId; });
  var visibleProjects = PROJECTS.filter(function (p) { return !p.hidden; });
  var currentVisibleIndex = visibleProjects.findIndex(function (p) { return p.id === projectId; });
  var nextProjects = [];
  for (var i = 1; i <= 3; i++) {
    var idx = (currentVisibleIndex + i) % visibleProjects.length;
    nextProjects.push(visibleProjects[idx]);
  }

  nextProjects.forEach(function (p) {
    var card = document.createElement('a');
    card.href = 'project.html?id=' + p.id;
    card.className = 'proj-detail__next-card';

    var img = document.createElement('img');
    img.src = p.image.src;
    img.alt = p.image.alt;
    img.loading = 'lazy';
    addSrcset(img, p.image.src);

    var name = document.createElement('span');
    name.className = 'proj-detail__next-card-name';
    name.textContent = p.name;

    card.appendChild(img);
    card.appendChild(name);
    nextGrid.appendChild(card);
  });

  // Update project card links on homepage/works to point to project detail
  // (handled elsewhere — this script only renders the detail page)
})();
