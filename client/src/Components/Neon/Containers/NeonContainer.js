import React from 'react'
import image from "../../Main/Assets/wall.jpg"

function NeonContainer(props) {
  const styles = {
    fontSize: '1rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#141414',
    backgroundImage: `url(${image})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  }

  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}

export default NeonContainer