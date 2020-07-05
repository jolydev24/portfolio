import React from 'react'
import "../../App.css"
import Tilt from "react-tilt"
import image from "../Main/Assets/wall.jpg"

export default function Main() {
  const styles = {
    fontSize: '1rem',
    fontFamily: 'Vibur, cursive',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#141414',
    backgroundImage: `url(${image})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  }

  return (
    <div className="neon-container" style={styles}>
      <Tilt className="Tilt" options={{
        perspective: 100000000,
        speed: 9000
      }}>
        <div className="Tilt-inner">
          <div className="sign">
            <span className="sign__word">Hi, i - full-stack</span>
            <span className="sign__word">web-developer.</span>
          </div><br/><br/><br/>
          <a className="link link-transition" href="/p">Portfolio &rarr;</a>
        </div>
      </Tilt>
    </div>
  )
}