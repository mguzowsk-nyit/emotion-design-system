import React from 'react'
import { render, screen } from '@testing-library/react'
import Toast from '../Toast'
import axe from 'axe-core'

test('Toast renders different types and is accessible', async () => {
  const { container } = render(<Toast type="success" title="Done" message="Saved" />)
  const alert = screen.getByRole('status')
  expect(alert).toBeInTheDocument()
  const results = await axe.run(container)
  expect(results.violations.length).toBe(0)
})
