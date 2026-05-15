import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section style={{ padding: '60px 40px', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 16 }}>Emotion Design System</h1>
      <p style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', marginBottom: 40 }}>
        A collection of accessible, themeable UI primitives built with Emotion CSS-in-JS.
      </p>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Link to="/components" style={cardLink}>
          <h2>Components</h2>
          <p>Buttons, inputs, cards, badges, and more.</p>
        </Link>
        <Link to="/tokens" style={cardLink}>
          <h2>Tokens</h2>
          <p>Colors, spacing, radii, and motion values.</p>
        </Link>
        <Link to="/about" style={cardLink}>
          <h2>About</h2>
          <p>Goals, stack, and contribution info.</p>
        </Link>
      </div>
    </section>
  )
}

const cardLink: React.CSSProperties = {
  display: 'block',
  padding: '24px 28px',
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: 12,
  textDecoration: 'none',
  color: 'var(--color-text-primary)',
  flex: '1 1 200px',
}
