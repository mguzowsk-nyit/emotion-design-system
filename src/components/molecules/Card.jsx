import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  border-radius:${p => p.theme.radii.lg}; background:${p => p.theme.colors.surface}; border:1px solid rgba(0,0,0,0.06); transition: transform ${p => p.theme.motion.fast} ease, box-shadow ${p => p.theme.motion.fast} ease, border-color ${p => p.theme.motion.fast} ease; cursor:pointer; overflow:hidden;
  &:hover { transform: translateY(-6px); box-shadow: ${p => p.theme.shadows.lift}; }
  ${p => p.selected ? `border-color: ${p.theme.colors.primaryEnd}; box-shadow: 0 12px 30px rgba(124,58,237,0.08);` : ''}
`;
const CardImage = styled.img`display:block; width:100%; height:160px; object-fit:cover;`;
const Content = styled.div`padding:16px;`;
const Title = styled.h3`margin:0 0 8px 0; font-size:16px;`;
const Body = styled.p`margin:0; color:#374151; font-size:14px;`;

export default function Card({ title, children, selected=false, image, imageAlt='' }){
  return (
    <Container selected={selected} role="article" aria-pressed={selected}>
      {image && <CardImage src={`${image}?w=400&q=80`} alt={imageAlt} />}
      <Content>
        <Title>{title}</Title>
        <Body>{children}</Body>
      </Content>
    </Container>
  )
}
