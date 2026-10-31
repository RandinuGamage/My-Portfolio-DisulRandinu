import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Volunteering', href: '#volunteering' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ position: 'relative', backgroundColor: '#05070e', borderTop: '1px solid rgba(56, 189, 248, 0.12)', paddingTop: '4rem', paddingBottom: '3rem', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'start', paddingBottom: '3rem', borderBottom: '1px solid rgba(56, 189, 248, 0.1)' }} className="drg-footer-top">
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1rem' }} className="drg-footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', display: 'block' }}>
                  {personalInfo.name}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'JetBrains Mono, monospace' }}>
                  {personalInfo.degree}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.8rem', color: '#94a3b8', maxWidth: '24rem', lineHeight: 1.65 }}>
              Data Science Undergraduate at Sabaragamuwa University of Sri Lanka exploring machine learning, predictive analytics, natural language processing, and data-driven software architectures.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.25rem' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={{
                  padding: '0.55rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(13, 20, 36, 0.8)',
                  border: '1px solid rgba(56, 189, 248, 0.15)',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  display: 'inline-flex',
                }}
                className="drg-social-btn"
              >
                <Github style={{ width: '15px', height: '15px' }} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  padding: '0.55rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(13, 20, 36, 0.8)',
                  border: '1px solid rgba(56, 189, 248, 0.15)',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  display: 'inline-flex',
                }}
                className="drg-social-btn"
              >
                <Linkedin style={{ width: '15px', height: '15px' }} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                style={{
                  padding: '0.55rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(13, 20, 36, 0.8)',
                  border: '1px solid rgba(56, 189, 248, 0.15)',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  display: 'inline-flex',
                }}
                className="drg-social-btn"
              >
                <Mail style={{ width: '15px', height: '15px' }} />
              </a>
            </div>
          </div>

          {/* Navigation Shortcuts */}
          <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="drg-footer-col">
            <span style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', color: '#00d2ff', letterSpacing: '0.08em', display: 'block' }}>
              Navigation Shortcuts
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', fontSize: '0.8rem' }}>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    textAlign: 'left',
                    color: '#94a3b8',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.2rem 0',
                    fontSize: '0.8rem',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Status & Location Column */}
          <div style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="drg-footer-col">
            <span style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', color: '#a855f7', letterSpacing: '0.08em', display: 'block' }}>
              Academic Affiliation
            </span>
            <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              Faculty of Computing, Department of Data Science, Sabaragamuwa University of Sri Lanka.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.35rem 0.75rem', borderRadius: '0.75rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', fontSize: '0.75rem', color: '#10b981', fontFamily: 'JetBrains Mono, monospace', alignSelf: 'flex-start' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span>Seeking DS / ML Internships</span>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Scroll to Top */}
        <div style={{ paddingTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: '#64748b' }}>
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#94a3b8',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontFamily: 'inherit',
            }}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp style={{ width: '14px', height: '14px', color: '#00d2ff' }} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .drg-footer-top { grid-template-columns: 1fr !important; }
          .drg-footer-col { grid-column: span 12 !important; }
        }
      `}</style>
    </footer>
  );
};

