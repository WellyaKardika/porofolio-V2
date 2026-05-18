import React from 'react';
import RevealText from '../components/RevealText';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/WellyaKardika' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wellyakardika/' },
  { label: 'Instagram', href: 'https://www.instagram.com/wellyakardikaa/' },
  { label: 'Email', href: 'mailto:@kardikawellya@gmail.com' },
  { label: 'My CV', href: '/cv.pdf' },
];

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#F3F4F6] text-[#0C0C0C] py-20 px-6 sm:px-8 md:px-10 lg:px-20 flex flex-col gap-24 sm:gap-32 md:gap-40 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-20">
      
      {/* Top Section - Large Text */}
      <div className="max-w-4xl">
        <RevealText delay={0} duration={0.8} margin="0px 0px -50px 0px">
          <h2 
            className="font-medium tracking-tight leading-[1.1]" 
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Bringing your vision to life,<br />
            one line of code at a time.
          </h2>
        </RevealText>
      </div>

      {/* Bottom Section - Logo, Copyright, Socials */}
      <RevealText delay={0.2} duration={0.8} margin="0px 0px -50px 0px">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-12 xl:gap-0">
          
          {/* Bottom Left */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <img 
              src="/logo-black.webp" 
              alt="Wellya Logo" 
              className="h-10 sm:h-12 object-contain" 
              draggable={false}
            />
            <p className="text-[#646973] font-light text-sm sm:text-base">
              Copyright © 2026 Wellya Kardika | All Rights Reserved
            </p>
          </div>

          {/* Bottom Right (Social Links) */}
          <div className="flex flex-col items-start xl:items-end gap-4">
            <p className="text-[#646973] font-medium text-sm sm:text-base uppercase tracking-wider">
              Get in touch
            </p>
            <ul className="flex flex-wrap gap-6 sm:gap-8 md:gap-10">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[#0C0C0C] hover:opacity-60 transition-opacity font-medium text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </RevealText>
    </footer>
  );
};

export default Footer;
