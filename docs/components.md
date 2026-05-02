# Component Reference — Emotion Design System

This document contains implementation-accurate API and CSS details for components and tokens present in this repository.

## Design tokens (exact)

Source: `src/styles/variables.css`

- Primary scale: `--color-primary-50` … `--color-primary-900`
- Neutral scale: `--color-neutral-50` … `--color-neutral-900`
- Semantic scales: `--color-success-*`, `--color-warning-*`, `--color-danger-*`
- Aliases used by components:
  - `--color-primary` (alias → `--color-primary-500`)
  - `--color-primary-foreground`
  - `--color-border`
  - `--color-background`
  - `--color-surface`
  - `--color-text-primary`
  - `--color-text-secondary`
  - `--color-shadow`

Dark mode is enabled by setting `data-theme="dark"` on the document root — see `src/styles/variables.css` for the concrete override values.

## Atoms

Files: `src/components/atoms/`

### Alert

- Path: `src/components/atoms/Alert.jsx`
- Export: default functional component
- Props:
  - `message: string` — required (component does not perform runtime validation)
- Implementation notes:
  - Built with `@emotion/styled`.
  - Hard-coded icon `⚠️` is rendered at the start of the container.
  - Key style values: `padding: 12px 16px`, `border-radius: 4px`, `background-color: #fff3cd`, `border: 1px solid #ffeaa7`, `color: #856404`, `font-size: 14px`.

Usage:

```jsx
import Alert from '../src/components/atoms/Alert'

<Alert message="This feature is experimental" />
```

### Footer

- Path: `src/components/atoms/Footer.jsx`
- Export: default functional component
- Props: none
- Implementation notes:
  - Uses `@emotion/styled` for layout elements.
  - Contains static social anchors to GitHub, LinkedIn, Twitter (`target="_blank" rel="noopener noreferrer"`).
  - Visual tokens: `background-color: #f5f5f5`, `border-top: 1px solid #ddd`, text `#666`, font-size `0.875rem`.

Usage:

```jsx
import Footer from '../src/components/atoms/Footer'

<Footer />
```

### Navbar

- Path: `src/components/atoms/Navbar.jsx` (styles in `./Navbar.css`)
- Export: default functional component
- Props: none
- Implementation notes:
  - Renders `<nav class="navbar">` with `.navbar-logo` (contains `/logo.png`) and `.nav-links` list.
  - Styling lives in `src/components/atoms/Navbar.css` (imported by the component).

Usage:

```jsx
import Navbar from '../src/components/atoms/Navbar'
import '../src/components/atoms/Navbar.css'

<Navbar />
```

### DownloadButton

- Path: `src/components/atoms/DownloadButton/DownloadButton.tsx`
- Styles: `src/components/atoms/DownloadButton/DownloadButton.css`
- Export: default `React.FC<DownloadButtonProps>`
- Props (TypeScript):
  - `href?: string` — URL to fetch and download (optional)
  - `filename?: string` — download filename (default `'download'`)
  - `onClick?: () => void` — optional callback executed on click
  - `children?: React.ReactNode` — custom label content
  - `ariaLabel?: string` — accessibility label
  - `disabled?: boolean` — disables interaction (default `false`)
- Behaviour:
  - `handleClick` will: call `onClick` if provided; if `href` is supplied the component `fetch`es it, converts to `Blob`, creates an object URL, programmatically clicks an `<a download>` using `filename`, then revokes the object URL. Errors are caught and logged to console.
- DOM and classes:
  - Root: `<button class="download-button download-button--primary">`
  - Icon span: `.download-button__icon` (aria-hidden)
  - Label span: `.download-button__label`
- Key CSS tokens used (in `DownloadButton.css`):
  - `border-radius: 8px`
  - `border: 1px solid var(--color-border)`
  - `background: var(--color-primary)`
  - `color: var(--color-primary-foreground)`
  - Hover: `background: var(--color-primary-600)`, `box-shadow: 0 6px 18px var(--color-shadow)`
  - Focus: `outline: 3px solid rgba(59,130,246,0.18)`
  - Disabled: `opacity: 0.6; cursor: not-allowed;`

Usage:

```tsx
import DownloadButton from '../src/components/atoms/DownloadButton/DownloadButton'
import '../src/components/atoms/DownloadButton/DownloadButton.css'

<DownloadButton href="/files/sample.pdf" filename="sample.pdf">Download PDF</DownloadButton>
```

## Conventions (implementation-specific)

- Styling: mix of `@emotion/styled` and component-local CSS files. Prefer tokens from `src/styles/variables.css` for colors, shadows, and semantic values.
- Folder pattern: components that need multiple files live in a folder (e.g., `DownloadButton/`). Single-file atoms keep `.jsx` or `.tsx` at `src/components/atoms/` root.

## Commit information

This documentation was added and committed to the repository.

---

Reference the component sources for exact runtime behaviour and to update docs when you change code.
