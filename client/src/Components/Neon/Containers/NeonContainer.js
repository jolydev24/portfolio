import React from 'react'

const NeonContainer = props => {
  const styles = {
    fontSize: '1rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: props.transparent ? 'rgba(0, 0, 0, 0)' : '#141414',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: props.background,
  }

  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}

export default NeonContainer