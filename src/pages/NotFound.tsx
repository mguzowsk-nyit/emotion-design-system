import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section style={{ padding: '80px 40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', margin: 0 }}>404</h1>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem', margin: '16px 0 32px' }}>
        That page doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          padding: '10px 24px',
          background: 'var(--color-primary)',
          color: '#fff',
          borderRadius: 8,
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        Back to Home
      </Link>
    </section>
  )
}
