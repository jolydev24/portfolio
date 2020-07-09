import React from "react"

const NeonLink = props => {
  return (
    <a href={props.href} className="link  link-transition">
      {props.neonText}
    </a>
  )
}

export default NeonLink