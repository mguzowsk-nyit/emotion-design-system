Color Tokens

Location: `src/styles/variables.css`

Purpose:
- Single source of truth for color variables used across the app.
- Expose semantic tokens (primary, neutral, success, warning, danger) and scale steps (50-900).

Usage:
- Import the variables globally (already added to `src/index.css`).
- Use tokens in styles: `color: var(--color-text-primary);` or `background: var(--color-primary);`.
- For dark mode, set `data-theme="dark"` on the `<html>` or `<body>` element to activate overrides.

Guidelines (from design lead):
- Do not hardcode hex values in components; use the tokens instead.
- If a needed token is missing, add it to this file and update the README.
