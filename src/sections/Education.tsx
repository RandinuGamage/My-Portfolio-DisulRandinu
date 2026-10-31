import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Building2,
  CheckCircle2,
  Sparkles,
  School
} from 'lucide-react';
import { educationInfo } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const Education: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section
      id="education"
      aria-label="Academic Education"
      style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden', backgroundColor: 'rgba(10, 15, 29, 0.45)' }}
    >
      <div
        ref={elementRef}
        className={isVisible ? 'drg-reveal-visible' : 'drg-reveal-hidden'}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.3rem 0.75rem', borderRadius: '9999px', backgroundColor: 'rgba(0, 210, 255, 0.08)', border: '1px solid rgba(0, 210, 255, 0.2)', color: '#00d2ff', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>
            <Sparkles style={{ width: '13px', height: '13px' }} />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#ffffff' }}>
            Academic <span className="drg-gradient-text">Education</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '40rem' }}>
            Undergraduate honours education grounded in computational statistics, artificial intelligence, and software engineering.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="drg-glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'start' }} className="drg-edu-main-grid">
            {/* Left Col: University & Degree Details */}
            <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="drg-edu-left-col">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <div style={{
                  padding: '1rem',
                  borderRadius: '1.25rem',
                  background: 'linear-gradient(135deg, rgba(0, 210, 255, 0.15), rgba(168, 85, 247, 0.15))',
                  color: '#00d2ff',
                  border: '1px solid rgba(0, 210, 255, 0.3)',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <GraduationCap style={{ width: '36px', height: '36px' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ alignSelf: 'flex-start', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, backgroundColor: 'rgba(0, 210, 255, 0.1)', color: '#00d2ff', border: '1px solid rgba(0, 210, 255, 0.3)' }}>
                    Honours Degree Program
                  </span>
                  <h3 style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                    {educationInfo.degree}
                  </h3>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8' }}>
                    {educationInfo.institution}
                  </h4>
                </div>
              </div>

              {/* Affiliation Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', paddingTop: '0.5rem' }} className="drg-edu-affiliation-grid">
                <div style={{ padding: '1rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(56, 189, 248, 0.12)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Building2 style={{ width: '20px', height: '20px', color: '#00d2ff', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', color: '#64748b', display: 'block' }}>Faculty</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>{educationInfo.faculty}</span>
                  </div>
                </div>

                <div style={{ padding: '1rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(56, 189, 248, 0.12)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <School style={{ width: '20px', height: '20px', color: '#a855f7', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', color: '#64748b', display: 'block' }}>Department</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>{educationInfo.department}</span>
                  </div>
                </div>
              </div>

              {/* Meta details: Expected Graduation & Location */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', color: '#94a3b8', padding: '0.85rem 0', borderTop: '1px solid rgba(56, 189, 248, 0.12)', borderBottom: '1px solid rgba(56, 189, 248, 0.12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Calendar style={{ width: '16px', height: '16px', color: '#00d2ff' }} />
                  <span>Expected Graduation: <strong style={{ color: '#ffffff' }}>{educationInfo.expectedGraduation}</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <MapPin style={{ width: '16px', height: '16px', color: '#a855f7' }} />
                  <span>{educationInfo.location}</span>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.75 }}>
                {educationInfo.description}
              </p>
            </div>

            {/* Right Col: Core Curricular Pillars */}
            <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="drg-edu-right-col">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', color: '#00d2ff' }}>
                <BookOpen style={{ width: '16px', height: '16px' }} />
                <span>Core Study Areas & Coursework</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {educationInfo.coreSubjects.map((subject, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(56, 189, 248, 0.12)',
                      fontSize: '0.825rem',
                      color: '#cbd5e1',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <CheckCircle2 style={{ width: '16px', height: '16px', color: '#10b981', flexShrink: 0 }} />
                    <span style={{ fontWeight: 500 }}>{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .drg-edu-main-grid { grid-template-columns: 1fr !important; }
          .drg-edu-left-col { grid-column: span 12 !important; }
          .drg-edu-right-col { grid-column: span 12 !important; }
        }
        @media (max-width: 576px) {
          .drg-edu-affiliation-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
