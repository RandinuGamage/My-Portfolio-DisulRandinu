import React from 'react';
import { 
  GraduationCap, 
  BrainCircuit, 
  Layout, 
  Sparkles, 
  CheckCircle2, 
  Terminal 
} from 'lucide-react';
import { personalInfo, aboutHighlights } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const highlightIcons: Record<string, React.ElementType> = {
  GraduationCap,
  BrainCircuit,
  Layout,
  Sparkles
};

export const About: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      aria-label="About Me"
      style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}
    >
      <div
        ref={elementRef}
        className={isVisible ? 'drg-reveal-visible' : 'drg-reveal-hidden'}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.3rem 0.75rem', borderRadius: '9999px', backgroundColor: 'rgba(0, 210, 255, 0.08)', border: '1px solid rgba(0, 210, 255, 0.2)', color: '#00d2ff', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>
            <Sparkles style={{ width: '13px', height: '13px' }} />
            <span>BACKGROUND & INTERESTS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#ffffff' }}>
            About <span className="drg-gradient-text">Me</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '40rem' }}>
            Analytical thinker and Data Science undergraduate dedicated to translating mathematical concepts into impactful software.
          </p>
        </div>

        {/* Narrative & Focus Matrix */}
        <div className="drg-about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'start' }}>
          {/* Left Narrative Box */}
          <div className="drg-about-left" style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="drg-glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#ffffff', fontWeight: 600, fontSize: '1.15rem', borderBottom: '1px solid rgba(56, 189, 248, 0.12)', paddingBottom: '1rem' }}>
                <Terminal style={{ width: '18px', height: '18px', color: '#00d2ff' }} />
                <span>Undergraduate Journey & Philosophy</span>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.8 }}>
                I am a Data Science undergraduate at the <strong style={{ color: '#ffffff' }}>Faculty of Computing</strong>, <strong style={{ color: '#ffffff' }}>Department of Data Science</strong>, <strong style={{ color: '#ffffff' }}>Sabaragamuwa University of Sri Lanka</strong>. I am passionate about machine learning, data analytics, artificial intelligence, and natural language processing. Through academic and personal projects, I explore data-driven solutions, predictive modelling, and practical applications of technology. I enjoy learning new technologies, solving problems, and transforming data into meaningful insights.
              </p>

              {/* Verified Competencies Checklist */}
              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(56, 189, 248, 0.12)' }}>
                <h4 style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00d2ff', marginBottom: '0.75rem' }}>
                  Areas of Academic & Project Focus:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.65rem' }} className="drg-about-checklist">
                  {[
                    "Supervised & Unsupervised Machine Learning",
                    "Natural Language Processing & Transformers",
                    "Exploratory Data Analysis & Statistics",
                    "Interactive Streamlit & Plotly Dashboards",
                    "Full-Stack Web Engineering (MERN)",
                    "Data Science Internship Readiness"
                  ].map((skill, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#cbd5e1' }}>
                      <CheckCircle2 style={{ width: '15px', height: '15px', color: '#10b981', flexShrink: 0 }} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* University & Degree Quick Summary Banner */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '1rem',
                background: 'linear-gradient(135deg, rgba(0, 210, 255, 0.08), rgba(168, 85, 247, 0.08))',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', color: '#64748b' }}>University & Affiliation</span>
                <p style={{ fontSize: '0.925rem', fontWeight: 700, color: '#ffffff' }}>{personalInfo.university}</p>
                <p style={{ fontSize: '0.8rem', color: '#38bdf8', fontFamily: 'JetBrains Mono, monospace' }}>{personalInfo.faculty} • {personalInfo.department}</p>
                <p style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>{personalInfo.degree} (Expected Graduation: {personalInfo.expectedGraduation})</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', color: '#64748b' }}>Status</span>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.35rem', justifyContent: 'flex-end' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                  Seeking DS / ML Internships
                </p>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Strategic Highlight Cards */}
          <div className="drg-about-right" style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {aboutHighlights.map((highlight, idx) => {
              const Icon = highlightIcons[highlight.iconName] || Sparkles;
              return (
                <div
                  key={idx}
                  className="drg-glass-card"
                  style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
                >
                  <div
                    style={{
                      padding: '0.75rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(0, 210, 255, 0.1)',
                      color: '#00d2ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                      {highlight.title}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6 }}>
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .drg-about-grid { grid-template-columns: 1fr !important; }
          .drg-about-left { grid-column: span 12 !important; }
          .drg-about-right { grid-column: span 12 !important; }
        }
        @media (max-width: 576px) {
          .drg-about-checklist { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

