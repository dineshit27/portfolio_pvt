import React from 'react';

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('🔴 App crashed:', error);
    console.error('Component stack:', info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', minHeight: '100vh', padding: '2rem',
          fontFamily: 'monospace', background: '#0f0f0f', color: '#ff4444'
        }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>⚠️ Runtime Error</h1>
          <pre style={{
            background: '#1a1a1a', padding: '1rem', borderRadius: '8px',
            maxWidth: '80vw', overflowX: 'auto', color: '#ff8888', fontSize: '0.85rem'
          }}>
            {this.state.error?.message}
            {'\n\n'}
            {this.state.error?.stack}
          </pre>
          <p style={{ marginTop: '1rem', color: '#888', fontSize: '0.8rem' }}>
            Check the browser console for more details
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
