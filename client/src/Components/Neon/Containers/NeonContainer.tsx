import * as React from 'react'

interface INeonContainer {
  transparent: boolean;
  background: string;
  children: object;
}


const NeonContainer: React.SFC<INeonContainer> = ({transparent, background, children}) => {
  const styles: object = {
    fontSize: '1rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: transparent ? 'rgba(0, 0, 0, 0)' : '#141414',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: background,
  }

  return (
    <div style={styles}>
      {children}
    </div>
  )
}

export default NeonContainer