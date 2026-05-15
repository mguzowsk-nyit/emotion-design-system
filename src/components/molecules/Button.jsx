import React from 'react'
import styled from '@emotion/styled'

const Spinner = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
  margin-right: 8px;
`;

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const sizes = {
  sm: '6px 10px',
  md: '8px 14px',
  lg: '12px 18px'
}

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: ${p => sizes[p.size || 'md']};
  border-radius: ${p => p.theme.radii.md};
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: ${p => p.size === 'sm' ? '13px' : p.size === 'lg' ? '16px' : '14px'};
  background: ${p => p.variant === 'secondary' ? p.theme.colors.secondaryBg : p.variant === 'destructive' ? `linear-gradient(90deg,${p.theme.colors.destructiveStart},${p.theme.colors.destructiveEnd})` : p.variant === 'ghost' ? 'transparent' : `linear-gradient(90deg,${p.theme.colors.primaryStart},${p.theme.colors.primaryEnd})`};
  color: ${p => p.variant === 'secondary' ? p.theme.colors.textPrimary : p.variant === 'ghost' ? p.theme.colors.textPrimary : p.theme.colors.textOnPrimary};
  opacity: ${p => p.disabled ? 0.5 : 1};
  pointer-events: ${p => p.disabled ? 'none' : 'auto'};
  transition: transform ${p => p.theme.motion.fast} cubic-bezier(.2,.9,.2,1), box-shadow ${p => p.theme.motion.fast} ease, background ${p => p.theme.motion.fast} ease;
  box-shadow: ${p => p.status === 'success' ? p.theme.shadows.success : 'none'};
  ${p => !p.disabled && `&:hover{ transform: translateY(-3px); box-shadow: ${p.theme.shadows.lift}; }`} 
  &:active{ transform: translateY(-1px) scale(.998);} 
  &:focus-visible{ outline: 3px solid rgba(99,102,241,0.18); outline-offset: 2px; }
`;

export default function Button({ children, loading=false, disabled=false, variant='primary', size='md', status='idle', ...rest }){
  const showSuccess = status === 'success'

  return (
    <StyledButton disabled={disabled} aria-busy={loading} variant={variant} size={size} status={status} aria-disabled={disabled} {...rest}>
      {loading && <Spinner aria-hidden />}
      {!loading && showSuccess && <span style={{display:'inline-flex', alignItems:'center', gap:8, color:'#10b981'}}><CheckIcon />{children}</span>}
      {loading && !showSuccess && <span>{children}…</span>}
      {!loading && !showSuccess && children}
    </StyledButton>
  )
}
