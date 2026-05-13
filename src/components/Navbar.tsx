import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./Navbar.css";

const navLinks = [
  { id: "01", label: "About", href: "#about" },
  { id: "02", label: "Services", href: "#services" },
  { id: "03", label: "Projects", href: "#projects" },
  { id: "04", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  const { contextSafe } = useGSAP({ scope: overlayRef });

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

  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar__logo">
          <img src="/logo white.png" alt="Wellya Logo" className="h-6 sm:h-8 object-contain" draggable={false} />
        </a>

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
      </div>
    </>
  );
}
