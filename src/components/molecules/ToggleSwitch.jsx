import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  display:inline-flex; align-items:center; gap:10px; cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'}; position:relative;
`;
const Track = styled.span`
  width:46px; height:26px; background:${p => p.checked ? p.theme.colors.primaryEnd : '#e5e7eb'}; border-radius:30px; position:relative; transition:background ${p => p.theme.motion.fast} ease;
`;
const Thumb = styled.span`
  position:absolute; top:3px; left:3px; width:20px; height:20px; border-radius:50%; background:${p => p.theme.colors.surface}; transform: ${p => p.checked ? 'translateX(20px)' : 'none'}; transition: transform ${p => p.theme.motion.fast} ease; box-shadow:0 2px 6px rgba(15,23,42,0.12);
`;
const HiddenCheckbox = styled.input`
  position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0 0 0 0); border:0;
`;

export default function ToggleSwitch({ checked=false, onChange=()=>{}, disabled=false }){
  return (
    <Label disabled={disabled} role="switch" aria-checked={checked} aria-disabled={disabled}>
      <Track checked={checked}>
        <Thumb checked={checked} />
      </Track>
      <HiddenCheckbox type="checkbox" checked={checked} onChange={e=>onChange(e.target.checked)} disabled={disabled} />
    </Label>
  )
}
