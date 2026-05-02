# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Technical Design — Implementation Reference

  Concise, implementation-only reference for this workspace. Contains the exact tokens, components, props, CSS classes, and developer scripts present in the repository.

  Repository layout (relevant paths)
  - `src/styles/variables.css` — canonical CSS tokens (primary, neutral, semantic scales) and dark-mode overrides.
  - `src/components/atoms/` — implemented atoms: `Alert.jsx`, `Footer.jsx`, `Navbar.jsx`, `DownloadButton/` (TSX + CSS).
  - `src/components/molecules/README.md` — molecule-level guidance (see file).
  - `src/components/organisms/README.md` — organism-level guidance (see file).

  Developer scripts (defined in `package.json`)
  - `npm run dev` — Vite dev server
  - `npm run build` — `tsc -b` then `vite build` (outputs `dist/`)
  - `npm run lint` — ESLint
  - `npm run predeploy` — runs `build`
  - `npm run deploy` — `gh-pages -d dist`

  Design tokens (exact, see file)
  - Primary scale: `--color-primary-50` … `--color-primary-900`
  - Neutral scale: `--color-neutral-50` … `--color-neutral-900`
  - Semantic scales: `--color-success-*`, `--color-warning-*`, `--color-danger-*`
  - Aliases: `--color-primary` -> `--color-primary-500`, `--color-primary-foreground`, `--color-border`, `--color-background`, `--color-surface`, `--color-text-primary`, `--color-text-secondary`, `--color-shadow`.
  - Dark mode: set `data-theme="dark"` on the document root to apply overrides.

  Reference: [src/styles/variables.css](src/styles/variables.css#L1-L200)

  Atomic components (exact implementations)

  - `src/components/atoms/Alert.jsx`
    - Exports default `Alert({ message })` using `@emotion/styled`.
    - Props: `message: string`.
    - Styles: `padding: 12px 16px`, `border-radius: 4px`, `background-color: #fff3cd`, `border: 1px solid #ffeaa7`, `color: #856404`, `font-size: 14px`, left `⚠️` icon in markup.

  - `src/components/atoms/Footer.jsx`
    - Exports default `Footer()` using `@emotion/styled` for layout elements.
    - Props: none.
    - Markup: copyright text and `SocialLink` anchors to GitHub, LinkedIn, Twitter.
    - Styles: `background-color: #f5f5f5`, `border-top: 1px solid #ddd`, `font-size: 0.875rem`, color `#666`.

  - `src/components/atoms/Navbar.jsx`
    - Exports default `Navbar()`; uses `./Navbar.css` for styles.
    - Markup: `.navbar`, `.navbar-logo` (contains `/logo.png`), `.nav-links` list with anchor items.
    - Props: none.

  - `src/components/atoms/DownloadButton/DownloadButton.tsx` + `DownloadButton.css`
    - Props (TypeScript):
      - `href?: string`
      - `filename?: string` (default `'download'`)
      - `onClick?: () => void`
      - `children?: React.ReactNode`
      - `ariaLabel?: string`
      - `disabled?: boolean` (default `false`)
    - Behaviour: `handleClick` fetches `href` (if provided), converts to `Blob`, creates object URL, programmatically clicks an `<a download>` with `filename`, and revokes the URL. Errors are caught and logged.
    - DOM/classes: root `<button class="download-button download-button--primary">`; internal spans: `download-button__icon`, `download-button__label`.
    - Key CSS from `DownloadButton.css`: `border-radius: 8px`, `border: 1px solid var(--color-border)`, `background: var(--color-primary)`, `color: var(--color-primary-foreground)`, hover uses `var(--color-primary-600)` and `box-shadow: 0 6px 18px var(--color-shadow)`, focus outline `3px solid rgba(59,130,246,0.18)`.

  Usage snippets (exact imports)

  Download button example:

  ```tsx
  import DownloadButton from './src/components/atoms/DownloadButton/DownloadButton'
  import './src/components/atoms/DownloadButton/DownloadButton.css'

  <DownloadButton href="/files/sample.pdf" filename="sample.pdf">Download PDF</DownloadButton>
  ```

  Alert example:

  ```jsx
  import Alert from './src/components/atoms/Alert'

  <Alert message="This feature is experimental" />
  ```

  Navbar example:

  ```jsx
  import Navbar from './src/components/atoms/Navbar'
  import './src/components/atoms/Navbar.css'

  <Navbar />
  ```

  Conventions (implementation-specific)
  - Styling mix: `@emotion/styled` for some components (`Alert`, `Footer`), plain CSS files for others (`Navbar.css`, `DownloadButton.css`).
  - Tokens: components reference `var(--...)` aliases from `src/styles/variables.css` — edit tokens there to change global appearance.
  - Folder pattern: atoms in `src/components/atoms/`; when multiple files are needed create a component folder (e.g., `DownloadButton/`).

  Where to edit
  - Tokens: `src/styles/variables.css`.
  - Component logic/styles: respective files under `src/components/atoms/`, `src/components/molecules/`, `src/components/organisms/`.

  This file contains only the technical, implementation-specific information present in the repository. For any additional documentation format (prop tables, Storybook, generated API docs) indicate preferred output and I will generate it.
