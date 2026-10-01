import React, { useState } from 'react';
import { ArrowRight, ShieldAlert, Cpu, Database, CheckCircle2, XCircle } from 'lucide-react';

export const ZigZagSections: React.FC = () => {
  const [gnnMode, setGnnMode] = useState<'undirected' | 'directed'>('directed');

  return (
    <section style={{ padding: '32px 0 64px' }}>
      <div className="z-container">
        
        {/* ZIG 1: The Camouflage Flaw (Left: Narrative, Right: Interactive Diagram) */}
        <div id="camouflage" className="z-zigzag-row">
          <div>
            <div className="badge badge-spam" style={{ marginBottom: '16px' }}>
              <ShieldAlert size={14} />
              The Adversarial Camouflage Trap
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Why Classical PageRank & Undirected GNNs Fail
            </h2>
            <p style={{ marginBottom: '16px', fontSize: '1.02rem' }}>
              Modern black-hat syndicates build dense internal rings to artificially circulate PageRank among hundreds of puppet hosts, 
              funneling massive link authority into target <em>money pages</em>.
            </p>
            <p style={{ marginBottom: '20px', fontSize: '1.02rem' }}>
              To evade detection, spammers inject <strong>unilateral outbound citations</strong> pointing to reputable authority seeds 
              (e.g., gov.uk, edu, or Wikipedia). When standard GNNs (GCN, GraphSAGE) symmetrize the web graph (<code className="code-inline">A = A + A^T</code>), 
              the model mistakenly diffuses seed trust <em>backwards</em> into the farm!
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                <XCircle size={18} color="var(--spam)" />
                <span><strong>Undirected GCN/GraphSAGE:</strong> Camouflage links siphon trust into link farms (-14.6% PR-AUC).</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem' }}>
                <XCircle size={18} color="var(--spam)" />
                <span><strong>TrustRank:</strong> Fails on multi-hop spam syndicates (+40.2% error gap).</span>
              </div>
            </div>
          </div>

          {/* Right Visual: Interactive Model Camouflage Demo */}
          <div className="card-panel" style={{ background: '#f8fafc', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Graph Message-Passing Mode</div>
              <div style={{ display: 'flex', gap: '6px', background: '#e2e8f0', padding: '3px', borderRadius: '8px' }}>
                <button 
                  onClick={() => setGnnMode('undirected')}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: gnnMode === 'undirected' ? 'white' : 'transparent',
                    color: gnnMode === 'undirected' ? 'var(--spam-ink)' : 'var(--ink-muted)'
                  }}
                >
                  Undirected (A = A^T)
                </button>
                <button 
                  onClick={() => setGnnMode('directed')}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: gnnMode === 'directed' ? 'var(--primary)' : 'transparent',
                    color: gnnMode === 'directed' ? 'white' : 'var(--ink-muted)'
                  }}
                >
                  Dir-BiSAGE (Decoupled)
                </button>
              </div>
            </div>

            {/* Simulated Edge Flow Visual */}
            <div style={{
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '24px',
              textAlign: 'center'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{
                  padding: '12px 18px',
                  borderRadius: '10px',
                  background: 'var(--trust-light)',
                  border: '1px solid oklch(0.85 0.08 145)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  color: 'var(--trust-ink)'
                }}>
                  Authority Seed (.gov)
                </div>

                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: gnnMode === 'undirected' ? 'var(--spam)' : 'var(--primary)' }}>
                  {gnnMode === 'undirected' ? '⇄ Bidirectional Symmetrization' : '← Unilateral Outbound Only'}
                </div>

                <div style={{
                  padding: '12px 18px',
                  borderRadius: '10px',
                  background: 'var(--spam-light)',
                  border: '1px solid oklch(0.85 0.10 25)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  color: 'var(--spam-ink)'
                }}>
                  Spam Money Page (.biz)
                </div>
              </div>

              <div style={{
                padding: '14px',
                borderRadius: '8px',
                background: gnnMode === 'undirected' ? 'oklch(0.98 0.03 25)' : 'oklch(0.98 0.03 255)',
                border: gnnMode === 'undirected' ? '1px dashed var(--spam)' : '1px solid var(--primary)',
                fontSize: '0.88rem',
                textAlign: 'left'
              }}>
                {gnnMode === 'undirected' ? (
                  <span style={{ color: 'var(--spam-ink)' }}>
                    <strong>Directionality Collapse:</strong> Symmetrization converts the unilateral outgoing link into an incoming edge. 
                    Trust from the seed leaks back into the spam farm, falsely classifying it as legitimate!
                  </span>
                ) : (
                  <span style={{ color: 'var(--primary-ink)' }}>
                    <strong>Dir-BiSAGE Decoupled Protection:</strong> Outward aggregation records that the spam farm points outward to seeds, 
                    while inward aggregation detects ZERO inbound trust from the seed. The camouflage is exposed!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ZAG 1: Architecture Solution (Left: Tensor Math Card, Right: Architecture Narrative) */}
        <div id="architecture" className="z-zigzag-row" style={{ direction: 'rtl' }}>
          <div style={{ direction: 'ltr' }}>
            <div className="badge badge-primary" style={{ marginBottom: '16px' }}>
              <Cpu size={14} />
              The Proposed Innovation
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Decoupled Inward & Outward Graph Message Passing
            </h2>
            <p style={{ marginBottom: '16px', fontSize: '1.02rem' }}>
              Instead of collapsing adjacency directionality, <strong>Dir-BiSAGE</strong> processes citations through two specialized, non-interfering neural pathways:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <CheckCircle2 size={20} color="var(--trust)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Inward Channel (Authority Verification):</strong> Aggregates incoming neighbors <code className="code-inline">N_in(u)</code>. 
                  Verifies whether endorsements originate from reputable peers or spam conspirators.
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Outward Channel (Syndicate Topology):</strong> Aggregates outgoing targets <code className="code-inline">N_out(u)</code>. 
                  Catches the signature outbound camouflage patterns and dense reciprocal farm rings.
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--ink-muted)' }}>
              Both channels are normalized with LayerNorm, fused via gated linear projections, and optimized using 
              <strong> Class-Weighted Focal Loss (gamma = 2.0, alpha = 0.75)</strong> to handle the severe 13% spam imbalance.
            </p>
          </div>

          {/* Left Visual: Tensor Flow Diagram */}
          <div className="card-panel" style={{ direction: 'ltr', background: '#ffffff', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink-subtle)', marginBottom: '12px' }}>
              DIR-BISAGE 2-LAYER ARCHITECTURE
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
              <div style={{ padding: '12px', background: '#f1f5f9', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
                <div style={{ color: 'var(--ink-muted)', marginBottom: '4px' }}># 1. Decoupled Aggregations</div>
                <div style={{ color: 'var(--primary)' }}>h_in = ScatterMean(x, dst=edge[1], src=edge[0])</div>
                <div style={{ color: 'var(--primary)' }}>h_out = ScatterMean(x, dst=edge[0], src=edge[1])</div>
              </div>

              <div style={{ padding: '12px', background: '#f1f5f9', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
                <div style={{ color: 'var(--ink-muted)', marginBottom: '4px' }}># 2. Gated Dual-Channel Fusion</div>
                <div style={{ color: 'var(--ink)' }}>h_fused = LayerNorm(ReLU(W_fuse · [h_in || h_out]) + x)</div>
              </div>

              <div style={{ padding: '12px', background: 'var(--trust-light)', borderRadius: '8px', border: '1px solid oklch(0.85 0.08 145)' }}>
                <div style={{ color: 'var(--trust-ink)', fontWeight: 700 }}># 3. Output Probabilities</div>
                <div style={{ color: 'var(--trust-ink)' }}>P(Spam | d) = Sigmoid(Classifier(h_fused))</div>
              </div>
            </div>
          </div>
        </div>

        {/* ZIG 2: Search Engine Ranking Penalization (Left: Narrative, Right: Ranking Formula Card) */}
        <div className="z-zigzag-row">
          <div>
            <div className="badge badge-trust" style={{ marginBottom: '16px' }}>
              <Database size={14} />
              Production Search Engine Integration
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Exponential Damping Demotes Hijacked Rankings
            </h2>
            <p style={{ marginBottom: '16px', fontSize: '1.02rem' }}>
              Traditional search engines (e.g., Lucene / Whoosh in course SEG301) score documents using a linear combination of text relevance and link authority:
              <br />
              <code className="code-inline">S_classic(q, d) = BM25(q, d) · (1 + lambda · PR(d))</code>
            </p>
            <p style={{ marginBottom: '16px', fontSize: '1.02rem' }}>
              When link farms artificially pump <code className="code-inline">PR(d)</code>, commercial keyword queries get hijacked into position #1. 
              Dir-BiSAGE incorporates an exponential anti-spam damping factor:
            </p>
            <div style={{
              padding: '16px 20px',
              background: 'var(--surface-subtle)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--primary-ink)',
              marginBottom: '16px'
            }}>
              S_robust(q, d) = S_classic(q, d) · (1 - P_spam(d))^beta
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--ink-muted)' }}>
              For normal sites (<code className="code-inline">P_spam ≈ 0.02</code>), ranking is 95% preserved. 
              For farm hosts (<code className="code-inline">P_spam ≥ 0.95</code>), the multiplier drops below <strong>0.001</strong>, 
              instantly plummeting them down past rank #7.
            </p>
          </div>

          {/* Right Visual: Live Damping Curve Visualizer */}
          <div className="card-panel" style={{ background: '#ffffff', border: '1px solid var(--border)' }}>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '14px' }}>
              Downstream Multiplier vs Spam Probability (beta = 3.0)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { prob: 0.02, label: 'Legitimate Gov/Edu Host', mult: 0.941, badge: 'badge-trust' },
                { prob: 0.05, label: 'Commercial Organic Blog', mult: 0.857, badge: 'badge-trust' },
                { prob: 0.50, label: 'Ambiguous Host', mult: 0.125, badge: 'badge-warning' },
                { prob: 0.94, label: 'Link Farm Supporter', mult: 0.0002, badge: 'badge-spam' },
                { prob: 0.96, label: 'Black-Hat Money Page', mult: 0.00006, badge: 'badge-spam' }
              ].map((row, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  background: '#f8fafc',
                  borderRadius: '8px',
                  fontSize: '0.88rem'
                }}>
                  <div>
                    <span style={{ fontWeight: 600, color: 'var(--ink)' }}>{row.label}</span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--ink-subtle)' }}>P(Spam) = {row.prob.toFixed(2)}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className={`badge ${row.badge}`}>
                      Multiplier: {row.mult.toFixed(4)}x
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
