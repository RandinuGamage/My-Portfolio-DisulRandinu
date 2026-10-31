import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Volunteering', href: '#volunteering' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'education', 'skills', 'projects', 'certifications', 'volunteering', 'contact'];
      const scrollY = window.scrollY + 220;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
        backgroundColor: isScrolled ? 'rgba(5, 7, 14, 0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(56, 189, 248, 0.14)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '44px' }}>
        {/* DRG Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', cursor: 'pointer' }}
          aria-label="Disul Randinu Gamage Home"
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #00d2ff, #a855f7)',
            padding: '1.5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#05070e',
              borderRadius: '9px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.85rem',
                fontWeight: 900,
                letterSpacing: '1px',
                background: 'linear-gradient(135deg, #00d2ff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {personalInfo.initials}
              </span>
            </div>
          </div>
          <div>
            <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.925rem', letterSpacing: '-0.01em', display: 'block' }}>
              {personalInfo.shortName}
            </span>
            <span style={{ color: '#94a3b8', fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block' }}>
              Data Science
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Desktop Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: '0.375rem 0.625rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(13, 20, 36, 0.7)',
            border: '1px solid rgba(56, 189, 248, 0.15)',
            backdropFilter: 'blur(10px)',
          }}
          className="drg-desktop-nav"
        >
          {navItems.map((item) => {
            const currentId = item.href.replace('#', '');
            const isActive = activeId === currentId;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                style={{
                  padding: '0.35rem 0.85rem',
                  fontSize: '0.75rem',
                  fontWeight: isActive ? 600 : 500,
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: isActive ? '#00d2ff' : 'transparent',
                  color: isActive ? '#05070e' : '#94a3b8',
                  boxShadow: isActive ? '0 0 14px rgba(0, 210, 255, 0.4)' : 'none',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* External Social Profiles & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'rgba(13, 20, 36, 0.7)',
              border: '1px solid rgba(56, 189, 248, 0.15)',
              color: '#94a3b8',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            className="drg-social-btn"
          >
            <Github style={{ width: '16px', height: '16px' }} />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'rgba(13, 20, 36, 0.7)',
              border: '1px solid rgba(56, 189, 248, 0.15)',
              color: '#94a3b8',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            className="drg-social-btn"
          >
            <Linkedin style={{ width: '16px', height: '16px' }} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            style={{
              padding: '0.5rem',
              borderRadius: '10px',
              backgroundColor: 'rgba(13, 20, 36, 0.8)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              color: '#ffffff',
              cursor: 'pointer',
            }}
            className="drg-mobile-toggle"
          >
            {mobileMenuOpen ? <X style={{ width: '18px', height: '18px' }} /> : <Menu style={{ width: '18px', height: '18px' }} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            margin: '0.75rem 1.5rem 0',
            padding: '1rem',
            borderRadius: '1rem',
            backgroundColor: 'rgba(10, 15, 29, 0.96)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {navItems.map((item) => {
            const currentId = item.href.replace('#', '');
            const isActive = activeId === currentId;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.625rem 1rem',
                  borderRadius: '0.625rem',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  border: 'none',
                  backgroundColor: isActive ? 'rgba(0, 210, 255, 0.15)' : 'transparent',
                  color: isActive ? '#00d2ff' : '#94a3b8',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .drg-desktop-nav { display: none !important; }
        }
        @media (min-width: 769px) {
          .drg-mobile-toggle { display: none !important; }
        }
        .drg-social-btn:hover {
          color: #00d2ff !important;
          border-color: rgba(0, 210, 255, 0.45) !important;
          background-color: rgba(0, 210, 255, 0.1) !important;
        }
      `}</style>
    </header>
  );
};

