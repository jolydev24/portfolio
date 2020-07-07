import React, {Component} from 'react'
import {Form} from "react-bootstrap"
import NeonContainer from "../Neon/Containers/NeonContainer"
import NeonButton from "../Neon/Buttons/NeonButton"
import NeonInput from "../Neon/Forms/NeonInput"

class Question extends Component {
  constructor(props) {
    super(props)

    this.handleSendContact = this.handleSendContact.bind(this)
    this.handleChangeContact = this.handleChangeContact.bind(this)

    this.state = {
      contact: ''
    }
  }

  handleChangeContact(event) {
    this.setState({
      contact: event.target.value
    })
  }

  handleSendContact(event) {
    const xhr = new XMLHttpRequest()

    xhr.open('POST', process.env.REACT_APP_FECTH_API)
    xhr.send(JSON.stringify({contact: this.state.contact}))

    event.preventDefault()
  }

  render() {
    return (
      <Form onSubmit={this.handleSendContact}>
        <NeonContainer>
          <Form.Group>
            <NeonInput
              type="text"
              className="sign__input"
              placeholder="You contact..."
              onChange={this.handleChangeContact}
            />
            <NeonButton
              className="sign__button"
              type="submit"
              text={'           Send'}
            />
          </Form.Group>
        </NeonContainer>
      </Form>
    )
  }
}

export default Question