import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 40,
        padding: '0.75rem',
        borderRadius: '1rem',
        background: 'linear-gradient(135deg, #00d2ff, #2563eb)',
        color: '#ffffff',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        boxShadow: '0 10px 25px rgba(0, 210, 255, 0.35)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s ease',
      }}
      className="drg-back-to-top"
    >
      <ArrowUp style={{ width: '18px', height: '18px' }} />
      <style>{`
        .drg-back-to-top:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(0, 210, 255, 0.45) !important;
        }
      `}</style>
    </button>
  );
};

