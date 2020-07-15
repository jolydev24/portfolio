import React, {useState} from 'react'
import "../../App.css"
import * as Tilt from "react-tilt"
import Question from "../Question/Question"
import {Col, Container, Row} from "react-bootstrap"
import NeonContainer from "../Neon/Containers/NeonContainer"
import TextContainer from "../Neon/Containers/TextContainer"
import NeonText from "../Neon/NeonText"
import NeonLink from "../Neon/NeonLink"
import image from "./Assets/wall.jpg"

const Main: React.FunctionComponent = () => {
  const [textEdited, setEditedText]: Array<any> = useState(false)
  return (
    <Container>
      <NeonContainer transparent={false} background={`url(${image})`}>
        <TextContainer>
          {textEdited ? (
            <Question/>
          ) : (
            <div className="mainTextWrapper">
              <Row>
                <Col sm={12}>
                  <NeonText
                    neonText="Hi, i'm - full-stack web-developer."
                    style={{cursor: 'pointer'}}
                    onClick={() => setEditedText(!textEdited)}
                  /><br/><br/>
                </Col>
                <Col sm={12}>
                  <NeonLink
                    href="/p"
                    neonText="Portfolio &rarr;"
                  />
                </Col>
              </Row>
            </div>
          )}
        </TextContainer>
      </NeonContainer>
    </Container>
  )
}

export default Main