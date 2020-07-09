import React, {useState} from 'react'
import "../../App.css"
import Tilt from "react-tilt"
import Question from "../Question/Question"
import {Container} from "react-bootstrap"
import NeonContainer from "../Neon/Containers/NeonContainer"
import TextContainer from "../Neon/Containers/TextContainer"
import NeonText from "../Neon/NeonText"
import NeonLink from "../Neon/NeonLink"
import image from "./Assets/wall.jpg"

export default function Main() {
  const [textEdited, setEditedText] = useState(false)
  return (
    <Container>
      <NeonContainer background={`url(${image})`}>
        <TextContainer>
          {textEdited ? (
            <Question/>
            ) : (
            <Tilt className="Tilt" options={{speed: 90000}}>
              <NeonText
                neonText="Hi, i'm - full-stack web-developer."
                style={{cursor: 'pointer'}}
                onClick={() => setEditedText(!textEdited)}
              />
              <br/><br/><br/>
              <NeonLink
                href="/p"
                neonText="Portfolio &rarr;"
              />
            </Tilt>
          )}
        </TextContainer>
      </NeonContainer>
    </Container>
  )
}