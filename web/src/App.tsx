import React, { useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroZPattern } from './components/HeroZPattern';
import { ZigZagSections } from './components/ZigZagSections';
import { SearchSimulator } from './components/SearchSimulator';
import { HostInspector } from './components/HostInspector';
import { GraphVisualizer } from './components/GraphVisualizer';
import { BenchmarkScorecard } from './components/BenchmarkScorecard';
import { FooterZPattern } from './components/FooterZPattern';
import { AuthModal } from './components/AuthModal';
import { Search, Globe, Network, ShieldCheck, UserCheck } from 'lucide-react';

export function App() {
  const simulatorRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'search' | 'host' | 'graph'>('search');
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<{ email: string; role: 'public' | 'auditor'; name: string } | null>({
    email: 'auditor.ai@fpt.edu.vn',
    role: 'auditor',
    name: 'Dr. AI Security Officer'
  });

  const handleScrollToSimulator = () => {
    simulatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogin = (role: 'public' | 'auditor', email: string, name: string) => {
    setCurrentUser({ role, email, name });
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const toggleLang = () => {
    setLang(prev => prev === 'vi' ? 'en' : 'vi');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Better Auth Modal */}
      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={currentUser}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      {/* 1. Z-Pattern Top Horizontal */}
      <Navbar 
        onScrollToSimulator={handleScrollToSimulator}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
        lang={lang}
        onToggleLang={toggleLang}
      />

      {currentUser && (
        <div style={{
          background: 'oklch(0.24 0.08 260)',
          color: '#e2e8f0',
          padding: '8px 24px',
          fontSize: '0.82rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <ShieldCheck size={16} color="#34d399" />
          <span>
            <strong>Better Auth Session Active:</strong> Logged in as <strong>{currentUser.name}</strong> ({currentUser.role.toUpperCase()}) · Telemetry streaming enabled
          </span>
          <button
            onClick={() => setIsAuthOpen(true)}
            style={{
              background: 'transparent',
              border: '1px solid #64748b',
              color: '#cbd5e1',
              borderRadius: '4px',
              padding: '2px 8px',
              fontSize: '0.75rem',
              cursor: 'pointer'
            }}
          >
            Manage Session
          </button>
        </div>
      )}

      {/* 2. Z-Pattern Diagonal Hero */}
      <main style={{ flex: 1 }}>
        <HeroZPattern onLaunchDemo={handleScrollToSimulator} />

        {/* 3. Z-Pattern Alternating Zig-Zag Sections */}
        <ZigZagSections />

        {/* 4. Core Interactive Playground */}
        <section 
          ref={simulatorRef} 
          style={{ 
            padding: '64px 0', 
            background: 'oklch(0.975 0.008 260)',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)'
          }}
        >
          <div className="z-container">
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div className="badge badge-primary" style={{ marginBottom: '12px' }}>
                Interactive Engine Laboratory
              </div>
              <h2 style={{ fontSize: '2.2rem', letterSpacing: '-0.02em', marginBottom: '10px' }}>
                Live Adversarial IR Simulator
              </h2>
              <p style={{ margin: '0 auto', fontSize: '1.05rem' }}>
                Test downstream search engine ranking integration, inspect host features, or explore link farm topologies.
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '32px' }}>
              <button 
                onClick={() => setActiveTab('search')}
                className={`tab-button ${activeTab === 'search' ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Search size={16} />
                Downstream Search Simulator
              </button>
              <button 
                onClick={() => setActiveTab('host')}
                className={`tab-button ${activeTab === 'host' ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Globe size={16} />
                Web Host Classifier
              </button>
              <button 
                onClick={() => setActiveTab('graph')}
                className={`tab-button ${activeTab === 'graph' ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Network size={16} />
                Link Topology Visualizer
              </button>
            </div>

            {/* Active Interactive View */}
            {activeTab === 'search' && <SearchSimulator />}
            {activeTab === 'host' && <HostInspector />}
            {activeTab === 'graph' && <GraphVisualizer />}
          </div>
        </section>

        {/* 5. Benchmark & Ablation Scorecard */}
        <BenchmarkScorecard />
      </main>

      {/* 6. Z-Pattern Bottom Horizontal */}
      <FooterZPattern />
    </div>
  );
}

export default App;
