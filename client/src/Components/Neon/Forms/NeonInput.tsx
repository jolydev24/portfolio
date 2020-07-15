import * as React from "react"
import {Form} from "react-bootstrap"

const styles: object = {
  fontFamily: 'Merienda One, cursive',
  color: '#c6e2ff',
  border: 'none',
  fontSize: '2rem',
  textAlign: 'center',
  lineHeight: '1',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  animation: 'neon .5s ease-in-out infinite alternate'
}

interface INeonInput {
  className?: string
  type: string;
  placeholder: string;
  onClick?: any;
  onChange: any;
  name: string;
}

const NeonInput: React.SFC<INeonInput> = ({
  type,
  placeholder,
  onClick,
  onChange,
  name,
  className
}) => {
  return (
    <Form.Control
      className={className}
      type={type}
      style={styles}
      placeholder={placeholder}
      onClick={onClick}
      onChange={onChange}
      required
      name={name}
    />
  )
}

export default NeonInput