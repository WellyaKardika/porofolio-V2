import React from 'react';
import RevealText from '../components/RevealText';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    number: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <RevealText delay={0} duration={0.8} margin="0px 0px -100px 0px">
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight pb-2"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </RevealText>

      {/* Service list */}
      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <RevealText key={service.number} delay={i * 0.1} duration={0.8}>
            <div
              className={`flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12 ${
                i < services.length - 1 ? 'border-b' : ''
              }`}
              style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
            >
              {/* Number */}
              <span
                className="font-black text-[#0C0C0C] leading-none flex-shrink-0 pb-1"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>

              {/* Name + Description */}
              <div className="flex flex-col justify-center pt-2 sm:pt-3 md:pt-4 gap-1 sm:gap-2">
                <span
                  className="font-medium uppercase text-[#0C0C0C] leading-tight"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {service.description}
                </span>
              </div>
            </div>
          </RevealText>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
