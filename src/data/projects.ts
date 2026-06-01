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
    role: 'Creative Developer',
    description: 'WordPress, but not as you know it. I built Watercress Bali as a Single Page Application with custom code and GSAP. Pages don\'t reload. Animations don\'t interrupt. The site just moves, the way a good restaurant experience should.',
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
    role: 'Creative Developer',
    description: 'The Common runs on the same WordPress SPA foundation as Watercress. I took the codebase, removed every color, and rebuilt it around a strict black and white system. The brand is minimal. The site is too.',
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
    role: 'Creative Developer',
    description: 'Milk & Madu is one of the outlets under Double Six Group. I handled the Location and What\'s On pages — built on WordPress with custom code and GSAP animations.',
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
    role: 'Frontend Developer',
    description: 'The main website for Double Six Group — the hospitality company I work for. Built on WordPress, this site serves as the digital face of the entire group, bringing together all their outlets under one clean and cohesive online presence.',
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
    role: 'Frontend Developer',
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
    id: 'portfolio-V1',
    name: 'Wellya Kardika Portfolio V1',
    year: '2026',
    role: 'Creative Developer',
    description: 'My first portfolio, built with Next.js 16. GSAP handles the animations, React Three Fiber handles the 3D. Multilingual intro sequence, scroll-stacking cards, pixel transitions.I built it to learn. It worked.',
    techLogos: [
      '/icon/nextjs.svg',
      '/icon/react.svg',
      '/icon/GSAP.svg',
    ],
    thumbnail: '/Project/Portfolio-v1/porto-1.webp', 
    heroImage: '/Project/Portfolio-v1/porto-1.webp',
    gallery: [
      '/Project/Portfolio-v1/porto-1.webp',
      '/Project/Portfolio-v1/porto-2.webp',
    ],
    liveUrl: 'https://github.com/WellyaKardika/project-portofolio',
  },

   {
    id: 'Information-System-Kos',
    name: 'INFORMATION SYSTEM KOS',
    year: '2025',
    role: 'Fullstack Developer',
    description: 'A boarding house management system built with Laravel and Filament, styled with Tailwind CSS. Comes with a full CRUD system and admin dashboard to manage rooms and tenants — plus a clean user-facing view where anyone can check room availability in real time.',
    techLogos: [
      '/icon/laravel.svg',
      '/icon/tailwindcss.svg',
      '/icon/filament.svg',
    ],
    thumbnail: '/Project/Information-System-Kos/SIK-1.webp', 
    heroImage: '/Project/Information-System-Kos/SIK-1.webp', 
    gallery: [
      '/Project/Information-System-Kos/SIK-2.webp',
      '/Project/Information-System-Kos/SIK-1.webp',
    ],
    liveUrl: 'https://github.com/WellyaKardika/Kos-kardika',
  },

  {
    id: 'UIUX-E-commerce-Project',
    name: 'UI/UX E-commerce Project',
    year: '2022',
    role: 'UI/UX Designer',
    description: 'UI/UX E-commerce Project for Interactive Design Analysis course, focusing on user flow optimization.',
    techLogos: [
      '/icon/figma.svg',
      '/icon/ai.svg',
      '/icon/ps.svg',
    ],
    thumbnail: '/Project/UIUX-E-commerce-Project/E-commerce-1.webp', 
    heroImage: '/Project/UIUX-E-commerce-Project/E-commerce-1.webp', 
    gallery: [
      '/Project/UIUX-E-commerce-Project/E-commerce-3.webp',
      '/Project/UIUX-E-commerce-Project/E-commerce-2.webp',
      '/Project/UIUX-E-commerce-Project/E-commerce-1.webp',
      
    ],
    liveUrl: 'https://www.figma.com/proto/He9uUkHl0NVW2O0iOsBP7K/Electro?page-id=0%3A1&node-id=1-2&p=f&viewport=558%2C498%2C0.09&t=Qbytm9HN9opRXtce-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2',
  },

  {
    id: 'Mapandes-Online-Invitation',
    name: 'MAPANDES - ONLINE INVITATION',
    year: '2021',
    role: 'Frontend Developer',
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
    liveUrl: 'https://github.com/WellyaKardika/Undangan-online',
  }
 
];
