export interface ProjectData {
  id: string;
  name: string;
  year: string;
  role: string;
  description: string;
  techLogos: string[]; // SVGs or URLs
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  liveUrl: string;
}

export const projects: ProjectData[] = [
  {
    id: 'watercress-bali',
    name: 'WATERCRESS BALI',
    year: '2026',
    role: 'Web Developer',
    description: 'Modern website for a Bali-based restaurant brand, focused on menu visibility and location details.',
    techLogos: [
      '/icon/Wordpress.svg',
      '/icon/GSAP.svg',
    ],
    thumbnail: '/Project/Watercress-Bali/WTC-1.webp',
    heroImage: '/Project/Watercress-Bali/WTC-1.webp',
    gallery: [
      
    ],
    liveUrl: 'https://watercressbali.com/',
  },
  {
    id: 'the-common-bali',
    name: 'THE COMMON BALI',
    year: '2026',
    role: 'Web Developer',
    description: 'Built a modern, minimalist website tailored to the client\'s brief — clean monochrome branding over immersive full-screen lifestyle imagery.',
    techLogos: [
      '/icon/Wordpress.svg',
      '/icon/GSAP.svg',
    ],
    thumbnail: '/Project/The-Common-Bali/TCM-1.webp', 
    heroImage: '/Project/The-Common-Bali/TCM-1.webp',
    gallery: [],
    liveUrl: 'https://www.thecommonbali.com/',
  },
   {
    id: 'milk-and-madu',
    name: 'MILK & MADU',
    year: '2026',
    role: 'Web Developer',
    description: 'Warm, inviting digital experience for a popular cafe brand, optimized for mobile visitors.',
    techLogos: [
      '/icon/Wordpress.svg',
      '/icon/GSAP.svg',
    ],
    thumbnail: '/Project/Milk-and-Madu/MM-1.webp', 
    heroImage: '/Project/Milk-and-Madu/MM-1.webp', 
    gallery: [
      '/Project/Milk-and-Madu/MM-2.webp',
      '/Project/Milk-and-Madu/MM-3.webp',
    ],
    liveUrl: 'https://milkandmadu.com/',
  },

  {
    id: 'double-six-group',
    name: 'DOUBLE SIX GROUP',
    year: '2026',
    role: 'Web Developer',
    description: 'Multi-property hospitality presence with strong visual identity and clear navigation.',
    techLogos: [
      '/icon/Wordpress.svg',
    ],
    thumbnail: '/Project/Double-six-group/DSG-1.webp', 
    heroImage: '/Project/Double-six-group/DSG-1.webp',
    gallery: [],
    liveUrl: 'https://doublesix.group/',
  },

  {
    id: 'cocoon-beach-club-bali',
    name: 'COCOON BEACH CLUB BALI',
    year: '2026',
    role: 'Web Developer',
    description: 'Migrated the entire site from Oxygen Builder to Elementor, rebuilding all pages while preserving the tropical beach-club aesthetic and improving editor usability.',
    techLogos: [
      '/icon/Wordpress.svg',
    ],
    thumbnail: '/Project/Cocoon-Beach-Club/CCN-1.webp', 
    heroImage: '/Project/Cocoon-Beach-Club/CCN-1.webp',
    gallery: [],
    liveUrl: 'https://cocoon-beach.com/',
  },

   {
    id: 'Information-System-Kos',
    name: 'INFORMATION SYSTEM KOS',
    year: '2025',
    role: 'UI/UX Designer',
    description: 'Room availability and rental tracking system built with Laravel 12 and Filament.',
    techLogos: [
      '/icon/laravel.svg',
      '/icon/tailwindcss.svg',
    ],
    thumbnail: '/Project/Information-System-Kos/SIK-1.webp', 
    heroImage: '/Project/Information-System-Kos/SIK-1.webp', 
    gallery: [
      '/Project/Information-System-Kos/SIK-2.webp',
      '/Project/Information-System-Kos/SIK-1.webp',
    ],
    liveUrl: '',
  },

  {
    id: 'UIUX-E-commerce-Project',
    name: 'UI/UX E-commerce Project',
    year: '2022',
    role: 'UI/UX Designer',
    description: 'UI/UX E-commerce Project for Interactive Design Analysis course, focusing on user flow optimization.',
    techLogos: [
      '/icon/figma.svg',
    ],
    thumbnail: '/Project/UIUX-E-commerce-Project/E-commerce-1.webp', 
    heroImage: '/Project/UIUX-E-commerce-Project/E-commerce-1.webp', 
    gallery: [
      '/Project/UIUX-E-commerce-Project/E-commerce-3.webp',
      '/Project/UIUX-E-commerce-Project/E-commerce-2.webp',
      '/Project/UIUX-E-commerce-Project/E-commerce-1.webp',
      
    ],
    liveUrl: '',
  },

  {
    id: 'Mapandes-Online-Invitation',
    name: 'MAPANDES - ONLINE INVITATION',
    year: '2021',
    role: 'Web Developer',
    description: 'Interactive digital invitation website. Built with HTML5, CSS3, and JavaScript.',
    techLogos: [
      '/icon/html5.svg',
      '/icon/css3.svg',
      '/icon/JS.svg',
    ],
    thumbnail: '/Project/Mapandes-Online-Invitation/MAPENDES-1.webp', 
    heroImage: '/Project/Mapandes-Online-Invitation/MAPENDES-1.webp', 
    gallery: [
      '/Project/Mapandes-Online-Invitation/MAPENDES-2.webp',
      '/Project/Mapandes-Online-Invitation/MAPENDES-1.webp',
    ],
    liveUrl: '',
  }
 
];
