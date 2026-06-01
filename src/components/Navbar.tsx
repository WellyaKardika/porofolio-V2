import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTransition } from "./TransitionContext";
import Button from "./Button";

const navLinks = [
  { id: "01", label: "GitHub", href: "https://github.com/WellyaKardika" },
  { id: "02", label: "Instagram", href: "https://www.instagram.com/wellyakardikaa/" },
  { id: "03", label: "Linkedin", href: "https://www.linkedin.com/in/wellyakardika/" },
  { id: "04", label: "Mail", href: "mailto:kardikawellya@gmail.com" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  const { contextSafe } = useGSAP({ scope: overlayRef });
  const { navigateWithTransition } = useTransition();

  const toggleMenu = contextSafe(() => {
    if (!menuOpen) {
      setMenuOpen(true);
      gsap.to(overlayRef.current, {
        clipPath: "circle(150% at 100% 0%)",
        duration: 0.8,
        ease: "power3.inOut",
      });
      gsap.fromTo(
        linksRef.current?.querySelectorAll(".navbar__drawer-link") || [],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        overlayRef.current?.querySelector(".btn-cv-anim") || null,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.6, ease: "power2.out" }
      );
    } else {
      gsap.to(overlayRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => setMenuOpen(false),
      });
    }
  });

  const closeMenu = contextSafe(() => {
    gsap.to(overlayRef.current, {
      clipPath: "circle(0% at 100% 0%)",
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => setMenuOpen(false),
    });
  });

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateWithTransition('/');
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[110] h-[80px] flex items-center justify-between px-6 md:px-[40px] bg-transparent mix-blend-difference pointer-events-none">
        <a href="/" onClick={handleLogoClick} className="font-extrabold text-2xl text-white tracking-wider leading-none relative transition-colors duration-300 uppercase pointer-events-auto">
          <img src="/logo.webp" alt="Wellya Logo" className="h-6 sm:h-8 object-contain" draggable={false} />
        </a>

        <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">
          {/* Hamburger */}
          <button
            className="flex flex-col justify-center items-center gap-[6px] w-[50px] h-[50px] bg-transparent border-none cursor-pointer p-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-[30px] h-[2px] bg-white rounded-sm transition-all duration-300 origin-center ${menuOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
            <span className={`block w-[20px] h-[2px] bg-white rounded-sm transition-all duration-300 origin-right self-end ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-[30px] h-[2px] bg-white rounded-sm transition-all duration-300 origin-center ${menuOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay */}
      <div 
        ref={overlayRef} 
        className="fixed inset-0 bg-[#0C0C0C] z-[105] flex items-center justify-center" 
        style={{ clipPath: "circle(0% at 100% 0%)", display: menuOpen ? "flex" : "none" }}
      >
        <ul ref={linksRef} className="list-none flex flex-col w-full">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                target="_blank"
                href={link.href}
                className="navbar__drawer-link group flex items-center justify-center gap-6 w-full py-[15px] px-[20px] relative overflow-hidden z-10 font-extrabold uppercase text-[clamp(2.5rem,6vw,5rem)] text-[#E6E6E6] hover:text-[#0C0C0C] transition-colors duration-300 before:absolute before:left-0 before:top-full before:w-full before:h-full before:bg-[#f3f3f3] before:transition-all before:duration-[400ms] before:ease-in-out before:-z-10 hover:before:top-0"
                onClick={closeMenu}
              >
                <span className="font-mono text-[rgba(215,226,234,0.6)] text-[clamp(1rem,2vw,1.5rem)] font-normal group-hover:text-[#646973] transition-colors duration-300">{link.id}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* My CV Button */}
        <div className="btn-cv-anim absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-10 z-10 mix-blend-difference">
          <Button 
            href="/CV/I%20MADE%20WELLYA%20SUPRATISTHA%20KARDIKA-resume.pdf"
            className="!border-white/20 hover:!border-white text-white"
            target="_blank"
          >
            My CV
          </Button>
        </div>
      </div>
    </>
  );
}
