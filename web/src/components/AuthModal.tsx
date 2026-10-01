import React, { useState } from 'react';
import { Shield, Key, CheckCircle2, Lock, UserCheck, X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: { email: string; role: 'public' | 'auditor'; name: string } | null;
  onLogin: (role: 'public' | 'auditor', email: string, name: string) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogin,
  onLogout
}) => {
  if (!isOpen) return null;

  const [selectedRole, setSelectedRole] = useState<'auditor' | 'public'>('auditor');
  const [email, setEmail] = useState('auditor.ai@fpt.edu.vn');
  const [name, setName] = useState('Dr. AI Security Officer');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(selectedRole, email, name);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      backgroundColor: 'rgba(15, 23, 42, 0.65)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{
        background: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-xl)',
        width: '100%',
        maxWidth: '460px',
        padding: '28px',
        position: 'relative'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--ink-muted)'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'var(--primary-light)',
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Shield size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Better Auth Access Portal</h3>
            <div style={{ fontSize: '0.78rem', color: 'var(--ink-subtle)' }}>
              Role-Based Access Control (RBAC) & Session Management
            </div>
          </div>
        </div>

        {currentUser ? (
          <div>
            <div style={{
              padding: '16px',
              background: 'var(--surface-subtle)',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <UserCheck size={18} color="var(--trust)" />
                <span style={{ fontWeight: 700 }}>Active Session Authenticated</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--ink)' }}>User: <strong>{currentUser.name}</strong></div>
              <div style={{ fontSize: '0.82rem', color: 'var(--ink-muted)' }}>Email: {currentUser.email}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--primary-ink)', marginTop: '4px' }}>
                Role: <span className="badge badge-primary">{currentUser.role.toUpperCase()}</span>
              </div>
            </div>

            <button 
              onClick={() => { onLogout(); onClose(); }}
              className="btn btn-outline"
              style={{ width: '100%', padding: '10px' }}
            >
              Sign Out Session
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p style={{ fontSize: '0.88rem', color: 'var(--ink-muted)', marginBottom: '18px' }}>
              Authenticate to unlock high-privilege search engine telemetry, directional GNN weights, and adversarial audit logs.
            </p>

            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                Select Role:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRole('auditor');
                    setEmail('auditor.ai@fpt.edu.vn');
                    setName('Dr. AI Security Officer');
                  }}
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    background: selectedRole === 'auditor' ? 'var(--primary-light)' : 'var(--surface)',
                    color: selectedRole === 'auditor' ? 'var(--primary-ink)' : 'var(--ink-muted)',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    cursor: 'pointer'
                  }}
                >
                  Security Auditor (Admin)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRole('public');
                    setEmail('guest.searcher@web.org');
                    setName('Public Web User');
                  }}
                  style={{
                    padding: '8px',
                    borderRadius: '6px',
                    border: '1px solid var(--border)',
                    background: selectedRole === 'public' ? 'var(--primary-light)' : 'var(--surface)',
                    color: selectedRole === 'public' ? 'var(--primary-ink)' : 'var(--ink-muted)',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    cursor: 'pointer'
                  }}
                >
                  Public Search User
                </button>
              </div>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                Officer Name:
              </label>
              <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-strong)',
                  fontSize: '0.88rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                Email Address:
              </label>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-strong)',
                  fontSize: '0.88rem'
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem',
              color: 'var(--trust-ink)',
              marginBottom: '16px'
            }}>
              <CheckCircle2 size={14} />
              <span>Protected by Better Auth · CSRF Token & HTTPS Session Cookie Enabled</span>
            </div>

            <button 
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', padding: '12px' }}
            >
              <Lock size={16} />
              Authenticate & Launch Session
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
