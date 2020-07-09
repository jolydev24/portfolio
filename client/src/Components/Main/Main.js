import React, {Component} from 'react'
import "../../App.css"
import Tilt from "react-tilt"
import Question from "../Question/Question"
import {Container} from "react-bootstrap"
import NeonContainer from "../Neon/Containers/NeonContainer"
import TextContainer from "../Neon/Containers/TextContainer"
import NeonText from "../Neon/NeonText"
import NeonLink from "../Neon/NeonLink"
import image from "./Assets/wall.jpg"

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      textEdited: false
    }
  }

  textEdit() {
    this.setState({
      textEdited: true
    })
  }

  render() {
    return (
      <Container>
        <NeonContainer background={`url(${image})`}>
          <TextContainer>
            <Tilt className="Tilt" options={{speed: 90000}}>
              {this.state.textEdited ? (
                <Question/>
              ) : (
                <>
                  <NeonText
                    neonText="Hi, i'm - full-stack web-developer."
                    style={{cursor: 'pointer'}}
                    onClick={this.textEdit.bind(this)}
                  />
                  <br/><br/><br/>
                  <NeonLink
                    href="/p"
                    neonText="Portfolio &rarr;"
                  />
                </>
              )}
            </Tilt>
          </TextContainer>
        </NeonContainer>
      </Container>
    )
  }
}