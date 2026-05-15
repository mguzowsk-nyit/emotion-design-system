import React from 'react'
import Card from './Card'

export default { title: 'Molecules/Card', component: Card }

export const Default = () => <Card title="Card">This is a card.</Card>
export const Selected = () => <Card title="Selected" selected>This card is selected.</Card>
