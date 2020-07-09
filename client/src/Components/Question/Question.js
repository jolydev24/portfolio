import React, {useState} from 'react'
import {Form} from "react-bootstrap"
import NeonContainer from "../Neon/Containers/NeonContainer"
import NeonButton from "../Neon/Buttons/NeonButton"
import NeonInput from "../Neon/Forms/NeonInput"

export default function Question() {
  const [question, setQuestion] = useState('')
  const [showEmailInput, setShowEmailInput] = useState(false)

  const handleChangeQuestion = (event) => {
    const {name, value} = event.target
    setQuestion({
      ...question,
      [name]: value
    })
  }

  const handleSendContact = (event) => {
    console.log(question)
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({question})
    }
    fetch(process.env.REACT_APP_FECTH_API, requestOptions)

    event.preventDefault()
  }

  return (
    <Form onSubmit={handleSendContact}>
      <NeonContainer background="none" transparent>
        <Form.Group>
          <NeonInput
            type="text"
            className="sign__input"
            placeholder="You contact..."
            name="contact"
            onClick={() => setShowEmailInput(true)}
            onChange={handleChangeQuestion}
          />
          {showEmailInput &&
            <NeonInput
              type="email"
              className="sign__input"
              placeholder="You email..."
              name="email"
              onChange={handleChangeQuestion}
            />
          }
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