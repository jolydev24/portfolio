import React from 'react'

interface INeonText {
  onClick?: any;
  neonText: string;
  style?: object;
}

const styles: object = {
  fontSize: '2rem',
  textAlign: 'center',
  lineHeight: '1',
  color: '#c6e2ff',
  animation: 'neon .2s ease-in-out infinite alternate'
}

const NeonText: React.FC<INeonText> = ({onClick, neonText}) => {
  return (
    <div style={styles} className="sign__word" onClick={onClick}>
      {neonText}
    </div>
  )
}

export default NeonText