import React, { useState, useId } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

const Field = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const Input = styled.input`
  padding: 14px 12px 10px 12px;
  border-radius: ${p => p.theme.radii.sm};
  border: 1px solid ${p => p.error ? p.theme.colors.inputError : p.theme.colors.inputBorder};
  outline: none;
  width: 100%;
  transition: box-shadow ${p => p.theme.motion.fast} ease, border-color ${p => p.theme.motion.fast} ease;
  &:focus { box-shadow: 0 6px 18px rgba(6,182,212,0.12); border-color: ${p => p.theme.colors.primaryStart}; }
  background: ${p => p.disabled ? '#f3f4f6' : p.theme.colors.surface};
  padding-right: 40px;
`;

const FloatingLabel = styled.label`
  position: absolute;
  left: 12px;
  top: ${p => p.floated ? '6px' : '14px'};
  font-size: ${p => p.floated ? '12px' : '14px'};
  color: ${p => p.floated ? p.theme.colors.muted : '#6b7280'};
  pointer-events: none;
  transition: all ${p => p.theme.motion.fast} ease;
  background: transparent;
  padding: 0 4px;
`;

const IconWrap = styled.span`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`;

const CheckIcon = ({color}) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M20 6L9 17l-5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ErrorIcon = ({color}) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 9v4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 17h.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.29 3.86L1.82 18.14a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function validateEmail(value){
  return /^\S+@\S+\.\S+$/.test(value)
}

export default function TextInput({ label, placeholder, helperText='', error=false, disabled=false, type='text' }){
  const id = useId()
  const [value, setValue] = useState('')
  const [touched, setTouched] = useState(false)
  const [focused, setFocused] = useState(false)
  const theme = useTheme()

  const emailInvalid = type === 'email' && touched && value && !validateEmail(value)
  const showError = error || emailInvalid
  const valid = touched && value && !showError
  const helperId = helperText ? `${id}-help` : undefined
  const floated = focused || value.length > 0

  return (
    <div style={{marginBottom:12}}>
      <Field>
        {label && <FloatingLabel htmlFor={id} floated={floated}>{label}</FloatingLabel>}
        <Input
          id={id}
          placeholder={floated ? placeholder : ''}
          error={showError}
          disabled={disabled}
          value={value}
          onChange={e=>setValue(e.target.value)}
          onBlur={()=>{ setTouched(true); setFocused(false) }}
          onFocus={()=>setFocused(true)}
          type={type}
          aria-describedby={helperId}
          aria-invalid={showError}
        />
        <IconWrap aria-hidden>
          {showError && <ErrorIcon color={theme.colors.inputError} />}
          {!showError && valid && <CheckIcon color={theme.colors.success} />}
        </IconWrap>
      </Field>
      {helperText && <div id={helperId} style={{color: showError ? theme.colors.inputError : theme.colors.muted, fontSize:12, marginTop:6}}>{helperText}</div>}
      {showError && <div style={{color: theme.colors.inputError, fontSize:12, marginTop:6}}>{type==='email' ? 'Please enter a valid email address' : 'There is an error'}</div>}
    </div>
  )
}
