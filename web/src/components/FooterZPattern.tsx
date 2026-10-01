import React from 'react';
import { Download, FileText, Presentation, Code, ArrowUp } from 'lucide-react';

export const FooterZPattern: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#0f172a',
      color: '#f8fafc',
      padding: '64px 0 40px',
      borderTop: '1px solid #334155'
    }}>
      <div className="z-container">
        {/* The Final Horizon of the Z-Pattern */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr',
          gap: '48px',
          marginBottom: '48px'
        }}>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '12px', color: 'white' }}>
              Dir-BiSAGE Engine
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '42ch' }}>
              Course project for <strong>Search Engines (SEG301)</strong>, Term 5, FPT University. 
              Implementing directed graph neural networks to combat adversarial link manipulation.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '14px', color: 'white' }}>
              Project Artifacts
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <a href="../paper/main.pdf" target="_blank" rel="noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={16} color="#38bdf8" />
                IEEE Conference Paper (PDF)
              </a>
              <a href="../presentation/presentation.pptx" download style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Presentation size={16} color="#34d399" />
                Presentation Deck (PPTX)
              </a>
              <a href="../presentation/slides.md" target="_blank" rel="noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={16} color="#a78bfa" />
                Marp Markdown Slides
              </a>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '14px', color: 'white' }}>
              Source Modules
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#94a3b8' }}>
              <div><code style={{ color: '#38bdf8' }}>src/models.py</code>: Dir-BiSAGE & FocalLoss</div>
              <div><code style={{ color: '#38bdf8' }}>src/ranking_penalty.py</code>: Downstream Retrieval</div>
              <div><code style={{ color: '#38bdf8' }}>src/train_eval.py</code>: GNN Harness</div>
              <div><code style={{ color: '#38bdf8' }}>src/data_loader.py</code>: WEBSPAM Loader</div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #1e293b',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.82rem',
          color: '#64748b'
        }}>
          <div>© 2026 Dir-BiSAGE Project Team · FPT University (SEG301). Released under MIT License.</div>
          <button 
            onClick={scrollToTop}
            style={{
              background: '#1e293b',
              border: 'none',
              color: '#cbd5e1',
              padding: '6px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            Back to Top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
