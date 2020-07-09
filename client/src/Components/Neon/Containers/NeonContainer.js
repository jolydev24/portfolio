import React from 'react'
<<<<<<< HEAD
import image from "../../Main/Assets/wall.jpg"
=======
>>>>>>> 1a71b2964eedfd92750d00e5d096938e5c32542f

function NeonContainer(props) {
  const styles = {
    fontSize: '1rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
<<<<<<< HEAD
    backgroundColor: '#141414',
    backgroundImage: `url(${image})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
=======
    backgroundColor: props.transparent ? 'rgba(0, 0, 0, 0)' : '#141414',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: props.background,
>>>>>>> 1a71b2964eedfd92750d00e5d096938e5c32542f
  }

  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}

export default NeonContainer