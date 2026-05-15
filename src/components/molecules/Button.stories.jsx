import React from 'react'
import Button from './Button'

export default {
  title: 'Molecules/Button',
  component: Button,
}

export const Primary = () => <Button>Primary</Button>
export const Loading = () => <Button loading>Saving</Button>
export const Success = () => <Button status="success">Saved</Button>
export const Variants = () => (
  <div style={{display:'flex', gap:12}}>
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Delete</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
)
