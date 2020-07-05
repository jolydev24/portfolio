import React from 'react'
import "../../App.css"
import Tilt from "react-tilt"
import image from "../Main/Assets/wall.jpg"

export default function Main() {
  const styles = {
    fontSize: '1rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#141414',
    backgroundImage: `url(${image})`,
    fontFamily: 'Exo 2, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  }

  return (
    <div className="neon-container" style={styles}>
      <Tilt className="Tilt" options={{
        perspective: 1000,
        speed: 300
      }}>
        <div className="Tilt-inner">
          <h1 className="neon" spellCheck="false">jolydev - <br/>
            full-stack<br/>
            developer.<br/>
          </h1>
        </div>
      </Tilt>

    </div>
  )
}