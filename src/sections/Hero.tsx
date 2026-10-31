import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, ChevronRight, GraduationCap } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import { useTypewriter } from '@/hooks/useTypewriter';
import profileImage from '@/assets/profile.jpg';

export const Hero: React.FC = () => {
  const { currentText } = useTypewriter(personalInfo.titles, 70, 35, 2200);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Lighting Elements */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div
          className="drg-pulse-glow"
          style={{
            position: 'absolute',
            top: '20%',
            left: '-5%',
            width: '28rem',
            height: '28rem',
            backgroundColor: 'rgba(0, 210, 255, 0.08)',
            borderRadius: '50%',
            filter: 'blur(120px)',
          }}
        />
        <div
          className="drg-pulse-glow"
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '-5%',
            width: '30rem',
            height: '30rem',
            backgroundColor: 'rgba(168, 85, 247, 0.09)',
            borderRadius: '50%',
            filter: 'blur(130px)',
            animationDelay: '2.5s',
          }}
        />
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10, width: '100%' }}>
        <div className="drg-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'center' }}>
          {/* Left Column: Headline, Typewriter Title, Bio & CTAs */}
          <div className="drg-hero-left" style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Status Pill */}
            <div
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(0, 210, 255, 0.08)',
                border: '1px solid rgba(0, 210, 255, 0.25)',
                color: '#00d2ff',
                fontSize: '0.75rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontWeight: 500,
              }}
            >
              <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#00d2ff', boxShadow: '0 0 8px #00d2ff' }} />
              <span>Faculty of Computing • Department of Data Science • Sabaragamuwa University of Sri Lanka</span>
            </div>

            {/* Main Greeting */}
            <div>
              <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#ffffff', lineHeight: 1.15, marginBottom: '0.5rem' }}>
                Hi, I'm <span className="drg-gradient-text">Disul Randinu.</span>
              </h1>

              {/* Animated Typewriter Title */}
              <div style={{ minHeight: '2.5rem', display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.75rem)', fontWeight: 600, color: '#f8fafc', fontFamily: 'JetBrains Mono, monospace', display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#38bdf8' }}>{currentText}</span>
                  <span style={{ display: 'inline-block', width: '9px', height: '1.4rem', backgroundColor: '#00d2ff', marginLeft: '0.35rem', animation: 'drgGlowPulse 1s infinite' }} />
                </p>
              </div>
            </div>

            {/* Official Introduction Text */}
            <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '38rem', lineHeight: 1.7 }}>
              {personalInfo.heroIntro}
            </p>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.85rem', paddingTop: '0.5rem' }}>
              <button
                type="button"
                onClick={() => scrollTo('#projects')}
                className="drg-btn-primary"
                style={{ fontSize: '0.875rem', padding: '0.85rem 1.75rem' }}
              >
                <Sparkles style={{ width: '16px', height: '16px', color: '#00d2ff' }} />
                Explore My Projects
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="drg-btn-outline"
                style={{ fontSize: '0.875rem', padding: '0.85rem 1.75rem' }}
              >
                Let's Connect
                <ChevronRight style={{ width: '16px', height: '16px', color: '#00d2ff' }} />
              </button>
            </div>

            {/* Direct Social Profile Connections */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingTop: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Profiles:
              </span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={{
                  padding: '0.55rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(13, 20, 36, 0.7)',
                  border: '1px solid rgba(56, 189, 248, 0.15)',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
                  padding: '0.55rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(13, 20, 36, 0.7)',
                  border: '1px solid rgba(56, 189, 248, 0.15)',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  display: 'inline-flex',
                }}
                className="drg-social-btn"
              >
                <Linkedin style={{ width: '16px', height: '16px' }} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Disul"
                style={{
                  padding: '0.55rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(13, 20, 36, 0.7)',
                  border: '1px solid rgba(56, 189, 248, 0.15)',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  display: 'inline-flex',
                }}
                className="drg-social-btn"
              >
                <Mail style={{ width: '16px', height: '16px' }} />
              </a>
            </div>

            {/* Quick Stat Badges */}
            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(56, 189, 248, 0.1)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="drg-hero-stats">
              <div>
                <span style={{ display: 'block', fontSize: '1.4rem', fontWeight: 800, fontFamily: 'JetBrains Mono, monospace', color: '#00d2ff' }}>2028</span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Expected B.Sc.</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '1.4rem', fontWeight: 800, fontFamily: 'JetBrains Mono, monospace', color: '#a855f7' }}>ML & NLP</span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Applied Focus</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '1.4rem', fontWeight: 800, fontFamily: 'JetBrains Mono, monospace', color: '#10b981' }}>Google AI</span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Specialization</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '1.4rem', fontWeight: 800, fontFamily: 'JetBrains Mono, monospace', color: '#38bdf8' }}>Full-Stack</span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>MERN Web Apps</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Profile Photograph Frame */}
          <div className="drg-hero-right" style={{ gridColumn: 'span 5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="drg-profile-wrapper drg-floating" style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
              {/* Radial gradient glow behind photo */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  background: 'radial-gradient(circle at 50% 45%, rgba(0, 210, 255, 0.3), rgba(168, 85, 247, 0.3), transparent 70%)',
                  borderRadius: '2.5rem',
                  filter: 'blur(30px)',
                  opacity: 0.85,
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Decorative gradient border frame */}
              <div
                style={{
                  position: 'relative',
                  padding: '3px',
                  borderRadius: '2.25rem',
                  background: 'linear-gradient(135deg, rgba(0, 210, 255, 0.8) 0%, rgba(56, 189, 248, 0.35) 40%, rgba(168, 85, 247, 0.8) 100%)',
                  boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.75), 0 0 35px rgba(0, 210, 255, 0.18)',
                  zIndex: 1,
                }}
              >
                {/* Inner image container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '4 / 5',
                    borderRadius: '2.1rem',
                    overflow: 'hidden',
                    backgroundColor: '#0a0f1d',
                  }}
                >
                  <img
                    src={profileImage}
                    alt="Disul Randinu Gamage - Data Science Undergraduate"
                    loading="eager"
                    fetchPriority="high"
                    width={380}
                    height={475}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    className="drg-profile-img"
                  />

                  {/* Subtle ambient lighting vignette overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(5, 7, 14, 0.55) 0%, rgba(5, 7, 14, 0) 40%, rgba(5, 7, 14, 0) 70%, rgba(5, 7, 14, 0.25) 100%)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Floating Status Pill: Top Right */}
              <div
                className="drg-floating-slow drg-badge-top"
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '-12px',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(10, 15, 29, 0.94)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  zIndex: 2,
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                <span style={{ fontSize: '0.72rem', fontFamily: 'JetBrains Mono, monospace', color: '#f8fafc', fontWeight: 600 }}>
                  Available for Internships
                </span>
              </div>

              {/* Floating Badge: Bottom Left */}
              <div
                className="drg-floating-slow drg-badge-bottom"
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '-12px',
                  padding: '0.5rem 0.9rem',
                  borderRadius: '1rem',
                  backgroundColor: 'rgba(10, 15, 29, 0.94)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  zIndex: 2,
                }}
              >
                <GraduationCap style={{ width: '18px', height: '18px', color: '#00d2ff', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.62rem', fontFamily: 'JetBrains Mono, monospace', color: '#94a3b8', textTransform: 'uppercase' }}>
                    Sabaragamuwa University
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ffffff' }}>
                    Data Science Undergraduate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
          <button
            type="button"
            onClick={() => scrollTo('#about')}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#64748b',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontFamily: 'JetBrains Mono, monospace',
            }}
            aria-label="Scroll down to About section"
          >
            <span style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>Explore Portfolio</span>
            <ArrowDown style={{ width: '15px', height: '15px', color: '#00d2ff' }} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .drg-hero-grid { grid-template-columns: 1fr !important; }
          .drg-hero-left { grid-column: span 12 !important; text-align: center !important; }
          .drg-hero-left > div { align-self: center !important; }
          .drg-hero-left p { margin: 0 auto !important; }
          .drg-hero-left > div:nth-child(4), .drg-hero-left > div:nth-child(5) { justify-content: center !important; }
          .drg-hero-right { grid-column: span 12 !important; margin-top: 2rem !important; }
        }
        @media (max-width: 576px) {
          .drg-hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .drg-profile-wrapper { max-width: 290px !important; }
          .drg-badge-top { right: 0px !important; top: -10px !important; }
          .drg-badge-bottom { left: 0px !important; bottom: -10px !important; }
        }
      `}</style>
    </section>
  );
};

