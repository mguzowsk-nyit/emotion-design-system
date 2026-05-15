import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../src/theme'
import '../src/index.css'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 24, background: '#f8fafc', minHeight: '100vh' }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
]
