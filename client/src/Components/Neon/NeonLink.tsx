import React from "react"

interface INeonLink {
  href: string;
  neonText: string;
  style?: {}
}

const NeonLink: React.FC<INeonLink> = ({href, neonText, style}) => {
  return (
    <a href={href} style={style} className="link  link-transition">
      {neonText}
    </a>
  )
}

export default NeonLink