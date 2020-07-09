import React from 'react'

const NeonText = props => {
  const styles = {
    fontSize: '2rem',
    textAlign: 'center',
    lineHeight: '1',
    color: '#c6e2ff',
    animation: 'neon .2s ease-in-out infinite alternate'
  }

  return (
    <div style={styles} className="sign__word" onClick={props.onClick}>
      {props.neonText}
    </div>
  )
}

export default NeonText