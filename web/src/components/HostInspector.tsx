import React, { useState } from 'react';
import { Globe, ShieldCheck, AlertOctagon, CheckCircle2, Info } from 'lucide-react';
import { PRESET_DOMAINS, DomainProfile } from '../data/benchmarkData';

export const HostInspector: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('instant-cash-credit-99.biz');
  const profile: DomainProfile = PRESET_DOMAINS[selectedDomain] || PRESET_DOMAINS['instant-cash-credit-99.biz'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Preset Domain Switcher */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {Object.keys(PRESET_DOMAINS).map((domain) => {
          const p = PRESET_DOMAINS[domain];
          return (
            <button 
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: selectedDomain === domain ? 'var(--primary)' : 'var(--surface)',
                color: selectedDomain === domain ? 'white' : 'var(--ink)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Globe size={15} />
              {domain}
              <span className={`badge ${p.is_spam ? 'badge-spam' : 'badge-trust'}`} style={{ padding: '2px 6px', fontSize: '0.7rem' }}>
                {p.type}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Inspection Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px' }}>
        
        {/* Left: Topological & Graph Diagnostics */}
        <div className="card-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{profile.domain}</h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>{profile.narrative}</div>
            </div>
            <div className={`badge ${profile.is_spam ? 'badge-spam' : 'badge-trust'}`} style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
              {profile.is_spam ? <AlertOctagon size={16} /> : <ShieldCheck size={16} />}
              {profile.is_spam ? 'Black-Hat Link Farm' : 'Verified Legitimate'}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '20px' }}>
            <div style={{ padding: '12px', background: 'var(--surface-subtle)', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--ink-subtle)', fontWeight: 600 }}>IN-DEGREE</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>{profile.in_degree}</div>
            </div>
            <div style={{ padding: '12px', background: 'var(--surface-subtle)', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--ink-subtle)', fontWeight: 600 }}>OUT-DEGREE</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>{profile.out_degree}</div>
            </div>
            <div style={{ padding: '12px', background: 'var(--surface-subtle)', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--ink-subtle)', fontWeight: 600 }}>RECIPROCITY</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: profile.reciprocity > 0.35 ? 'var(--spam)' : 'var(--trust)' }}>
                {(profile.reciprocity * 100).toFixed(0)}%
              </div>
            </div>
          </div>

          {/* Lexical & Content Features */}
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink-subtle)', marginBottom: '12px' }}>
            MULTI-MODAL FEATURE SIGNALS
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#f8fafc', borderRadius: '6px' }}>
              <span>Domain Length:</span>
              <span className="code-inline">{profile.features.domain_length} chars</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#f8fafc', borderRadius: '6px' }}>
              <span>Subdomain Depth:</span>
              <span className="code-inline">{profile.features.subdomain_depth}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#f8fafc', borderRadius: '6px' }}>
              <span>Keyword Density:</span>
              <span className="code-inline">{(profile.features.keyword_density * 100).toFixed(0)}%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#f8fafc', borderRadius: '6px' }}>
              <span>Anchor Diversity:</span>
              <span className="code-inline">{profile.features.anchor_diversity.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Right: Model Confidence Verdict Comparison */}
        <div className="card-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink-subtle)', marginBottom: '16px' }}>
              ALGORITHMIC VERDICT COMPARISON
            </div>

            {/* Classical TrustRank */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>Classical TrustRank (VLDB'04):</span>
                <span style={{ fontWeight: 700, color: profile.trustrank > 0.5 ? 'var(--trust)' : 'var(--spam)' }}>
                  {(profile.trustrank * 100).toFixed(1)}% Trust
                </span>
              </div>
              <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${profile.trustrank * 100}%`,
                  background: profile.trustrank > 0.5 ? 'var(--trust)' : 'var(--spam)',
                  transition: 'width 0.4s ease'
                }} />
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--ink-subtle)', marginTop: '4px' }}>
                {profile.is_spam 
                  ? "Vulnerability: Camouflage links to Wikipedia falsely inflate trust score."
                  : "Normal attenuation from authority seed domains."}
              </div>
            </div>

            {/* Dir-BiSAGE Confidence */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>Dir-BiSAGE Spam Confidence:</span>
                <span style={{ fontWeight: 700, color: profile.dirbisage_prob > 0.5 ? 'var(--spam)' : 'var(--trust)' }}>
                  {(profile.dirbisage_prob * 100).toFixed(1)}% Spam
                </span>
              </div>
              <div style={{ height: '10px', background: '#e2e8f0', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${profile.dirbisage_prob * 100}%`,
                  background: profile.dirbisage_prob > 0.5 ? 'var(--spam)' : 'var(--trust)',
                  transition: 'width 0.4s ease'
                }} />
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--ink-subtle)', marginTop: '4px' }}>
                {profile.is_spam 
                  ? "Exposed: Decoupled outward channel captures camouflage outbound targets."
                  : "Verified: Inward aggregation authenticates legitimate incoming citations."}
              </div>
            </div>
          </div>

          <div style={{
            padding: '14px',
            background: profile.is_spam ? 'oklch(0.98 0.03 25)' : 'oklch(0.98 0.03 145)',
            borderRadius: '8px',
            border: profile.is_spam ? '1px solid oklch(0.85 0.10 25)' : '1px solid oklch(0.85 0.08 145)',
            fontSize: '0.85rem'
          }}>
            <strong>Production Action:</strong> {profile.is_spam 
              ? "Apply exponential damping multiplier 0.0001x. Demote from SERP Top-3." 
              : "Ranking preserved (0.95x). Approved for top search positioning."}
          </div>
        </div>

      </div>
    </div>
  );
};
