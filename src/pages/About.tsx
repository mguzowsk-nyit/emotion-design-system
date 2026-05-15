export default function About() {
  return (
    <section style={{ padding: '60px 40px', maxWidth: 700, margin: '0 auto' }}>
      <h1 style={{ marginBottom: 16 }}>About</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: 24 }}>
        Emotion Design System is a demo showcasing UI primitives built with React, TypeScript,
        and Emotion CSS-in-JS.
      </p>
      <h2 style={{ marginBottom: 12 }}>Stack</h2>
      <ul style={{ color: 'var(--color-text-secondary)', lineHeight: 2 }}>
        <li>React 19</li>
        <li>TypeScript</li>
        <li>Emotion (CSS-in-JS)</li>
        <li>React Router v7</li>
        <li>Vite</li>
        <li>Vitest + Testing Library</li>
      </ul>
      <h2 style={{ marginTop: 32, marginBottom: 12 }}>Goals</h2>
      <p style={{ color: 'var(--color-text-secondary)' }}>
        Demonstrate themeable, accessible components with a consistent token system — color,
        spacing, radii, and motion — as a foundation for a production design system.
      </p>
    </section>
  )
}
