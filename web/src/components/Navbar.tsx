import React from 'react';
import { ShieldCheck, Play, Network, User, Lock } from 'lucide-react';

interface NavbarProps {
  onScrollToSimulator: () => void;
  currentUser: { email: string; role: 'public' | 'auditor'; name: string } | null;
  onOpenAuth: () => void;
  lang: 'vi' | 'en';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollToSimulator,
  currentUser,
  onOpenAuth,
  lang,
  onToggleLang
}) => {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="z-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '68px'
      }}>
        {/* Top-Left of Z: Brand Identity */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'var(--primary)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(37, 99, 235, 0.35)'
          }}>
            <Network size={22} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--ink)', letterSpacing: '-0.02em' }}>
                Dir-BiSAGE
              </span>
              <span className="badge badge-primary" style={{ padding: '2px 8px', fontSize: '0.72rem' }}>
                IEEE SEG301
              </span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--ink-subtle)', fontWeight: 500 }}>
              {lang === 'vi' ? 'Công cụ Phát hiện Web Spam & Phục hồi Thứ hạng' : 'Adversarial Information Retrieval Engine'}
            </div>
          </div>
        </div>

        {/* Top-Right of Z: Nav Actions & Primary CTA */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="#camouflage" className="btn btn-outline" style={{ padding: '8px 12px', fontSize: '0.85rem' }}>
            {lang === 'vi' ? 'Bẫy Ngụy Trang' : 'Camouflage'}
          </a>
          <a href="#architecture" className="btn btn-outline" style={{ padding: '8px 12px', fontSize: '0.85rem' }}>
            {lang === 'vi' ? 'Kiến Trúc GNN' : 'Dual-Channel'}
          </a>
          <a href="#benchmarks" className="btn btn-outline" style={{ padding: '8px 12px', fontSize: '0.85rem' }}>
            {lang === 'vi' ? 'Bảng Điểm' : 'Scorecard'}
          </a>

          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="btn btn-outline"
            style={{ padding: '6px 10px', fontSize: '0.78rem', fontWeight: 700 }}
            title="Chuyển đổi ngôn ngữ Tiếng Việt / English"
          >
            {lang === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN'}
          </button>

          {/* Better Auth Role Trigger */}
          <button
            onClick={onOpenAuth}
            className={`btn ${currentUser ? 'badge-trust' : 'btn-outline'}`}
            style={{ padding: '8px 12px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            {currentUser ? <ShieldCheck size={15} /> : <Lock size={14} />}
            {currentUser ? currentUser.name.split(' ')[0] : 'Better Auth'}
          </button>

          <button 
            onClick={onScrollToSimulator} 
            className="btn btn-primary"
            style={{ padding: '8px 16px', fontSize: '0.88rem' }}
          >
            <Play size={15} fill="currentColor" />
            Live Simulator
          </button>
        </nav>
      </div>
    </header>
  );
};
