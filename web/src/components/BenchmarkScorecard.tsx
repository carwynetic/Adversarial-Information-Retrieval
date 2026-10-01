import React, { useState } from 'react';
import { BENCHMARK_RESULTS, ABLATION_RESULTS } from '../data/benchmarkData';
import { Award, BarChart3, CheckCircle2 } from 'lucide-react';

export const BenchmarkScorecard: React.FC = () => {
  const [tab, setTab] = useState<'main' | 'ablation'>('main');

  return (
    <div id="benchmarks" style={{ padding: '48px 0', borderTop: '1px solid var(--border)' }}>
      <div className="z-container">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="badge badge-trust" style={{ marginBottom: '12px' }}>
            <Award size={14} />
            Empirical Validation
          </span>
          <h2 style={{ fontSize: '2.2rem', letterSpacing: '-0.02em', marginBottom: '12px' }}>
            WEBSPAM-UK2007 Benchmark & Ablation Study
          </h2>
          <p style={{ margin: '0 auto', fontSize: '1.05rem' }}>
            Rigorously evaluated on 114,529 web hosts and 1.8M directed edges with a strict 60/20/20 host-level disjoint split.
          </p>
        </div>

        {/* Tab Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
          <button 
            onClick={() => setTab('main')}
            className={`tab-button ${tab === 'main' ? 'active' : ''}`}
          >
            Table I: Main Comparative Results (8 Baselines)
          </button>
          <button 
            onClick={() => setTab('ablation')}
            className={`tab-button ${tab === 'ablation' ? 'active' : ''}`}
          >
            Table II: Component-wise Ablation Study
          </button>
        </div>

        {/* Tab 1: Main Results Table */}
        {tab === 'main' && (
          <div className="card-panel" style={{ overflowX: 'auto', padding: '0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid var(--border)' }}>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>Method</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>Paradigm Type</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>ROC-AUC</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>PR-AUC (AP)</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>F1-Spam</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>Accuracy</th>
                </tr>
              </thead>
              <tbody>
                {BENCHMARK_RESULTS.map((m, idx) => (
                  <tr 
                    key={idx}
                    style={{
                      borderBottom: '1px solid var(--border)',
                      background: m.is_best ? 'var(--trust-light)' : (idx % 2 === 0 ? 'white' : '#fafafa'),
                      fontWeight: m.is_best ? 700 : 400
                    }}
                  >
                    <td style={{ padding: '14px 20px', color: m.is_best ? 'var(--trust-ink)' : 'var(--ink)' }}>
                      {m.is_best && <CheckCircle2 size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: '-2px' }} />}
                      {m.method}
                    </td>
                    <td style={{ padding: '14px 20px', color: 'var(--ink-muted)' }}>{m.type}</td>
                    <td style={{ padding: '14px 20px' }}>{m.roc_auc.toFixed(3)}</td>
                    <td style={{ padding: '14px 20px', color: m.is_best ? 'var(--trust-ink)' : 'inherit' }}>
                      {m.pr_auc.toFixed(3)}
                    </td>
                    <td style={{ padding: '14px 20px' }}>{m.f1_spam.toFixed(3)}</td>
                    <td style={{ padding: '14px 20px' }}>{m.acc.toFixed(3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Ablation Study Table */}
        {tab === 'ablation' && (
          <div className="card-panel" style={{ overflowX: 'auto', padding: '0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid var(--border)' }}>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>Ablation Configuration</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>ROC-AUC</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>PR-AUC</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>F1-Spam</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>Delta PR-AUC</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>Theoretical Implication</th>
                </tr>
              </thead>
              <tbody>
                {ABLATION_RESULTS.map((a, idx) => (
                  <tr 
                    key={idx}
                    style={{
                      borderBottom: '1px solid var(--border)',
                      background: idx === 0 ? 'var(--primary-light)' : (idx % 2 === 0 ? 'white' : '#fafafa'),
                      fontWeight: idx === 0 ? 700 : 400
                    }}
                  >
                    <td style={{ padding: '14px 20px', color: idx === 0 ? 'var(--primary-ink)' : 'var(--ink)' }}>
                      {a.variant}
                    </td>
                    <td style={{ padding: '14px 20px' }}>{a.roc_auc.toFixed(3)}</td>
                    <td style={{ padding: '14px 20px' }}>{a.pr_auc.toFixed(3)}</td>
                    <td style={{ padding: '14px 20px' }}>{a.f1_spam.toFixed(3)}</td>
                    <td style={{ padding: '14px 20px', color: a.diff_pr.startsWith('-') ? 'var(--spam)' : 'var(--trust)' }}>
                      {a.diff_pr}
                    </td>
                    <td style={{ padding: '14px 20px', color: 'var(--ink-muted)', fontSize: '0.85rem' }}>
                      {a.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};
