import React, { useState } from 'react';
import { Cpu, Zap, CheckCircle2 } from 'lucide-react';

export const NeuralVisualizer: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    { name: "Input X", count: 4, desc: "Agro & Linguistic Tokens", symbol: "x" },
    { name: "Latent H₁", count: 5, desc: "Dense Representation", symbol: "h₁" },
    { name: "Attention", count: 4, desc: "Self-Attention Heads", symbol: "h₂" },
    { name: "Inference Ŷ", count: 2, desc: "Classification / Yield", symbol: "ŷ" }
  ];

  const telemetry = [
    {
      metric: "CatBoost R²",
      val: "0.914",
      sub: "Micro-Region Tea Yield",
      color: "#00d2ff"
    },
    {
      metric: "BERT F1-Score",
      val: "0.938",
      sub: "TMDB Sentiment Polarity",
      color: "#a855f7"
    },
    {
      metric: "ROC-AUC",
      val: "0.892",
      sub: "AWS Churn Classifier",
      color: "#10b981"
    }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '480px', margin: '0 auto', userSelect: 'none' }}>
      {/* Background illumination */}
      <div
        style={{
          position: 'absolute',
          inset: '-6px',
          background: 'linear-gradient(135deg, rgba(0, 210, 255, 0.2), rgba(168, 85, 247, 0.2))',
          borderRadius: '1.75rem',
          filter: 'blur(20px)',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      {/* Main Glassmorphic Card */}
      <div
        className="drg-glass-card"
        style={{
          position: 'relative',
          padding: '1.5rem',
          backgroundColor: 'rgba(10, 15, 29, 0.88)',
          borderRadius: '1.5rem',
          border: '1px solid rgba(56, 189, 248, 0.22)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
        }}
      >
        {/* Terminal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(56, 189, 248, 0.12)', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 10px #10b981' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              ML Architecture • Active Inference
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', backgroundColor: 'rgba(0, 210, 255, 0.1)', color: '#00d2ff', border: '1px solid rgba(0, 210, 255, 0.25)' }}>
            <Cpu style={{ width: '12px', height: '12px' }} />
            <span>CUDA // FP32</span>
          </div>
        </div>

        {/* Neural Network SVG Topology Display */}
        <div style={{ position: 'relative', padding: '0.75rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '180px' }}>
          {/* Synapses SVG */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.45 }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="drgSynapse" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Connecting paths */}
            <path d="M 35 30 Q 80 20 135 18" stroke="url(#drgSynapse)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
            <path d="M 35 65 Q 85 55 135 50" stroke="url(#drgSynapse)" strokeWidth="1.2" fill="none" />
            <path d="M 35 100 Q 85 90 135 85" stroke="url(#drgSynapse)" strokeWidth="1" fill="none" />
            <path d="M 35 135 Q 85 125 135 120" stroke="url(#drgSynapse)" strokeWidth="1" fill="none" strokeDasharray="2 2" />

            <path d="M 135 18 Q 185 30 235 34" stroke="url(#drgSynapse)" strokeWidth="1.2" fill="none" />
            <path d="M 135 50 Q 185 60 235 68" stroke="url(#drgSynapse)" strokeWidth="1.4" fill="none" />
            <path d="M 135 85 Q 185 80 235 102" stroke="url(#drgSynapse)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
            <path d="M 135 120 Q 185 125 235 136" stroke="url(#drgSynapse)" strokeWidth="1.2" fill="none" />

            <path d="M 235 34 Q 285 50 335 60" stroke="url(#drgSynapse)" strokeWidth="1.4" fill="none" />
            <path d="M 235 68 Q 285 64 335 60" stroke="url(#drgSynapse)" strokeWidth="1.2" fill="none" strokeDasharray="2 2" />
            <path d="M 235 102 Q 285 96 335 105" stroke="url(#drgSynapse)" strokeWidth="1.4" fill="none" />
            <path d="M 235 136 Q 285 120 335 105" stroke="url(#drgSynapse)" strokeWidth="1.2" fill="none" />
          </svg>

          {/* Layer Nodes */}
          {layers.map((layer, lIdx) => (
            <div
              key={lIdx}
              onMouseEnter={() => setActiveLayer(lIdx)}
              onMouseLeave={() => setActiveLayer(null)}
              style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.25rem',
                borderRadius: '0.75rem',
                backgroundColor: activeLayer === lIdx ? 'rgba(0, 210, 255, 0.1)' : 'transparent',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0' }}>
                {Array.from({ length: layer.count }).map((_, nIdx) => (
                  <div
                    key={nIdx}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      transition: 'all 0.25s ease',
                      backgroundColor:
                        lIdx === 0
                          ? 'rgba(0, 210, 255, 0.15)'
                          : lIdx === 3
                          ? 'rgba(168, 85, 247, 0.25)'
                          : '#0f172a',
                      color:
                        lIdx === 0
                          ? '#00d2ff'
                          : lIdx === 3
                          ? '#c084fc'
                          : '#94a3b8',
                      border:
                        lIdx === 0
                          ? '1px solid rgba(0, 210, 255, 0.5)'
                          : lIdx === 3
                          ? '1px solid rgba(168, 85, 247, 0.6)'
                          : '1px solid rgba(56, 189, 248, 0.2)',
                      boxShadow:
                        lIdx === 3
                          ? '0 0 10px rgba(168, 85, 247, 0.4)'
                          : 'none',
                    }}
                  >
                    <span>{layer.symbol}{nIdx + 1}</span>
                  </div>
                ))}
              </div>

              <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', color: '#94a3b8', whiteSpace: 'nowrap' }}>
                {layer.name}
              </span>
            </div>
          ))}
        </div>

        {/* Real Empirical Metrics Badges */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.625rem', paddingTop: '0.85rem', marginTop: '0.5rem', borderTop: '1px solid rgba(56, 189, 248, 0.12)' }}>
          {telemetry.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '0.5rem',
                borderRadius: '0.75rem',
                backgroundColor: 'rgba(13, 20, 36, 0.7)',
                border: '1px solid rgba(56, 189, 248, 0.14)',
              }}
            >
              <div style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', color: '#94a3b8', textTransform: 'uppercase' }}>
                {item.metric}
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', color: item.color, margin: '0.15rem 0' }}>
                {item.val}
              </div>
              <div style={{ fontSize: '0.6rem', color: '#64748b', fontFamily: 'JetBrains Mono, monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Footer info strip */}
        <div style={{ marginTop: '0.75rem', paddingTop: '0.65rem', borderTop: '1px solid rgba(56, 189, 248, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace', color: '#94a3b8' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Zap style={{ width: '13px', height: '13px', color: '#00d2ff' }} />
            <span>Empirical Pipeline</span>
          </span>
          <span style={{ color: '#a855f7', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <CheckCircle2 style={{ width: '13px', height: '13px', color: '#10b981' }} />
            <span>Verified Models</span>
          </span>
        </div>
      </div>
    </div>
  );
};

