import * as React from 'react'
import {Button} from "react-bootstrap"

const styles: object = {
  fontFamily: 'Merienda One, cursive',
  border: 'none',
  padding: '0',
  margin: '0',
  fontSize: '2rem',
  lineHeight: '1',
  color: '#c6e2ff',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  textDecoration: 'none',
  animation: 'neon .1s ease-in-out infinite alternate',
  cursor: 'pointer'
}

interface IButtonProps {
  text?: string;
}

const NeonButton: React.FC<IButtonProps> = ({text}) => {
  return (
    <Button style={styles} type="submit">
      {text}
    </Button>
  )
}

export default NeonButton