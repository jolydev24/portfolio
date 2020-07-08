import React from "react"
import {Form} from "react-bootstrap"

const styles = {
  fontFamily: 'Merienda One, cursive',
  color: '#c6e2ff',
  border: 'none',
  fontSize: '2rem',
  textAlign: 'center',
  lineHeight: '1',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  animation: 'neon .5s ease-in-out infinite alternate'
}

function NeonInput(props) {
  return (
    <Form.Control
      type={props.type}
      style={styles}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}

export default NeonInput