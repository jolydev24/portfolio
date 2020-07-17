import * as React from 'react'

const styles: {} = {
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

interface ITextContainer {
  children: {}
}

const TextContainer: React.FC<ITextContainer> = ({children}) => {
  return (
    <div style={styles}>
      {children}
    </div>
  )
}

export default TextContainer