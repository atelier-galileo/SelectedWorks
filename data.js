/* data.js — Project, Service, and Site Config data
 * Source of truth: gemini.md schemas + findings.md content
 * Loaded globally via <script> before other modules
 */

var SITE_CONFIG = {
  siteName: 'Atelier Galileo Morandi',
  logoText: 'AGM\u00A9',
  subtitle: 'DESIGN STUDIO FROM LOS ANGELES',
  timezone: 'America/Los_Angeles',
  timezoneLabel: 'LA',
  social: {
    instagram: '#',
    linkedin: '#',
    x: '#'
  },
  year: 2026
};

var PROJECTS = [
  {
    id: 'ramzi-villa',
    name: 'RAMZI VILLA',
    tagline: 'Crafting a private sanctuary of modern luxury',
    categories: ['interior-design', 'architectural-design'],
    image: { src: 'images/projects/RAMZI villa/desktop/_REVramzi-gigapixel-redefine-creative-2x.jpg', alt: 'Ramzi Villa — exterior rendering' },
    categoryImages: {
      'architectural-design': { src: 'images/projects/RAMZI villa/desktop/_REVramzi-gigapixel-redefine-creative-2x.jpg', alt: 'Ramzi Villa — exterior rendering' },
      'interior-design': { src: 'images/projects/RAMZI villa/desktop/01_Formal Living Room copy.jpg', alt: 'Ramzi Villa — formal living room' }
    },
    featured: false
  },
  {
    id: 'sunset-villa',
    name: 'SUNSET VILLA',
    tagline: 'Framing light and landscape in residential design',
    categories: ['architectural-design', 'interior-design'],
    image: { src: 'images/projects/SUNSET VILLA/LOW RES/desktop/Exterior.jpg', alt: 'Sunset Villa — arched facade exterior' },
    categoryImages: {
      'architectural-design': { src: 'images/projects/SUNSET VILLA/LOW RES/desktop/Exterior.jpg', alt: 'Sunset Villa — arched facade exterior' },
      'interior-design': { src: 'images/projects/SUNSET VILLA/LOW RES/desktop/Living Room.jpg', alt: 'Sunset Villa — living room' }
    },
    featured: false
  },
  {
    id: 'cafe-boulud',
    name: 'CAFE BOULUD',
    tagline: 'Reimagining a culinary icon through spatial design',
    categories: ['interior-design'],
    image: { src: 'images/projects/CAFE BOULUD/desktop/CAFE_BOULUD_BH_HD_02.jpg', alt: 'Cafe Boulud — interior rendering' },
    featured: false
  },
  {
    id: 'royal-fromentin',
    name: 'ROYAL FROMENTIN',
    tagline: 'Restoring grandeur with contemporary precision',
    categories: ['interior-design'],
    image: { src: 'images/projects/ROYAL FROMENTIN/desktop/01.jpg', alt: 'Royal Fromentin — lounge interior' },
    featured: false
  },
  {
    id: 'muse',
    name: 'MUSE',
    tagline: 'Where art meets architecture in curated space',
    categories: ['interior-design'],
    image: { src: 'images/projects/MUSE/desktop/01-COMPLETED-03.jpg', alt: 'MUSE — wall sconce detail' },
    featured: false
  },
  {
    id: 'if-buildings-could-talk',
    name: 'IF BUILDINGS COULD TALK',
    tagline: 'Giving voice to architecture through media projection',
    categories: ['media-art'],
    image: { src: 'images/projects/If buildings could talk/desktop/01.jpg', alt: 'If Buildings Could Talk — facade media projection' },
    featured: true
  },
  {
    id: 'z-hotel',
    name: 'Z HOTEL',
    tagline: 'Engineering hospitality at the edge of computation',
    categories: ['architectural-design', 'interior-design'],
    image: { src: 'images/projects/Z Hotel/desktop/01.jpg', alt: 'Z Hotel — lobby interior', position: 'left center' },
    categoryImages: {
      'architectural-design': { src: 'images/projects/Z Hotel/desktop/02.jpg', alt: 'Z Hotel — exterior', position: 'right center' },
      'interior-design': { src: 'images/projects/Z Hotel/desktop/Generated Image February 23, 2026 - 2_05PM.jpg (2).jpg', alt: 'Z Hotel — lobby interior' }
    },
    featured: true
  },
  {
    id: 'ad-space-club',
    name: 'AD SPACE CLUB',
    tagline: 'Designing immersive environments for nightlife culture',
    categories: ['art-direction', 'technological-integration'],
    image: { src: 'images/projects/AD Space Club/desktop/01.jpg', alt: 'AD Space Club — immersive club environment' },
    featured: true
  },
  {
    id: 'puto-hotel',
    name: 'PUTO HOTEL',
    tagline: 'Sculpting hospitality through geometric glass and raw concrete',
    categories: ['architectural-design', 'interior-design'],
    image: { src: 'images/projects/Puto Hotel/desktop/01.jpg', alt: 'Puto Hotel — exterior view' },
    categoryImages: {
      'architectural-design': { src: 'images/projects/Puto Hotel/desktop/01.jpg', alt: 'Puto Hotel — exterior view' },
      'interior-design': { src: 'images/projects/Puto Hotel/desktop/Lobby_v2.jpg', alt: 'Puto Hotel — lobby sculptural pendants' }
    },
    featured: true
  },
  {
    id: 'mediated-reality',
    name: 'MEDIATED REALITY',
    tagline: 'Bridging physical and digital through extended reality',
    categories: ['media-art', 'technological-integration'],
    image: { src: 'images/projects/Mediated Reality/desktop/01.jpg', alt: 'Mediated Reality — mixed reality visualization' },
    featured: false
  },
  {
    id: 'asap-hommade',
    name: 'A$AP HOMMADE',
    tagline: 'Materializing sound culture through sculptural installation',
    categories: ['media-art', 'art-direction'],
    image: { src: 'images/projects/A$AS Hommade/desktop/01_hommade-02.jpg', alt: 'A$AP Hommade — installation with artist' },
    featured: false
  }
];

var CATEGORIES = [
  { id: 'all', label: 'ALL WORKS' },
  { id: 'architectural-design', label: 'ARCHITECTURAL DESIGN' },
  { id: 'interior-design', label: 'INTERIOR DESIGN' },
  { id: 'art-direction', label: 'ART DIRECTION' },
  { id: 'media-art', label: 'MEDIA ART' },
  { id: 'technological-integration', label: 'TECHNOLOGICAL INTEGRATION' }
];

var SERVICES = [
  {
    id: 'architectural-design',
    name: 'ARCHITECTURAL DESIGN',
    description: 'Exterior and interior architectural projects with a focus on computational design and digital fabrication.',
    image: { src: 'images/services/desktop/ARCHITECTURAL DESIGN.jpg', alt: 'Architectural design — angular geometry with dramatic lighting' }
  },
  {
    id: 'interior-design',
    name: 'INTERIOR DESIGN',
    description: 'High-end interior spaces with curated materials, bespoke furniture, and sculptural details.',
    image: { src: 'images/services/desktop/INTERIOR DESIGN.jpg', alt: 'Interior design — curated materials and warm lighting' }
  },
  {
    id: 'art-direction',
    name: 'ART DIRECTION',
    description: 'Spatial concepts, set design, and campaign shoots where environment shapes meaning.',
    image: { src: 'images/services/desktop/ART DIRECTION.jpg', alt: 'Art direction — editorial composition and styled objects' }
  },
  {
    id: 'media-art',
    name: 'MEDIA ART',
    description: 'Immersive installations, projection mapping, and digital art in physical space.',
    image: { src: 'images/services/desktop/MEDIA ART.jpg', alt: 'Media art — immersive installation with light and color' }
  },
  {
    id: 'digital-fabrication',
    name: 'DIGITAL FABRICATION',
    description: 'Robotic fabrication, machine-assisted making, and additive systems that translate computational logic directly into physical form.',
    image: { src: 'images/services/desktop/DIGITAL FABRICATION.jpg', alt: 'Digital fabrication — CNC-milled parametric object closeup' }
  },
  {
    id: 'technological-integration',
    name: 'TECHNOLOGICAL INTEGRATION',
    description: 'Computational design visualization, algorithmic patterns, and smart-system interfaces.',
    image: { src: 'images/services/desktop/TECHNOLOGICAL INTEGRATION.jpg', alt: 'Technological integration — algorithmic pattern visualization' }
  }
];

/* Project detail data — extended info for project detail pages */
var PROJECT_DETAILS = {
  'cafe-boulud': {
    subtitle: 'Reimagining a culinary icon through spatial design',
    heroImage: { src: 'images/projects/CAFE BOULUD/desktop/CAFE_BOULUD_BH_HD_02.jpg', alt: 'Cafe Boulud — main interior rendering' },
    overlayText: 'CAFE BOULUD',
    meta: {
      services: ['Interior Design', 'Fabrication'],
      client: 'SHVO - Mandarin Oriental',
      location: '9200 Wilshire Blvd, Beverly Hills, CA 90212',
      status: 'Completed',
      year: '2025'
    },
    info: 'Located on the ground floor of the new Mandarin Oriental Beverly Hills, Cafe Boulud is a high-end restaurant by world-renowned chef Daniel Boulud, his first venture in Los Angeles. The space offers both indoor and outdoor dining at the intersection of culinary art and design. The entry unfolds through a series of walls that act like theatrical stages, gradually revealing the interior. Organic forms and custom-designed pieces envelop diners in a timeless atmosphere with modern touches. Three distinct dining areas define the experience. The bistro features a mosaic-adorned bar and niche booths that create an intimate, private ambiance, while a large ceiling mirror enhances the light and reflects the surrounding space.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/CAFE BOULUD/desktop/ENTRANCE.jpg', alt: 'Cafe Boulud — entrance', layout: 'wide' },
      { src: 'images/projects/CAFE BOULUD/desktop/CAFE_BOULUD_BH_HD_03.jpg', alt: 'Cafe Boulud — dining room arcade', layout: 'portrait' },
      { src: 'images/projects/CAFE BOULUD/desktop/CAFE_BOULUD_BH_HD_04.jpg', alt: 'Cafe Boulud — main dining room', layout: 'portrait' },
      { src: 'images/projects/CAFE BOULUD/desktop/CAFE_BOULUD_BH_HD_05.jpg', alt: 'Cafe Boulud — bar area', layout: 'wide' },
      { src: 'images/projects/CAFE BOULUD/desktop/CAFE_BOULUD_BH_HD_09.jpg', alt: 'Cafe Boulud — terrace dining', layout: 'wide' },
      { src: 'images/projects/CAFE BOULUD/desktop/CAFE_BOULUD_BH_HD_07.jpg', alt: 'Cafe Boulud — ceiling sculpture', layout: 'portrait' }
    ],
    galleryLayout: [
      { type: 'cine', images: [
        { src: 'images/projects/CAFE BOULUD/desktop/ENTRANCE.jpg', alt: 'Cafe Boulud — entrance' }
      ]},
      { type: 'split', images: [
        { src: 'images/projects/CAFE BOULUD/desktop/CAFE_BOULUD_BH_HD_03.jpg', alt: 'Cafe Boulud — dining room arcade' },
        { src: 'images/projects/CAFE BOULUD/desktop/CAFE_BOULUD_BH_HD_04.jpg', alt: 'Cafe Boulud — main dining room' }
      ]},
      { type: 'split', images: [
        { src: 'images/projects/CAFE BOULUD/Construction/desktop/IMG_3987.jpg', alt: 'Construction photo' },
        { src: 'images/projects/CAFE BOULUD/Construction/desktop/IMG_3996.jpg', alt: 'Construction photo' }
      ]},
      { type: 'split', images: [
        { src: 'images/projects/CAFE BOULUD/Construction/desktop/IMG_3977.jpg', alt: 'Construction photo' },
        { src: 'images/projects/CAFE BOULUD/Construction/desktop/IMG_3982.jpg', alt: 'Construction photo' }
      ]},
      { type: 'split', images: [
        { src: 'images/projects/CAFE BOULUD/Construction/desktop/IMG_3992.jpg', alt: 'Construction photo' },
        { src: 'images/projects/CAFE BOULUD/Construction/desktop/IMG_3990.jpg', alt: 'Construction photo' }
      ]},
      { type: 'cine', images: [
        { src: 'images/projects/CAFE BOULUD/desktop/CAFE_BOULUD_BH_HD_05.jpg', alt: 'Cafe Boulud — bar area' }
      ]},
      { type: 'offset', images: [
        { src: 'images/projects/CAFE BOULUD/desktop/CAFE_BOULUD_BH_HD_07.jpg', alt: 'Cafe Boulud — ceiling sculpture' },
        { src: 'images/projects/CAFE BOULUD/desktop/CAFE_BOULUD_BH_HD_02.jpg', alt: 'Cafe Boulud — main interior rendering' }
      ]},
      { type: 'cine', images: [
        { src: 'images/projects/CAFE BOULUD/desktop/CAFE_BOULUD_BH_HD_09.jpg', alt: 'Cafe Boulud — terrace dining' }
      ]}
    ]
  },
  'royal-fromentin': {
    subtitle: 'Restoring grandeur with contemporary precision',
    heroImage: { src: 'images/projects/ROYAL FROMENTIN/desktop/01.jpg', alt: 'Royal Fromentin — exterior' },
    overlayText: 'ROYAL FROMENTIN',
    meta: {
      services: ['Architecture', 'Interior Design'],
      client: 'Orea',
      location: 'Paris, France',
      status: 'In Progress',
      year: '2023'
    },
    info: 'This boutique hotel on Rue de Fromentin in Pigalle involves the conservation and restoration of an 18th-century building. Spanning seven floors with 60 guest rooms, the ground floor houses the lobby while the basement contains a spa. The guest rooms share a unified framework for furnishings and FF&E, while subtle shifts in materials and finishes give each room its own character, resulting in 10 differentiated styles across six floors. The basement spa occupies former wine cellars, where vaulted stone ceilings lend a solemn, timeless atmosphere. A heated swimming pool, hydromassage area, and sauna are carefully integrated into the historic setting, enhancing wellbeing while preserving the authenticity of the space.',
    liveLink: null,
    galleryLayout: [
      { type: 'cine', images: [
        { src: 'images/projects/ROYAL FROMENTIN/desktop/Entry.jpg', alt: 'Royal Fromentin — entry' }
      ]},
      { type: 'offset', images: [
        { src: 'images/projects/ROYAL FROMENTIN/desktop/LOUNGE copy.jpg', alt: 'Royal Fromentin — lounge' },
        { src: 'images/projects/ROYAL FROMENTIN/desktop/elv_lobby_04.jpg', alt: 'Royal Fromentin — elevator lobby' }
      ]},
      { type: 'offset-r', images: [
        { src: 'images/projects/ROYAL FROMENTIN/desktop/POOL_Final.jpg', alt: 'Royal Fromentin — spa pool' },
        { src: 'images/projects/ROYAL FROMENTIN/desktop/POOL_02.jpg', alt: 'Royal Fromentin — pool lounge' }
      ]},
      { type: 'cine', images: [
        { src: 'images/projects/ROYAL FROMENTIN/desktop/rf-02.jpg', alt: 'Royal Fromentin — exterior view' }
      ]},
      { type: 'split', images: [
        { src: 'images/projects/ROYAL FROMENTIN/desktop/rf-01.jpg', alt: 'Royal Fromentin — exterior' },
        { src: 'images/projects/ROYAL FROMENTIN/desktop/room_05 copy.jpg', alt: 'Royal Fromentin — guest room' }
      ]}
    ]
  },
  'z-hotel': {
    subtitle: 'Engineering hospitality at the edge of computation',
    heroImage: { src: 'images/projects/Z Hotel/desktop/01.jpg', alt: 'Z Hotel — architectural exterior' },
    overlayText: 'Z HOTEL',
    meta: {
      services: ['Architecture', 'Computational Design', 'Interior Design'],
      client: 'Powerlong',
      location: 'Zhoushan, China',
      status: 'Completed',
      year: '2023'
    },
    info: 'Z Hotel is where computational logic becomes spatial experience. The tower\'s sheared, non-orthogonal massing refuses the conventions of hospitality architecture: no symmetry, no welcoming gesture, no decorative softening. Every angle is derived, every surface the outcome of a process rather than a formal preference. Inside, spaces read as carved and eroded rather than decorated, shaped by forces rather than by taste. The design operates through contrast and reduction: the more the architecture strips away, the more every deliberate object within it becomes charged. Z Hotel does not perform luxury through material richness. It performs it through spatial intelligence, precision, and restraint.',
    liveLink: null,
    galleryLayout: [
      { type: 'cine', images: [
        { src: 'images/projects/Z Hotel/desktop/ComfyUI-Gemini25 - z hotel - Drone-Upscale_00002_.jpg', alt: 'Z Hotel — aerial view' }
      ]},
      { type: 'offset', images: [
        { src: 'images/projects/Z Hotel/desktop/02.jpg', alt: 'Z Hotel — exterior close-up' },
        { src: 'images/projects/Z Hotel/desktop/ComfyUI-Gemini25 - z hotel - Construction_00003_.jpg', alt: 'Z Hotel — facade construction' }
      ]},
      { type: 'offset-r', images: [
        { src: 'images/projects/Z Hotel/desktop/ComfyUI-Gemini25 - z hotel - Construction_00004_.jpg', alt: 'Z Hotel — structural construction' },
        { src: 'images/projects/Z Hotel/desktop/Generated Image February 23, 2026 - 2_05PM.jpg (2).jpg', alt: 'Z Hotel — lobby' }
      ]},
      { type: 'cine', images: [
        { src: 'images/projects/Z Hotel/desktop/Generated Image February 24, 2026 - 11_46AM.jpg (1).jpg', alt: 'Z Hotel — guest room' }
      ]},
      { type: 'cine', images: [
        { src: 'images/projects/Z Hotel/desktop/Generated Image February 25, 2026 - 12_06PM.jpg.jpg', alt: 'Z Hotel — twin room' }
      ]}
    ]
  },
  'muse': {
    subtitle: 'Where art meets architecture in curated space',
    heroImage: { src: 'images/projects/MUSE/desktop/01-COMPLETED-03.jpg', alt: 'MUSE — wall sconce detail' },
    overlayText: 'MUSE',
    meta: {
      services: ['Interior Design', 'Fabrication'],
      client: 'Eden House Holding',
      location: 'Santa Monica, CA',
      status: 'Completed',
      year: '2024'
    },
    info: 'Located near the ocean in Santa Monica, this small restaurant stands out for its meticulous attention to detail, every element carefully designed to create a balanced harmony of form, lighting, and materials. Often described as a treasure chest washed ashore, it serves modern French cuisine complemented by fine art pieces. Curved lines, soft lighting, rich marble, and plush textiles blend classic style with a modern twist, crafting a space that feels both sophisticated and cozy. The experience extends beyond the dining room, oak gives way to walnut in the hallway and ceramic in the restrooms, marking each transition with a shift in material and color. Custom sconces with multicolored aluminum leaves serve as focal points, diffusing a warm, soft light throughout.',
    liveLink: null,
    galleryLayout: [
      { type: 'offset', images: [
        { src: 'images/projects/MUSE/desktop/COMPLETED-011.jpg', alt: 'MUSE — entry reception' },
        { src: 'images/projects/MUSE/desktop/COMPLETED-012.jpg', alt: 'MUSE — door detail' }
      ]},
      { type: 'offset-r', images: [
        { src: 'images/projects/MUSE/desktop/COMPLETED-010.jpg', alt: 'MUSE — restroom vanity' },
        { src: 'images/projects/MUSE/desktop/COMPLETED-01.jpg', alt: 'MUSE — marble table detail' }
      ]},
      { type: 'split', images: [
        { src: 'images/projects/MUSE/desktop/011_MUSE.jpg', alt: 'MUSE — main dining room' },
        { src: 'images/projects/MUSE/desktop/03_MUSE.jpg', alt: 'MUSE — dining room angle' }
      ]},
      { type: 'offset', images: [
        { src: 'images/projects/MUSE/desktop/COMPLETED-04.jpg', alt: 'MUSE — bar area' },
        { src: 'images/projects/MUSE/desktop/COMPLETED-06.jpg', alt: 'MUSE — intimate booth' }
      ]},
      { type: 'cine', images: [
        { src: 'images/projects/MUSE/desktop/COMPLETED-07.jpg', alt: 'MUSE — door panel close-up' }
      ]}
    ]
  },
  'ramzi-villa': {
    subtitle: 'Crafting a private sanctuary of modern luxury',
    heroImage: { src: 'images/projects/RAMZI villa/desktop/01_Formal Living Room copy.jpg', alt: 'Ramzi Villa — formal living room' },
    overlayText: 'RAMZI VILLA',
    meta: {
      services: ['Interior Design', 'Architectural Design'],
      client: 'Private Client',
      location: 'Amman, Jordan',
      status: 'In Progress',
      year: '2023'
    },
    info: 'Built atop an existing structure, this new villa in Amman emerges as a natural extension of its foundation, carefully designed to integrate with what came before it while establishing its own presence. The architecture seeks harmony, respecting the proportions and materiality of the original building. Stone, wood, and traditional plasters create a seamless connection between past and present, allowing the villa to feel as though it has always belonged to this place. The interplay of old and new is subtle yet intentional, with every detail considered to enhance continuity while bringing a refined sense of modernity.',
    liveLink: null,
    galleryLayout: [
      { type: 'cine', images: [
        { src: 'images/projects/RAMZI villa/desktop/RAMZI_VILLA_EXTERIOR_02.jpg', alt: 'Ramzi Villa — villa entrance' }
      ]},
      { type: 'split', images: [
        { src: 'images/projects/RAMZI villa/desktop/RAMZI_VILLA_POOL_01.jpg', alt: 'Ramzi Villa — pool courtyard' },
        { src: 'images/projects/RAMZI villa/desktop/Ramzi3_00001_.jpg', alt: 'Ramzi Villa — pool terrace' }
      ]},
      { type: 'const-6', images: [
        { src: 'images/projects/RAMZI villa/construction/desktop/06c33737-e1cd-4dfb-812c-74e5414cf95f.jpg', alt: 'Construction photo' },
        { src: 'images/projects/RAMZI villa/construction/desktop/647dd071-e784-43d9-9a99-7f0a646c1593.jpg', alt: 'Construction photo' },
        { src: 'images/projects/RAMZI villa/construction/desktop/6b2a7aff-b44c-4631-8949-1a489ad16c18.jpg', alt: 'Construction photo' },
        { src: 'images/projects/RAMZI villa/construction/desktop/53c531ae-7159-42f2-9b87-eec933a899d6.jpg', alt: 'Construction photo' },
        { src: 'images/projects/RAMZI villa/construction/desktop/69e3f299-1218-42c4-bd0b-f045dbf7d98a.jpg', alt: 'Construction photo' },
        { src: 'images/projects/RAMZI villa/construction/desktop/784f3c99-3fce-45e2-a425-16474df14286.jpg', alt: 'Construction photo' }
      ]},
      { type: 'offset', images: [
        { src: 'images/projects/RAMZI villa/desktop/02_Family Room COPY.jpg', alt: 'Ramzi Villa — family room' },
        { src: 'images/projects/RAMZI villa/desktop/03_Dining Room copy.jpg', alt: 'Ramzi Villa — dining room' }
      ]},
      { type: 'cine', images: [
        { src: 'images/projects/RAMZI villa/desktop/06_Master Bedroom copy.jpg', alt: 'Ramzi Villa — master bedroom' }
      ]},
      { type: 'split', images: [
        { src: 'images/projects/RAMZI villa/desktop/04_MasterBathroom copy.jpg', alt: 'Ramzi Villa — master bathroom' },
        { src: 'images/projects/RAMZI villa/desktop/05_Sauna Vanity copy.jpg', alt: 'Ramzi Villa — sauna vanity' }
      ]}
    ]
  },
  'sunset-villa': {
    subtitle: 'Framing light and landscape in residential design',
    heroImage: { src: 'images/projects/SUNSET VILLA/LOW RES/desktop/ExteriorV2.jpg', alt: 'Sunset Villa — exterior' },
    overlayText: 'SUNSET VILLA',
    meta: {
      services: ['Architecture', 'Interior Design'],
      client: 'Private',
      location: '1271 Sunset Plaza Dr, Los Angeles, CA',
      status: 'Completed',
      year: '2023'
    },
    info: 'Located on Sunset Plaza Dr., Sunset Villa is nestled within a lush Italian-Californian garden, a sanctuary where architecture and nature exist in harmony. Every space is designed to feel both expansive and intimate, blending timeless elegance with California charm. The private garden becomes a place for gathering and celebration, with terraces, a pool, and an outdoor bar and kitchen conceived for hosting. Embraced by evolving scents and colors, the architecture remains quiet and sheltered from urban noise. The heart of the villa beats in its living spaces, an inviting living room opening toward sun-drenched terraces, a dining room made for long meals, and a bar for evenings well spent. The family room offers warmth and relaxation, while the office provides a quiet corner for inspiration and focus.',
    liveLink: null,
    galleryLayout: [
      { type: 'cine', images: [
        { src: 'images/projects/SUNSET VILLA/desktop/_REVComfyUI_temp_spvnu_00016_-gigapixel-redefine-realistic-2x.jpg', alt: 'Sunset Villa — exterior render' }
      ]},
      { type: 'offset-r', images: [
        { src: 'images/projects/SUNSET VILLA/desktop/_REVSUNSET VILLA_00009_-gigapixel-redefine-realistic-2x.jpg', alt: 'Sunset Villa — exterior view' },
        { src: 'images/projects/SUNSET VILLA/LOW RES/desktop/pool.jpg', alt: 'Sunset Villa — pool terrace' }
      ]},
      { type: 'offset', images: [
        { src: 'images/projects/SUNSET VILLA/LOW RES/desktop/Living Room.jpg', alt: 'Sunset Villa — living room' },
        { src: 'images/projects/SUNSET VILLA/LOW RES/desktop/Bar.jpg', alt: 'Sunset Villa — bar' }
      ]},
      { type: 'split', images: [
        { src: 'images/projects/SUNSET VILLA/desktop/07_1271SunsetPlazaDrive032.jpg', alt: 'Construction photo' },
        { src: 'images/projects/SUNSET VILLA/desktop/05_1271SunsetPlazaDrive025.jpg', alt: 'Construction photo' }
      ]},
      { type: 'split', images: [
        { src: 'images/projects/SUNSET VILLA/desktop/08_1271SunsetPlazaDrive039.jpg', alt: 'Construction photo' },
        { src: 'images/projects/SUNSET VILLA/desktop/10_1271SunsetPlazaDrive021.jpg', alt: 'Construction photo' }
      ]},
      { type: 'split', images: [
        { src: 'images/projects/SUNSET VILLA/LOW RES/desktop/Dining.jpg', alt: 'Sunset Villa — dining room' },
        { src: 'images/projects/SUNSET VILLA/desktop/_REVSUNSET VILLA_00023_-gigapixel-redefine-realistic-2x.jpg', alt: 'Sunset Villa — garden view' }
      ]}
    ]
  },
  'if-buildings-could-talk': {
    subtitle: 'Giving voice to architecture through media projection',
    heroImage: { src: 'images/projects/If buildings could talk/desktop/01.jpg', alt: 'If Buildings Could Talk — facade projection' },
    overlayText: 'IF BUILDINGS COULD TALK',
    meta: {
      services: ['Media Art', 'Technological Integration'],
      client: 'Cultural Commission',
      location: 'Various',
      status: 'Completed',
      year: '2022'
    },
    info: 'If Buildings Could Talk is a media art installation that uses projection mapping to transform architectural facades into living narratives. Each building\'s history, structural logic, and cultural significance are translated into dynamic visual compositions projected at scale.',
    liveLink: null,
    galleryLayout: [
      { type: 'portrait-2', images: [
        { src: 'images/projects/If buildings could talk/desktop/z hotel facade_E_00010_.jpg', alt: 'If Buildings Could Talk — facade sunny' },
        { src: 'images/projects/If buildings could talk/desktop/z hotel facade_G_00010_.jpg', alt: 'If Buildings Could Talk — street life' }
      ]},
      { type: 'portrait-3', images: [
        { src: 'images/projects/If buildings could talk/desktop/z hotel facade_E_00007_.jpg', alt: 'If Buildings Could Talk — facade rainy' },
        { src: 'images/projects/If buildings could talk/desktop/z hotel facade_G_00007_.jpg', alt: 'If Buildings Could Talk — street scene' },
        { src: 'images/projects/If buildings could talk/desktop/z hotel facade_E_A_00001_.jpg', alt: 'If Buildings Could Talk — performance' }
      ]}
    ]
  },
  'mediated-reality': {
    subtitle: 'Bridging physical and digital through extended reality',
    heroImage: { src: 'images/projects/Mediated Reality/desktop/01.jpg', alt: 'Mediated Reality — mixed reality visualization' },
    overlayText: 'MEDIATED REALITY',
    meta: {
      services: ['Media Art', 'Technological Integration'],
      client: 'Research Project',
      location: 'Los Angeles, CA',
      status: 'Completed',
      year: '2022'
    },
    info: 'Mediated Reality is an ongoing research project exploring how extended reality technologies can augment architectural experience. Through mixed-reality headsets and spatial computing, visitors interact with invisible layers of information embedded within physical spaces.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/Mediated Reality/desktop/03.jpg', alt: 'Mediated Reality — installation view', layout: 'portrait' },
      { src: 'images/projects/Mediated Reality/desktop/Picture1.jpg', alt: 'Mediated Reality — floral detail grid', layout: 'portrait' },
      { src: 'images/projects/Mediated Reality/desktop/combo.jpg', alt: 'Mediated Reality — building overlay composite', layout: 'portrait' },
      { src: 'images/projects/Mediated Reality/desktop/f324xray copy.jpg', alt: 'Mediated Reality — technical visualization', layout: 'portrait' }
    ]
  },
  'ad-space-club': {
    subtitle: 'Designing immersive environments for nightlife culture',
    heroImage: { src: 'images/projects/AD Space Club/desktop/01.jpg', alt: 'AD Space Club — immersive environment' },
    overlayText: 'AD SPACE CLUB',
    meta: {
      services: ['Art Direction', 'Interior Design', 'Fabrication'],
      client: 'LMDV',
      location: 'Milan, Italy',
      status: 'Concept Design',
      year: '2024'
    },
    info: 'AD Space Club is a nightlife venue where spatial design and sensory immersion converge. The interior transforms through programmable lighting, kinetic surfaces, and acoustic design, creating an environment that evolves throughout the night.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/AD Space Club/desktop/ComfyUI_temp_gctnl_00002_.jpg', alt: 'AD Space Club — main hall', layout: 'wide' },
      { src: 'images/projects/AD Space Club/desktop/ComfyUI_temp_gctnl_00021_.jpg', alt: 'AD Space Club — lounge area', layout: 'wide' },
      { src: 'images/projects/AD Space Club/desktop/ComfyUI_temp_sxpts_00016_.jpg', alt: 'AD Space Club — floating astronaut', layout: 'wide' },
      { src: 'images/projects/AD Space Club/desktop/ComfyUI_temp_sxpts_00024_.jpg', alt: 'AD Space Club — overhead view', layout: 'wide' }
    ]
  },
  'puto-hotel': {
    subtitle: 'Sculpting hospitality through geometric glass and raw concrete',
    heroImage: { src: 'images/projects/Puto Hotel/desktop/01.jpg', alt: 'Puto Hotel — full exterior' },
    overlayText: 'PUTO HOTEL',
    meta: {
      services: ['Architectural Design', 'Interior Design'],
      client: 'Puto Hotel',
      location: 'Undisclosed',
      status: 'In Progress',
      year: '2026'
    },
    info: 'Puto Hotel is a hospitality concept defined by the tension between raw materiality and geometric precision. A faceted glass tower rises from a sculptural stone base, its diamond-grid curtain wall refracting light and landscape. Inside, exposed concrete meets warm earth tones — creating spaces that feel both monumental and intimate.',
    liveLink: null,
    galleryLayout: [
      { type: 'offset-r', images: [
        { src: 'images/projects/Puto Hotel/desktop/acdeea1f-0621-478e-9cea-47a7e4b60790.jpg', alt: 'Puto Hotel — entrance golden hour' },
        { src: 'images/projects/Puto Hotel/desktop/Lobby_v2.jpg', alt: 'Puto Hotel — lobby sculptural pendants' }
      ]},
      { type: 'cine', images: [
        { src: 'images/projects/Puto Hotel/desktop/PUTO_InteriorSpace_v4_00004_.jpg', alt: 'Puto Hotel — glass gallery hall' }
      ]},
      { type: 'cine', images: [
        { src: 'images/projects/Puto Hotel/desktop/Generated Image March 11, 2026 - 11_15PM.jpg', alt: 'Puto Hotel — guest room sea view' }
      ]},
      { type: 'split', images: [
        { src: 'images/projects/Puto Hotel/desktop/Generated Image March 11, 2026 - 11_23PM.jpg', alt: 'Puto Hotel — guest room detail' },
        { src: 'images/projects/Puto Hotel/desktop/Generated Image March 24, 2026 - 3_31PM.jpg', alt: 'Puto Hotel — suite ocean view' }
      ]}
    ]
  },
  'asap-hommade': {
    subtitle: 'Materializing sound culture through sculptural installation',
    heroImage: { src: 'images/projects/A$AS Hommade/desktop/01_hommade-02.jpg', alt: 'A$AP Hommade — installation with artist' },
    overlayText: 'A$AP HOMMADE',
    meta: {
      services: ['Media Art', 'Art Direction'],
      client: 'A$AP Rocky',
      location: 'Exhibition',
      status: 'Completed',
      year: '2024'
    },
    info: 'A$AP Hommade is a multimedia installation that transforms music production into physical space. The sculptural cabinet combines analog equipment, neon accents, and custom fabrication — creating a functional art piece that blurs the boundary between instrument, artifact, and architectural intervention.',
    liveLink: null,
    gallery: [
      { src: 'images/projects/A$AS Hommade/desktop/hommade-07.jpg', alt: 'A$AP Hommade — exhibition context', layout: 'wide' },
      { src: 'images/projects/A$AS Hommade/desktop/hommade-01.jpg', alt: 'A$AP Hommade — panoramic installation view', layout: 'wide' },
      { src: 'images/projects/A$AS Hommade/desktop/hommade-09.jpg', alt: 'A$AP Hommade — wide exhibition shot', layout: 'wide' },
      { src: 'images/projects/A$AS Hommade/desktop/hommade-03.jpg', alt: 'A$AP Hommade — front view', layout: 'portrait' },
      { src: 'images/projects/A$AS Hommade/desktop/hommade-08.jpg', alt: 'A$AP Hommade — frontal exhibition view', layout: 'portrait' },
      { src: 'images/projects/A$AS Hommade/desktop/hommade-05.jpg', alt: 'A$AP Hommade — left angle', layout: 'portrait' },
      { src: 'images/projects/A$AS Hommade/desktop/hommade-06.jpg', alt: 'A$AP Hommade — equipment detail', layout: 'portrait' }
    ]
  }
};

var BIO_TEXT = [
  'Atelier Galileo Morandi is a design office working at the intersection of creativity and technology. The studio is involved with a variety of architecture and interior design projects, with a core focus on the integration between digital manufacturing and computational design \u2014 delivering custom, high-end products to clients such as A$AP Rocky, SHVO, Daniel Boulud, Waldorf Astoria, and Boffi.',
  'The studio is currently engaged in publishing for Elle Decor Italy, contributing a dedicated weekly column on Innovations in Architecture & Technology.',
  'Galileo previously served as Senior Associate at Jerde Partnership in Los Angeles and Dewan Architects in Dubai, directing the computational design departments for both offices and leading several large-scale developments across the USA, South America, China, Europe, and the Middle East.'
];
