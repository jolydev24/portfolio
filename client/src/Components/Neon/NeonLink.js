import React from "react"

function NeonLink(props) {
  return (
    <a href={props.href} className="link  link-transition">
      {props.neonText}
    </a>
  )
}

export default NeonLink