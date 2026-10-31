import React, { useState } from 'react';
import { 
  Github, 
  Users, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Tag, 
  FolderGit2
} from 'lucide-react';
import { projectsData, projectFilters, personalInfo } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState<string>('All Projects');

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All Projects') return true;
    if (activeFilter === 'Group Projects') return project.isGroupProject;
    return project.categories.some((cat) => cat === activeFilter);
  });

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}
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
            <span>PRIMARY PORTFOLIO SHOWCASE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#ffffff' }}>
            Featured <span className="drg-gradient-text">Projects</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '40rem' }}>
            Practical applications across machine learning, natural language processing, cloud analytics, and full-stack software development.
          </p>

          {/* Interactive Project Filter Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', paddingTop: '1.25rem' }}>
            {projectFilters.map((filterName) => (
              <button
                key={filterName}
                type="button"
                onClick={() => setActiveFilter(filterName)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '0.75rem',
                  fontSize: '0.75rem',
                  fontWeight: activeFilter === filterName ? 600 : 500,
                  border: activeFilter === filterName ? 'none' : '1px solid rgba(56, 189, 248, 0.15)',
                  backgroundColor: activeFilter === filterName ? '#00d2ff' : 'rgba(13, 20, 36, 0.65)',
                  color: activeFilter === filterName ? '#05070e' : '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeFilter === filterName ? '0 0 15px rgba(0, 210, 255, 0.35)' : 'none',
                }}
              >
                {filterName}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="drg-glass-card"
              style={{ overflow: 'hidden' }}
            >
              <div className="drg-project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 0 }}>
                {/* Left Metadata & Quick Summary */}
                <div
                  className="drg-project-left"
                  style={{
                    gridColumn: 'span 5',
                    padding: '2rem',
                    background: 'linear-gradient(135deg, #0a0f1d, #05070e)',
                    borderRight: '1px solid rgba(56, 189, 248, 0.12)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {/* Category Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, backgroundColor: 'rgba(0, 210, 255, 0.1)', color: '#00d2ff', border: '1px solid rgba(0, 210, 255, 0.25)' }}>
                        {project.primaryCategory}
                      </span>

                      {project.isGroupProject && (
                        <span style={{ padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, backgroundColor: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', border: '1px solid rgba(168, 85, 247, 0.3)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Users style={{ width: '12px', height: '12px' }} />
                          <span>Group Project</span>
                        </span>
                      )}

                      {project.metricBadge && (
                        <span style={{ padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                          {project.metricBadge.value}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.015em', lineHeight: 1.3 }}>
                        {project.name}
                      </h3>
                      <p style={{ fontSize: '0.8rem', color: '#38bdf8', fontFamily: 'JetBrains Mono, monospace', marginTop: '0.25rem' }}>
                        {project.subtitle}
                      </p>
                    </div>

                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.65 }}>
                      {project.shortDescription}
                    </p>

                    {/* Group Project Note */}
                    {project.isGroupProject && project.groupProjectNote && (
                      <div style={{ padding: '0.85rem 1rem', borderRadius: '0.75rem', backgroundColor: 'rgba(168, 85, 247, 0.06)', border: '1px solid rgba(168, 85, 247, 0.2)', fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                        <span style={{ fontWeight: 600, color: '#c084fc', display: 'block', marginBottom: '0.25rem' }}>Role Attribution:</span>
                        {project.groupProjectNote}
                      </div>
                    )}
                  </div>

                  {/* GitHub Action Button */}
                  <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(56, 189, 248, 0.1)' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="drg-btn-primary"
                      style={{ width: '100%', fontSize: '0.825rem', padding: '0.65rem 1rem' }}
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <Github style={{ width: '15px', height: '15px' }} />
                      View on GitHub
                    </a>
                  </div>
                </div>

                {/* Right Details: Highlights & Tech Stack */}
                <div
                  className="drg-project-right"
                  style={{
                    gridColumn: 'span 7',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: '#00d2ff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      <Terminal style={{ width: '15px', height: '15px' }} />
                      <span>Key Implementation Highlights</span>
                    </div>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {project.detailedPoints.map((point, pIdx) => (
                        <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                          <CheckCircle2 style={{ width: '15px', height: '15px', color: '#00d2ff', flexShrink: 0, marginTop: '0.2rem' }} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(56, 189, 248, 0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.65rem' }}>
                      <Tag style={{ width: '13px', height: '13px', color: '#a855f7' }} />
                      <span>Technology Stack</span>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            padding: '0.25rem 0.6rem',
                            borderRadius: '0.5rem',
                            fontSize: '0.75rem',
                            fontFamily: 'JetBrains Mono, monospace',
                            fontWeight: 500,
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            color: '#e2e8f0',
                            border: '1px solid rgba(56, 189, 248, 0.15)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More on GitHub Callout */}
        <div
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '2.5rem',
            borderRadius: '1.5rem',
            border: '1px dashed rgba(56, 189, 248, 0.25)',
            backgroundColor: 'rgba(10, 15, 29, 0.55)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <FolderGit2 style={{ width: '32px', height: '32px', color: '#00d2ff' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>More Repositories & Experiments</h3>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', maxWidth: '30rem' }}>
            Explore unpinned data science scripts, academic assignments, and web experiments directly on my GitHub profile.
          </p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="drg-btn-outline"
            style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}
          >
            <Github style={{ width: '15px', height: '15px', color: '#00d2ff' }} />
            <span>github.com/RandinuGamage</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .drg-project-grid { grid-template-columns: 1fr !important; }
          .drg-project-left { grid-column: span 12 !important; border-right: none !important; border-bottom: 1px solid rgba(56, 189, 248, 0.12) !important; }
          .drg-project-right { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
};

