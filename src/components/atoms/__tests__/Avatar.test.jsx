import React from 'react'
import { render, screen } from '@testing-library/react'
import Avatar from '../Avatar'
import axe from 'axe-core'

test('Avatar renders and is accessible', async () => {
  const { container } = render(<Avatar alt="User" />)
  const img = screen.getByRole('img')
  expect(img).toBeInTheDocument()
  const results = await axe.run(container)
  expect(results.violations.length).toBe(0)
})
