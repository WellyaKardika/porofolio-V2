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
    thumbnail: '/Project/Watercress-Bali/imgi_2_image.webp',
    heroImage: '/Project/Watercress-Bali/imgi_1_image.webp',
    gallery: [
      '/Project/Watercress-Bali/imgi_3_image.webp',
      '/Project/Watercress-Bali/imgi_4_image.webp',
      '/Project/Watercress-Bali/imgi_5_image.webp',
      '/Project/Watercress-Bali/imgi_6_image.webp',
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
    thumbnail: '/Project/The-Common-Bali/imgi_11_image.webp', 
    heroImage: '/Project/The-Common-Bali/imgi_11_image.webp',
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
    ],
    thumbnail: '/Project/Milk-and-Madu/imgi_4_image.webp', 
    heroImage: '/Project/Milk-and-Madu/imgi_4_image.webp', 
    gallery: [],
    liveUrl: 'https://milkandmadu.com/',
  },

  {
    id: 'double-six-group',
    name: 'DOUBLE SIX GROUP',
    year: '2026',
    role: 'Web Developer',
    description: 'High-end cinematic company profile website for Double Six Group, featuring brutalist-modern redesign and smooth GSAP animations.',
    techLogos: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    ],
    thumbnail: '/Project/Double-six-group/imgi_7_image.webp', 
    heroImage: '/Project/Double-six-group/imgi_7_image.webp',
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
    thumbnail: '/Project/Cocoon-Beach-Club/imgi_8_image.webp', 
    heroImage: '/Project/Cocoon-Beach-Club/imgi_8_image.webp',
    gallery: [],
    liveUrl: 'https://cocoon-beach.com/',
  },

   {
    id: 'UIUX-E-commerce-Project',
    name: 'UI/UX E-commerce Project',
    year: '2026',
    role: 'UI/UX Designer',
    description: 'High-end cinematic company profile website for Double Six Group, featuring brutalist-modern redesign and smooth GSAP animations.',
    techLogos: [
      '/icon/figma.svg',
    ],
    thumbnail: '/Project/UIUX-E-commerce-Project/imgi_10_image.webp', 
    heroImage: '/Project/UIUX-E-commerce-Project/imgi_10_image.webp', 
    gallery: [],
    liveUrl: '',
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
    thumbnail: '/Project/Information-System-Kos/imgi_2_image.webp', 
    heroImage: '/Project/Information-System-Kos/imgi_2_image.webp', 
    gallery: [],
    liveUrl: '',
  },

  {
    id: 'Mapandes-Online-Invitation',
    name: 'MAPANDES - ONLINE INVITATION',
    year: '2026',
    role: 'Web Developer',
    description: 'High-end cinematic company profile website for Double Six Group, featuring brutalist-modern redesign and smooth GSAP animations.',
    techLogos: [
      '/icon/css3.svg',
      '/icon/GSAP.svg',
    ],
    thumbnail: '/Project/Mapandes-Online-Invitation/imgi_3_image.webp', 
    heroImage: '/Project/Mapandes-Online-Invitation/imgi_3_image.webp', 
    gallery: [],
    liveUrl: '',
  }
 
];
