import React, {Component} from 'react'
import {Form, Button} from "react-bootstrap"

class Question extends Component {
  constructor(props) {
    super(props)

    this.handleSendContact = this.handleSendContact.bind(this)
    this.handleChangeContact = this.handleChangeContact.bind(this)

    this.state = {
      contact: ''
    }
    console.log(process.env.REACT_APP_FECTH_API)
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
        <div className="sign">
          <Form.Group>
            <Form.Control
              type="text"
              className="sign__input"
              placeholder="You contact..."
              onChange={this.handleChangeContact}
            />
            <Button
              style={{
                cursor: 'pointer'
              }}
              className="sign__button"
              type="submit"
            >
              {'    '}Send
            </Button>
          </Form.Group>
        </div>
      </Form>
    )
  }
}

export default Question