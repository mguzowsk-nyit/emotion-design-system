import React from 'react'
import { render, screen } from '@testing-library/react'
import IconButton from '../IconButton'
import axe from 'axe-core'

test('IconButton renders and allows loading/disabled states', async () => {
  const { container } = render(<IconButton label="Action" />)
  const btn = screen.getByRole('button')
  expect(btn).toBeInTheDocument()
  const results = await axe.run(container)
  expect(results.violations.length).toBe(0)
})
