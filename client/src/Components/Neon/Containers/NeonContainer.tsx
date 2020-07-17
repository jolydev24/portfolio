import * as React from 'react'

interface INeonContainer {
  transparent: boolean;
  background: string;
  children: {};
}


const NeonContainer: React.FC<INeonContainer> = ({transparent, background, children}) => {
  const styles: {} = {
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