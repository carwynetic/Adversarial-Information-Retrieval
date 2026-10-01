import React, { useState } from 'react';
import { Network, Eye, Layers } from 'lucide-react';

export const GraphVisualizer: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>('F_money');

  return (
    <div className="card-panel" style={{ padding: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Network size={18} color="var(--primary)" />
            Interactive Web Host Topology Graph
          </h3>
          <div style={{ fontSize: '0.82rem', color: 'var(--ink-muted)' }}>
            Click nodes to inspect connection topology and directional message passing flow.
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--trust)' }}></span>
            <span>Authority Seed (.gov)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--spam)' }}></span>
            <span>Link Farm Syndicate</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)' }}></span>
            <span>Organic Web Peer</span>
          </div>
        </div>
      </div>

      {/* SVG Canvas */}
      <div style={{
        background: '#0f172a',
        borderRadius: '12px',
        padding: '16px',
        position: 'relative',
        minHeight: '340px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <svg viewBox="0 0 700 300" style={{ width: '100%', height: '100%' }}>
          <defs>
            <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="10" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#38bdf8" />
            </marker>
            <marker id="arrow-red" markerWidth="6" markerHeight="6" refX="10" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#f87171" />
            </marker>
            <marker id="arrow-camo" markerWidth="6" markerHeight="6" refX="10" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#fbbf24" />
            </marker>
          </defs>

          {/* Organic Edges */}
          <line x1="120" y1="80" x2="220" y2="150" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
          <line x1="220" y1="150" x2="160" y2="230" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
          <line x1="160" y1="230" x2="120" y2="80" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow-blue)" />
          <line x1="220" y1="150" x2="350" y2="70" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrow-blue)" />

          {/* Farm Syndicate Edges (Dense internal) */}
          <line x1="480" y1="170" x2="560" y2="120" stroke="#f87171" strokeWidth="2" markerEnd="url(#arrow-red)" />
          <line x1="560" y1="120" x2="620" y2="190" stroke="#f87171" strokeWidth="2" markerEnd="url(#arrow-red)" />
          <line x1="620" y1="190" x2="520" y2="240" stroke="#f87171" strokeWidth="2" markerEnd="url(#arrow-red)" />
          <line x1="520" y1="240" x2="480" y2="170" stroke="#f87171" strokeWidth="2" markerEnd="url(#arrow-red)" />
          <line x1="560" y1="120" x2="520" y2="240" stroke="#f87171" strokeWidth="2" markerEnd="url(#arrow-red)" />

          {/* Camouflage Edges (From Farm to Seed) */}
          <path d="M 560 120 Q 450 40 350 70" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="5,5" markerEnd="url(#arrow-camo)" />
          <path d="M 480 170 Q 400 110 350 70" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow-camo)" />

          {/* Authority Seed Node */}
          <g onClick={() => setActiveNode('Seed')} style={{ cursor: 'pointer' }}>
            <circle cx="350" cy="70" r="24" fill="#059669" stroke="#34d399" strokeWidth="3" />
            <text x="350" y="75" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">Seed</text>
          </g>

          {/* Organic Nodes */}
          <g onClick={() => setActiveNode('O_1')} style={{ cursor: 'pointer' }}>
            <circle cx="120" cy="80" r="18" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <text x="120" y="84" textAnchor="middle" fill="white" fontSize="10">Org1</text>
          </g>
          <g onClick={() => setActiveNode('O_2')} style={{ cursor: 'pointer' }}>
            <circle cx="220" cy="150" r="18" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <text x="220" y="154" textAnchor="middle" fill="white" fontSize="10">Org2</text>
          </g>
          <g onClick={() => setActiveNode('O_3')} style={{ cursor: 'pointer' }}>
            <circle cx="160" cy="230" r="18" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <text x="160" y="234" textAnchor="middle" fill="white" fontSize="10">Org3</text>
          </g>

          {/* Farm Syndicate Nodes */}
          <g onClick={() => setActiveNode('F_money')} style={{ cursor: 'pointer' }}>
            <circle cx="560" cy="120" r="26" fill="#dc2626" stroke="#fbbf24" strokeWidth="3" />
            <text x="560" y="125" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">Money</text>
          </g>
          <g onClick={() => setActiveNode('F_supp1')} style={{ cursor: 'pointer' }}>
            <circle cx="480" cy="170" r="16" fill="#ef4444" stroke="#fca5a5" strokeWidth="2" />
            <text x="480" y="174" textAnchor="middle" fill="white" fontSize="9">F1</text>
          </g>
          <g onClick={() => setActiveNode('F_supp2')} style={{ cursor: 'pointer' }}>
            <circle cx="620" cy="190" r="16" fill="#ef4444" stroke="#fca5a5" strokeWidth="2" />
            <text x="620" y="194" textAnchor="middle" fill="white" fontSize="9">F2</text>
          </g>
          <g onClick={() => setActiveNode('F_supp3')} style={{ cursor: 'pointer' }}>
            <circle cx="520" cy="240" r="16" fill="#ef4444" stroke="#fca5a5" strokeWidth="2" />
            <text x="520" y="244" textAnchor="middle" fill="white" fontSize="9">F3</text>
          </g>
        </svg>

        {/* Selected Node Tooltip Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '16px',
          right: '16px',
          background: 'rgba(30, 41, 59, 0.95)',
          padding: '10px 16px',
          borderRadius: '8px',
          border: '1px solid #475569',
          color: 'white',
          fontSize: '0.85rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <strong>Active Selected Node:</strong> {activeNode === 'F_money' ? 'Target Money Page (.biz)' : (activeNode === 'Seed' ? 'Authority Seed (.gov.uk)' : 'Farm Supporter Node')}
          </div>
          <div style={{ color: '#94a3b8' }}>
            {activeNode === 'F_money' 
              ? 'Pumps PageRank via internal clique + 2 dashed camouflage links to Seed.' 
              : 'Endorses syndicate peers and camouflages outbound links.'}
          </div>
        </div>
      </div>
    </div>
  );
};
