import React from 'react'

export function StudioLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img 
        src="/images/logo.png" 
        alt="Jun Light Design" 
        style={{ 
          height: '28px', 
          width: 'auto',
          objectFit: 'contain'
        }}
      />
      
      <span style={{ 
        fontWeight: 700, 
        fontSize: '16px', 
        color: '#2E5C6E',
        fontFamily: '"Noto Serif TC", serif'
      }}>
        Jun Light
      </span>
    </div>
  )
}