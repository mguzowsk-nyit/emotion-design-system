import React from 'react'
import TextInput from './TextInput'

export default {
  title: 'Molecules/TextInput',
  component: TextInput,
}

export const Default = () => <TextInput label="Name" placeholder="Enter name" helperText="Full name." />
export const Email = () => <TextInput label="Email" placeholder="name@example.com" type="email" helperText="We won't share this." />
export const Disabled = () => <TextInput label="Disabled" placeholder="Can't edit" disabled helperText="Locked" />
