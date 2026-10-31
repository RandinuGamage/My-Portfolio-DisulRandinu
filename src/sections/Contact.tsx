import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '@/data/portfolioData';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const Contact: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    emailjs.init('7-NInin4HKwBj1HSA');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_a71lia6',
        'template_stzh0vp',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: personalInfo.name,
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Submission Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      title: "Direct Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      accent: "#00d2ff"
    },
    {
      title: "Phone / WhatsApp",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phoneClean}`,
      icon: Phone,
      accent: "#38bdf8"
    },
    {
      title: "LinkedIn Profile",
      value: personalInfo.linkedinDisplay,
      href: personalInfo.linkedin,
      icon: Linkedin,
      accent: "#a855f7"
    },
    {
      title: "GitHub Repositories",
      value: personalInfo.githubDisplay,
      href: personalInfo.github,
      icon: Github,
      accent: "#10b981"
    }
  ];

  return (
    <section
      id="contact"
      aria-label="Contact"
      style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden', backgroundColor: 'rgba(10, 15, 29, 0.45)' }}
    >
      <div
        ref={elementRef}
        className={isVisible ? 'drg-reveal-visible' : 'drg-reveal-hidden'}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}
      >
        {/* Section Header with exact heading and message requested */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.3rem 0.75rem', borderRadius: '9999px', backgroundColor: 'rgba(0, 210, 255, 0.08)', border: '1px solid rgba(0, 210, 255, 0.2)', color: '#00d2ff', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>
            <Sparkles style={{ width: '13px', height: '13px' }} />
            <span>START A CONVERSATION</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#ffffff' }}>
            {personalInfo.contactHeading}
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '40rem' }}>
            {personalInfo.contactMessage}
          </p>
        </div>

        <div className="drg-contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'start' }}>
          {/* Left Column: Direct Communication Channels */}
          <div className="drg-contact-left" style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="drg-glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.015em' }}>
                Verified Channels
              </h3>
              <p style={{ fontSize: '0.825rem', color: '#94a3b8', lineHeight: 1.65 }}>
                I welcome inquiries about Data Science & Machine Learning internships, collaborative technical projects, or academic discussions. Reach out via email or phone anytime.
              </p>

              {/* Quick Copy Email Box */}
              <div style={{ padding: '1rem', borderRadius: '1rem', backgroundColor: 'rgba(0, 210, 255, 0.06)', border: '1px solid rgba(0, 210, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                <div style={{ overflow: 'hidden' }}>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', color: '#00d2ff', display: 'block' }}>
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    style={{ fontSize: '0.875rem', fontWeight: 600, color: '#ffffff', textDecoration: 'none', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  style={{
                    padding: '0.4rem 0.75rem',
                    borderRadius: '0.75rem',
                    fontSize: '0.75rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    backgroundColor: 'rgba(13, 20, 36, 0.8)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check style={{ width: '13px', height: '13px', color: '#10b981' }} />
                      <span style={{ color: '#10b981' }}>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy style={{ width: '13px', height: '13px', color: '#00d2ff' }} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Channels List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {contactCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <a
                      key={idx}
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '1rem',
                        backgroundColor: 'rgba(13, 20, 36, 0.5)',
                        border: '1px solid rgba(56, 189, 248, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      className="drg-contact-card-item"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
                        <div
                          style={{
                            padding: '0.55rem',
                            borderRadius: '0.65rem',
                            backgroundColor: `${card.accent}15`,
                            color: card.accent,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Icon style={{ width: '16px', height: '16px' }} />
                        </div>
                        <div style={{ overflow: 'hidden' }}>
                          <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', color: '#64748b', display: 'block', textTransform: 'uppercase' }}>
                            {card.title}
                          </span>
                          <span style={{ fontSize: '0.825rem', color: '#ffffff', fontWeight: 500, display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {card.value}
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight style={{ width: '15px', height: '15px', color: '#64748b', flexShrink: 0 }} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Working EmailJS Contact Form */}
          <div className="drg-contact-right" style={{ gridColumn: 'span 7' }}>
            <div className="drg-glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(56, 189, 248, 0.12)', paddingBottom: '0.85rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MessageSquare style={{ width: '18px', height: '18px', color: '#00d2ff' }} />
                  <span>Send a Message</span>
                </h3>
                <span style={{ fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', color: '#64748b' }}>
                  Response in 24–48h
                </span>
              </div>

              {submitStatus === 'success' && (
                <div style={{ padding: '0.85rem 1rem', borderRadius: '0.85rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Check style={{ width: '16px', height: '16px', flexShrink: 0 }} />
                  <span>Your message has been delivered successfully. I will get back to you soon!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{ padding: '0.85rem 1rem', borderRadius: '0.85rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', fontSize: '0.8rem', color: '#fca5a5', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <span>Submission issue encountered. Please email me directly at {personalInfo.email}.</span>
                  <a href={`mailto:${personalInfo.email}`} style={{ color: '#ffffff', fontWeight: 700, textDecoration: 'underline' }}>
                    Send Email
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="drg-form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label htmlFor="name" style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: '#cbd5e1' }}>
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Dr. Jane Smith"
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: '0.75rem',
                        backgroundColor: 'rgba(5, 7, 14, 0.6)',
                        border: '1px solid rgba(56, 189, 248, 0.18)',
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label htmlFor="email" style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: '#cbd5e1' }}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@company.com"
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: '0.75rem',
                        backgroundColor: 'rgba(5, 7, 14, 0.6)',
                        border: '1px solid rgba(56, 189, 248, 0.18)',
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label htmlFor="subject" style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: '#cbd5e1' }}>
                    Subject / Discussion Topic *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Data Science Internship / Project Collaboration"
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(5, 7, 14, 0.6)',
                      border: '1px solid rgba(56, 189, 248, 0.18)',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label htmlFor="message" style={{ fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: '#cbd5e1' }}>
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(5, 7, 14, 0.6)',
                      border: '1px solid rgba(56, 189, 248, 0.18)',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="drg-btn-primary"
                  style={{ width: '100%', padding: '0.85rem', fontSize: '0.875rem' }}
                >
                  {isSubmitting ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '14px', height: '14px', border: '2px solid #ffffff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                      Sending Message...
                    </span>
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Send style={{ width: '16px', height: '16px' }} />
                      Send Message
                    </span>
                  )}
                </button>

                <p style={{ fontSize: '0.7rem', color: '#64748b', textAlign: 'center', paddingTop: '0.25rem' }}>
                  Prefer direct communication? You can also email me directly at{' '}
                  <a href={`mailto:${personalInfo.email}`} style={{ color: '#00d2ff', textDecoration: 'underline', fontFamily: 'JetBrains Mono, monospace' }}>
                    {personalInfo.email}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 992px) {
          .drg-contact-grid { grid-template-columns: 1fr !important; }
          .drg-contact-left { grid-column: span 12 !important; }
          .drg-contact-right { grid-column: span 12 !important; }
        }
        @media (max-width: 576px) {
          .drg-form-row { grid-template-columns: 1fr !important; }
        }
        .drg-contact-card-item:hover {
          border-color: rgba(0, 210, 255, 0.45) !important;
          background-color: rgba(19, 29, 53, 0.85) !important;
        }
      `}</style>
    </section>
  );
};

