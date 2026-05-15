import React from 'react'

export default function IconButton({icon: Icon, label = 'Action', onClick, loading = false, disabled = false}){
  const className = `icon-button ${loading? 'icon-button--loading':''} ${disabled? 'icon-button--disabled':''}`
  return (
    <button className={className} onClick={onClick} aria-label={label} disabled={disabled || loading}>
      {loading ? <span className="icon-button__spinner" aria-hidden="true">⏳</span> : Icon ? <Icon className="icon-button__icon" /> : <span className="icon-button__icon">•</span>}
      <span className="icon-button__label">{label}</span>
    </button>
  )
}

/*
States: default, loading, disabled
BEM: block `icon-button`, elements `icon-button__icon`, `icon-button__label`, modifiers `icon-button--loading`, `icon-button--disabled`
*/
