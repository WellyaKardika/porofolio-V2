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
    description: 'Lorem ipsum dolor sit amet consectetur. Sed auctor turpis ac interdum amet quis elit. Nulla viverra amet lorem quam at neque quis dolor quis. Amet rutrum scelerisque duis sapien nibh nibh a varius aliquam. Pretium amet felis auctor a bibendum orci quam amet scelerisque. Amet quisque mattis nulla ipsum dictumst mauris. Malesuada maecenas felis quis risus eget.',
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
    description: 'A beautiful and modern website designed to showcase The Common Bali. Featuring smooth animations and a fully responsive layout.',
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
    description: 'High-end cinematic company profile website for Double Six Group, featuring brutalist-modern redesign and smooth GSAP animations.',
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
    description: 'High-end cinematic company profile website for Double Six Group, featuring brutalist-modern redesign and smooth GSAP animations.',
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
    description: 'High-end cinematic company profile website for Double Six Group, featuring brutalist-modern redesign and smooth GSAP animations.',
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
    description: 'High-end cinematic company profile website for Double Six Group, featuring brutalist-modern redesign and smooth GSAP animations.',
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
    description: 'High-end cinematic company profile website for Double Six Group, featuring brutalist-modern redesign and smooth GSAP animations.',
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
    description: 'High-end cinematic company profile website for Double Six Group, featuring brutalist-modern redesign and smooth GSAP animations.',
    techLogos: [
      '/icon/css3.svg',
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
