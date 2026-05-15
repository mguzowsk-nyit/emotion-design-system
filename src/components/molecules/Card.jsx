import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  padding: 16px; border-radius:${p => p.theme.radii.lg}; background:${p => p.theme.colors.surface}; border:1px solid rgba(0,0,0,0.06); transition: transform ${p => p.theme.motion.fast} ease, box-shadow ${p => p.theme.motion.fast} ease, border-color ${p => p.theme.motion.fast} ease; cursor:pointer;
  &:hover { transform: translateY(-6px); box-shadow: ${p => p.theme.shadows.lift}; }
  ${p => p.selected ? `border-color: ${p.theme.colors.primaryEnd}; box-shadow: 0 12px 30px rgba(124,58,237,0.08);` : ''}
`;
const Title = styled.h3`margin:0 0 8px 0; font-size:16px;`;
const Body = styled.p`margin:0; color:#374151; font-size:14px;`;

export default function Card({ title, children, selected=false }){
  return (
    <Container selected={selected} role="article" aria-pressed={selected}>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Container>
  )
}
