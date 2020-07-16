import * as React from 'react'
import {useState} from 'react'
import {Form} from "react-bootstrap"
import NeonContainer from "../Neon/Containers/NeonContainer"
import NeonButton from "../Neon/Buttons/NeonButton"
import NeonInput from "../Neon/Forms/NeonInput"

const Question: React.FC = () => {
  const [contact, setContact] = useState<any>('')
  const [email, setEmail] = useState<any>('')

  const [showEmailInput, setShowEmailInput] = useState<boolean>(false)

  const handleChangeContact = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact({
      contact: event.target.value
    })
  }
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({
      email: event.target.value
    })
  }

  const handleSubmit = () => {
    const requestOptions: object = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        contact, email
      })
    }
    // @ts-ignore
    fetch(process.env.REACT_APP_FECTH_API, requestOptions)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <NeonContainer background="none" transparent>
        <Form.Group>
          <NeonInput
            type="text"
            className="sign__input"
            placeholder="You contact..."
            name="contact"
            onClick={() => setShowEmailInput(true)}
            onChange={handleChangeContact}
          />
          {showEmailInput &&
          <NeonInput
            type="email"
            className="sign__input"
            placeholder="You email..."
            name="email"
            onChange={handleChangeEmail}
          />
          }
          <NeonButton
            text={'           Send'}
          />
        </Form.Group>
      </NeonContainer>
    </Form>
  )
}

export default Question