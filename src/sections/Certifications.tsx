import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle, 
  Calendar, 
  Building, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { certificationsData } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const Certifications: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section
      id="certifications"
      aria-label="Certifications"
      style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}
    >
      <div
        ref={elementRef}
        className={isVisible ? 'drg-reveal-visible' : 'drg-reveal-hidden'}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.3rem 0.75rem', borderRadius: '9999px', backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)', color: '#fbbf24', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>
            <Sparkles style={{ width: '13px', height: '13px' }} />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#ffffff' }}>
            Professional <span className="drg-gradient-text">Certifications</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '40rem' }}>
            Industry-recognized credentials validating practical competence in artificial intelligence, workflow automation, and prompt engineering.
          </p>
        </div>

        {/* Certifications Grid / Cards */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="drg-glass-card"
              style={{
                padding: '2.5rem',
                border: '1px solid rgba(245, 158, 11, 0.3)',
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
                  background: 'linear-gradient(90deg, #f59e0b, #00d2ff, #a855f7)',
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {/* Header row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                    <div style={{
                      padding: '1rem',
                      borderRadius: '1rem',
                      backgroundColor: 'rgba(245, 158, 11, 0.12)',
                      color: '#f59e0b',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <ShieldCheck style={{ width: '32px', height: '32px' }} />
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                        <span style={{ padding: '0.2rem 0.65rem', borderRadius: '9999px', fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                          Verified Specialization
                        </span>
                        <span style={{ padding: '0.2rem 0.65rem', borderRadius: '9999px', fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', backgroundColor: 'rgba(255, 255, 255, 0.04)', color: '#94a3b8', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                          {cert.provider}
                        </span>
                      </div>
                      <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                        {cert.title}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontFamily: 'JetBrains Mono, monospace', color: '#94a3b8', marginTop: '0.25rem' }}>
                        <Building style={{ width: '14px', height: '14px', color: '#38bdf8' }} />
                        <span>Issued by <strong style={{ color: '#ffffff' }}>{cert.credentialIssuer}</strong></span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', color: '#cbd5e1', padding: '0.5rem 1rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(56, 189, 248, 0.15)' }}>
                    <Calendar style={{ width: '15px', height: '15px', color: '#00d2ff' }} />
                    <span>Completed: <strong style={{ color: '#ffffff' }}>{cert.completionDate}</strong></span>
                  </div>
                </div>

                {/* Curriculum breakdown */}
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(56, 189, 248, 0.12)' }}>
                  <h4 style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#fbbf24', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Award style={{ width: '15px', height: '15px' }} />
                    <span>Curriculum & Competencies Mastered:</span>
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }} className="drg-cert-topics">
                    {cert.topics.map((topic, tIdx) => (
                      <div
                        key={tIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          padding: '0.75rem 1rem',
                          borderRadius: '0.75rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid rgba(56, 189, 248, 0.1)',
                          fontSize: '0.825rem',
                          color: '#cbd5e1',
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle style={{ width: '16px', height: '16px', color: '#10b981', flexShrink: 0, marginTop: '0.15rem' }} />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .drg-cert-topics { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

