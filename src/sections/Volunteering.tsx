import React from 'react';
import { 
  HeartHandshake, 
  Users, 
  CheckCircle2, 
  Sparkles,
  Calendar,
  Layers
} from 'lucide-react';
import { volunteeringData } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const Volunteering: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section
      id="volunteering"
      aria-label="Volunteering Experience"
      style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden', backgroundColor: 'rgba(10, 15, 29, 0.45)' }}
    >
      <div
        ref={elementRef}
        className={isVisible ? 'drg-reveal-visible' : 'drg-reveal-hidden'}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.3rem 0.75rem', borderRadius: '9999px', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', color: '#10b981', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>
            <Sparkles style={{ width: '13px', height: '13px' }} />
            <span>COMMUNITY & LEADERSHIP</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#ffffff' }}>
            Volunteering <span className="drg-gradient-text">Experience</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '40rem' }}>
            Active involvement in student initiatives, collaborative teamwork, and community engagement.
          </p>
        </div>

        {/* Volunteering Content */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {volunteeringData.map((item, index) => (
            <div
              key={index}
              className="drg-glass-card"
              style={{
                padding: '2.5rem',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle top ambient glow */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #10b981, #00d2ff, #a855f7)',
                }}
              />

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                  <div style={{
                    padding: '1rem',
                    borderRadius: '1rem',
                    backgroundColor: 'rgba(16, 185, 129, 0.12)',
                    color: '#10b981',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <HeartHandshake style={{ width: '32px', height: '32px' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <span style={{ alignSelf: 'flex-start', padding: '0.2rem 0.65rem', borderRadius: '9999px', fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                      Community Engagement
                    </span>
                    <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                      {item.role}
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', padding: '0.4rem 0.85rem', borderRadius: '9999px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(56, 189, 248, 0.15)', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: '#94a3b8' }}>
                  <Users style={{ width: '14px', height: '14px', color: '#00d2ff' }} />
                  <span>Team Collaboration</span>
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.75 }}>
                {item.summary}
              </p>

              {/* Verified Competencies */}
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(56, 189, 248, 0.12)' }}>
                <h4 style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Layers style={{ width: '15px', height: '15px' }} />
                  <span>Key Competencies & Contributions:</span>
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.85rem' }} className="drg-vol-competencies">
                  {item.competencies.map((comp, cIdx) => (
                    <div
                      key={cIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        fontSize: '0.825rem',
                        color: '#f8fafc',
                        fontWeight: 500,
                      }}
                    >
                      <CheckCircle2 style={{ width: '16px', height: '16px', color: '#10b981', flexShrink: 0 }} />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .drg-vol-competencies { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

