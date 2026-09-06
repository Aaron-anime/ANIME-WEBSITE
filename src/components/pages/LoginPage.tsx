import { useState } from 'react';
import { Clapperboard, Mail, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  onLogin: (username: string, email: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }

    if (formData.email && !formData.email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    onLogin(formData.username, formData.email);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f1e 0%, #1a0033 50%, #0f0f1e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px'
      }}>
        {/* Logo */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2.5rem'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.8rem',
            marginBottom: '1rem'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              display: 'grid',
              placeItems: 'center',
              borderRadius: '12px',
              background: 'linear-gradient(140deg, #ef233c, #9c0d1f)'
            }}>
              <Clapperboard size={28} color="white" strokeWidth={2.4} />
            </div>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '0.08em'
            }}>ANIME VAULT</span>
          </div>
          <p style={{
            color: '#a1a1aa',
            fontSize: '0.95rem',
            margin: 0
          }}>Stream unlimited anime 24/7</p>
        </div>

        {/* Form Card */}
        <div style={{
          background: 'rgba(16, 16, 20, 0.8)',
          border: '1px solid rgba(239, 35, 60, 0.2)',
          borderRadius: '16px',
          padding: '2rem',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
        }}>
          <h1 style={{
            margin: '0 0 1.5rem 0',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'white',
            textAlign: 'center'
          }}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </h1>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Username */}
            <div>
              <label style={{
                display: 'block',
                color: '#a1a1aa',
                fontSize: '0.85rem',
                marginBottom: '0.5rem',
                fontWeight: 500
              }}>Username</label>
              <input
                type="text"
                placeholder="anime_fan24"
                value={formData.username}
                onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(239, 35, 60, 0.5)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{
                display: 'block',
                color: '#a1a1aa',
                fontSize: '0.85rem',
                marginBottom: '0.5rem',
                fontWeight: 500
              }}>Email</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={{
                  position: 'absolute',
                  left: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#a1a1aa',
                  pointerEvents: 'none'
                }} />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem 0.8rem 2.5rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(239, 35, 60, 0.5)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label style={{
                display: 'block',
                color: '#a1a1aa',
                fontSize: '0.85rem',
                marginBottom: '0.5rem',
                fontWeight: 500
              }}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={{
                  position: 'absolute',
                  left: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#a1a1aa',
                  pointerEvents: 'none'
                }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '0.8rem 2.5rem 0.8rem 2.5rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(239, 35, 60, 0.5)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#a1a1aa',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password (Sign Up only) */}
            {!isLogin && (
              <div>
                <label style={{
                  display: 'block',
                  color: '#a1a1aa',
                  fontSize: '0.85rem',
                  marginBottom: '0.5rem',
                  fontWeight: 500
                }}>Confirm Password</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={16} style={{
                    position: 'absolute',
                    left: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#a1a1aa',
                    pointerEvents: 'none'
                  }} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem 0.8rem 2.5rem',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '0.95rem',
                      fontFamily: 'inherit',
                      transition: 'all 0.2s'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(239, 35, 60, 0.5)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div style={{
                background: 'rgba(239, 35, 60, 0.2)',
                border: '1px solid rgba(239, 35, 60, 0.5)',
                color: '#ff6b6b',
                padding: '0.8rem',
                borderRadius: '6px',
                fontSize: '0.85rem'
              }}>
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                padding: '0.9rem',
                background: 'linear-gradient(140deg, #ef233c, #9c0d1f)',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                marginTop: '0.5rem'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle Sign Up / Sign In */}
          <p style={{
            textAlign: 'center',
            color: '#a1a1aa',
            fontSize: '0.9rem',
            margin: '1.5rem 0 0 0'
          }}>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setFormData({ username: '', email: '', password: '', confirmPassword: '' });
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#ef233c',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 'inherit'
              }}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

        {/* Demo Credentials */}
        <div style={{
          marginTop: '2rem',
          textAlign: 'center',
          color: '#7b7b87',
          fontSize: '0.85rem'
        }}>
          <p style={{ margin: 0, marginBottom: '0.5rem' }}>Demo Account:</p>
          <p style={{ margin: 0 }}>Username: anime_fan24 | Password: demo123</p>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
