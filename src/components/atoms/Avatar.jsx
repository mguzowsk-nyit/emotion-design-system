import React from 'react'

export default function Avatar({src, alt = 'Avatar', size = 40, status}){
  const sizeStyle = {width: size, height: size}
  const statusClass = status ? `avatar__status--${status}` : ''
  return (
    <div className={`avatar ${statusClass}`} style={sizeStyle} role="img" aria-label={alt}>
      {src ? <img className="avatar__image" src={src} alt={alt} /> : <div className="avatar__initials">{(alt||'U').slice(0,2).toUpperCase()}</div>}
    </div>
  )
}

/*
States: default (no status), online (status='online'), offline (status='offline')
BEM: block `avatar`, element `avatar__image`, modifier `avatar__status--online` etc.
*/
