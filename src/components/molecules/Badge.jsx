import React from 'react'
import styled from '@emotion/styled'

const Root = styled.span`
  display:inline-block; padding:4px 8px; border-radius:999px; font-weight:700; font-size:12px;
  background:${p => p.variant==='success' ? p.theme.colors.success : p.variant==='warning' ? p.theme.colors.warning || '#f59e0b' : '#e5e7eb'};
  color:${p => p.variant==='default' ? p.theme.colors.textPrimary : '#fff'};
`;

export default function Badge({ children, variant='default' }){
  return <Root variant={variant}>{children}</Root>
}
