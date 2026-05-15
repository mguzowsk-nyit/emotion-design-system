import React from 'react'
import ToggleSwitch from './ToggleSwitch'

export default { title: 'Molecules/ToggleSwitch', component: ToggleSwitch }

export const On = () => <ToggleSwitch checked onChange={()=>{}} />
export const Off = () => <ToggleSwitch checked={false} onChange={()=>{}} />
export const Disabled = () => <ToggleSwitch checked disabled />
