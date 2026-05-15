export default function Docs() {
  return (
    <section style={{ padding: '60px 40px', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ marginBottom: 8 }}>Documentation</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: 40 }}>
        How to install, configure, and use the Emotion Design System in your project.
      </p>

      <h2 style={{ marginBottom: 12 }}>Installation</h2>
      <pre style={codeBlock}>
        {`npm install @emotion/react @emotion/styled react-router-dom`}
      </pre>

      <h2 style={{ marginTop: 36, marginBottom: 12 }}>Setup</h2>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: 12 }}>
        Wrap your app with <code>BrowserRouter</code> and <code>ThemeProvider</code>:
      </p>
      <pre style={codeBlock}>
        {`import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)`}
      </pre>

      <h2 style={{ marginTop: 36, marginBottom: 12 }}>Using Components</h2>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: 12 }}>
        Import any component directly:
      </p>
      <pre style={codeBlock}>
        {`import Button from './components/molecules/Button'
import Badge from './components/molecules/Badge'

<Button variant="primary">Click me</Button>
<Badge variant="success">Active</Badge>`}
      </pre>

      <h2 style={{ marginTop: 36, marginBottom: 12 }}>Theming</h2>
      <p style={{ color: 'var(--color-text-secondary)' }}>
        All values — colors, spacing, radii, motion — live in <code>src/theme.js</code> and
        CSS custom properties in <code>src/styles/variables.css</code>. Edit those files to
        restyle the entire system at once.
      </p>
    </section>
  )
}

const codeBlock: React.CSSProperties = {
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: 8,
  padding: '16px 20px',
  fontSize: '0.85rem',
  overflowX: 'auto',
  lineHeight: 1.6,
}
