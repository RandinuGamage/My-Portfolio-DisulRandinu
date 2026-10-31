import React, { useState } from 'react';
import { 
  Code2, 
  BarChart3, 
  Cpu, 
  MessageSquareCode, 
  PieChart, 
  Globe2, 
  Database, 
  Wrench, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { technicalSkills } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skillIcons: Record<string, React.ElementType> = {
  Code2,
  BarChart3,
  Cpu,
  MessageSquareCode,
  PieChart,
  Globe2,
  Database,
  Wrench
};

export const Skills: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displayedSkills = selectedCategory
    ? technicalSkills.filter((s) => s.category === selectedCategory)
    : technicalSkills;

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
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
            <span>AUTHENTIC EXPERTISE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#ffffff' }}>
            Technical <span className="drg-gradient-text">Skills</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '40rem' }}>
            Practical competencies grounded in university coursework, open-source code repositories, and machine learning experiments.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', paddingTop: '1.25rem' }}>
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              style={{
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: selectedCategory === null ? 600 : 500,
                border: selectedCategory === null ? 'none' : '1px solid rgba(56, 189, 248, 0.15)',
                backgroundColor: selectedCategory === null ? '#00d2ff' : 'rgba(13, 20, 36, 0.65)',
                color: selectedCategory === null ? '#05070e' : '#94a3b8',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              All Domains ({technicalSkills.length})
            </button>

            {technicalSkills.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedCategory(cat.category)}
                style={{
                  padding: '0.4rem 0.9rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: selectedCategory === cat.category ? 600 : 500,
                  border: selectedCategory === cat.category ? 'none' : '1px solid rgba(56, 189, 248, 0.15)',
                  backgroundColor: selectedCategory === cat.category ? '#00d2ff' : 'rgba(13, 20, 36, 0.65)',
                  color: selectedCategory === cat.category ? '#05070e' : '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid - Honest Representation without Fake Percentages */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {displayedSkills.map((group, index) => {
            const Icon = skillIcons[group.iconName] || Code2;
            return (
              <div
                key={index}
                className="drg-glass-card"
                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Category Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      padding: '0.625rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(0, 210, 255, 0.08)',
                      border: '1px solid rgba(0, 210, 255, 0.18)',
                      color: '#00d2ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Icon style={{ width: '18px', height: '18px' }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                        {group.category}
                      </h3>
                      <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', color: '#64748b' }}>
                        {group.skills.length} Technologies
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.6 }}>
                    {group.summary}
                  </p>

                  {/* Badges List */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.25rem' }}>
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '0.5rem',
                          fontSize: '0.75rem',
                          fontFamily: 'JetBrains Mono, monospace',
                          fontWeight: 500,
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          color: '#e2e8f0',
                          border: '1px solid rgba(56, 189, 248, 0.14)',
                        }}
                      >
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#00d2ff' }} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer validation mark */}
                <div style={{ paddingTop: '1rem', marginTop: '1.25rem', borderTop: '1px solid rgba(56, 189, 248, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', color: '#64748b' }}>
                  <span>Verified in Repositories</span>
                  <Check style={{ width: '13px', height: '13px', color: '#10b981' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

