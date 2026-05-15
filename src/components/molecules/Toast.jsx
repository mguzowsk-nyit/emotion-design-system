import React from 'react'

export default function Toast({type = 'info', title, message, onClose}){
  const className = `toast toast--${type}`
  return (
    <div className={className} role="status" aria-live="polite">
      <div className="toast__header">
        <strong className="toast__title">{title || type}</strong>
        <button className="toast__close" onClick={onClose} aria-label="Close">✕</button>
      </div>
      {message && <div className="toast__body">{message}</div>}
    </div>
  )
}

/*
States: info, success, error (type prop)
BEM: block `toast`, elements `toast__header`, `toast__title`, `toast__body`, modifier `toast--success`
*/
