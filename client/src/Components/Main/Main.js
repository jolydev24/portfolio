import React, {Component} from 'react'
import "../../App.css"
import Tilt from "react-tilt"
import image from "../Main/Assets/wall.jpg"
import Question from "../Question/Question"
import {Container} from "react-bootstrap";

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

  styles = {
    fontSize: '1rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#141414',
    backgroundImage: `url(${image})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  }

  render() {
    return (
      <Container>
        <div className="neon-container" style={this.styles}>
          <Tilt className="Tilt" options={{
            speed: 90000
          }}>
            {this.state.textEdited ? (
              <Question/>
            ) : (
              <>
                <div className="sign">
                  <div
                    className="sign__word"
                    style={{cursor: 'pointer'}}
                    onClick={this.textEdit.bind(this)}
                  >Hi, i'm -
                    full-stack<br/>web-developer.
                  </div>
                </div>
                <br/><br/><br/>
                <a className="link link-transition" href="/p">Portfolio &rarr;</a>
              </>
            )}
          </Tilt>
        </div>
      </Container>
    )
  }
}