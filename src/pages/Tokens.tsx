import theme from '../theme'

const colors = [
  { name: 'primaryStart', value: theme.colors.primaryStart },
  { name: 'primaryEnd', value: theme.colors.primaryEnd },
  { name: 'secondaryBg', value: theme.colors.secondaryBg },
  { name: 'destructiveStart', value: theme.colors.destructiveStart },
  { name: 'destructiveEnd', value: theme.colors.destructiveEnd },
  { name: 'success', value: theme.colors.success },
  { name: 'focus', value: theme.colors.focus },
  { name: 'muted', value: theme.colors.muted },
  { name: 'textPrimary', value: theme.colors.textPrimary },
  { name: 'surface', value: theme.colors.surface },
]

export default function Tokens() {
  return (
    <section style={{ padding: '60px 40px', maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ marginBottom: 8 }}>Design Tokens</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: 40 }}>
        Single source of truth for colors, spacing, radii, shadows, and motion.
      </p>

      <h2 style={{ marginBottom: 16 }}>Colors</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12, marginBottom: 48 }}>
        {colors.map(({ name, value }) => (
          <div key={name} style={{ border: '1px solid var(--color-border)', borderRadius: 10, overflow: 'hidden' }}>
            <div style={{ background: value, height: 64 }} />
            <div style={{ padding: '8px 12px' }}>
              <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{name}</div>
              <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.75rem' }}>{value}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginBottom: 16 }}>Spacing</h2>
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', marginBottom: 48 }}>
        {Object.entries(theme.spacing).map(([key, val]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <div style={{ background: 'var(--color-primary)', width: val, height: val, borderRadius: 4, margin: '0 auto 8px' }} />
            <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>{key}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{val}</div>
          </div>
        ))}
      </div>

      <h2 style={{ marginBottom: 16 }}>Border Radius</h2>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 48 }}>
        {Object.entries(theme.radii).map(([key, val]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <div style={{ background: 'var(--color-primary)', width: 64, height: 64, borderRadius: val, margin: '0 auto 8px' }} />
            <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>{key}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{val}</div>
          </div>
        ))}
      </div>

      <h2 style={{ marginBottom: 16 }}>Motion</h2>
      <div style={{ display: 'flex', gap: 24 }}>
        {Object.entries(theme.motion).map(([key, val]) => (
          <div key={key} style={{ padding: '12px 20px', border: '1px solid var(--color-border)', borderRadius: 8 }}>
            <div style={{ fontWeight: 600 }}>{key}</div>
            <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>{val}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
