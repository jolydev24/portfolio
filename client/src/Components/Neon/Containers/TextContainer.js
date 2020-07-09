import React from 'react'

const styles = {
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const TextContainer = props => {
  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}

export default TextContainer