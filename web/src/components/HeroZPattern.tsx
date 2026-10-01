import React from 'react';
import { ArrowRight, ShieldCheck, Zap, TrendingUp, AlertTriangle } from 'lucide-react';

interface HeroProps {
  onLaunchDemo: () => void;
}

export const HeroZPattern: React.FC<HeroProps> = ({ onLaunchDemo }) => {
  return (
    <section style={{
      padding: '72px 0 54px',
      borderBottom: '1px solid var(--border)',
      background: 'linear-gradient(180deg, rgba(248, 250, 252, 0.8) 0%, rgba(255, 255, 255, 1) 100%)'
    }}>
      <div className="z-container">
        {/* The Z-Pattern Top Diagonal Sweep */}
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <span className="badge badge-warning" style={{ gap: '6px' }}>
              <AlertTriangle size={14} />
              Adversarial IR Vulnerability
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
              Black-Hat SEO Sybil Attacks on PageRank
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
            color: 'var(--ink)'
          }}>
            Black-Hat SEO Manipulates PageRank.
            <br />
            <span style={{ color: 'var(--primary)' }}>Dir-BiSAGE</span> Restores Search Integrity.
          </h1>

          <p style={{
            fontSize: '1.15rem',
            margin: '0 auto 32px',
            lineHeight: 1.65,
            color: 'var(--ink-muted)'
          }}>
            Classical heuristics like <strong>TrustRank</strong> and symmetric GNNs collapse under 
            <em> adversarial camouflage</em>—where link farms inject unilateral outbound citations to authority seeds (.gov / .edu / Wikipedia). 
            Dir-BiSAGE decouples inward authority from outward topology, suppressing spam ranking by <strong>-99.9%</strong>.
          </p>

          {/* Bottom-Left to Bottom-Right of Z: Primary CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={onLaunchDemo}
              className="btn btn-primary"
              style={{ padding: '14px 28px', fontSize: '1.05rem' }}
            >
              Launch Search Engine Simulator
              <ArrowRight size={18} />
            </button>
            <a 
              href="#benchmarks" 
              className="btn btn-outline"
              style={{ padding: '14px 24px', fontSize: '1.05rem' }}
            >
              View WEBSPAM-UK2007 Benchmark
            </a>
          </div>

          {/* Key Metric Indicators */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '56px',
            textAlign: 'left'
          }}>
            <div className="card-panel" style={{ padding: '20px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--ink-subtle)', marginBottom: '4px' }}>
                PR-AUC GAIN VS TRUSTRANK
              </div>
              <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--trust-ink)' }}>
                +40.2%
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', marginTop: '2px' }}>
                0.884 vs 0.482 on WEBSPAM-UK2007
              </div>
            </div>

            <div className="card-panel" style={{ padding: '20px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--ink-subtle)', marginBottom: '4px' }}>
                SPAM SCORE COLLAPSE
              </div>
              <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--primary-ink)' }}>
                (1 - P)^3
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', marginTop: '2px' }}>
                Scores plummet from 20.93 to 0.001
              </div>
            </div>

            <div className="card-panel" style={{ padding: '20px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--ink-subtle)', marginBottom: '4px' }}>
                TOP-3 SEARCH CLEANED
              </div>
              <div style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--trust-ink)' }}>
                100%
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--ink-muted)', marginTop: '2px' }}>
                Zero link farms in Top-3 SERP results
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
