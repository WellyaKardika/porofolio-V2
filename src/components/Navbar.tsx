import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTransition } from "./TransitionContext";
import Button from "./Button";
import "./Navbar.css";

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
      <nav className="navbar">
        <a href="/" onClick={handleLogoClick} className="navbar__logo">
          <img src="/logo-white.webp" alt="Wellya Logo" className="h-6 sm:h-8 object-contain" draggable={false} />
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay */}
      <div 
        ref={overlayRef} 
        className="navbar__overlay" 
        style={{ clipPath: "circle(0% at 100% 0%)", display: menuOpen ? "flex" : "none" }}
      >
        <ul ref={linksRef} className="navbar__drawer-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                target="_blank"
                
                href={link.href}
                className="navbar__drawer-link"
                onClick={closeMenu}
              >
                <span className="navbar__link-id">{link.id}</span>
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
          >
            My CV
          </Button>
        </div>
      </div>
    </>
  );
}
