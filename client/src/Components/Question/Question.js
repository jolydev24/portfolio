import React, {useState} from 'react'
import {Form} from "react-bootstrap"
import NeonContainer from "../Neon/Containers/NeonContainer"
import NeonButton from "../Neon/Buttons/NeonButton"
import NeonInput from "../Neon/Forms/NeonInput"

export default function Question() {
  const [contact, setContact] = useState('')

  const handleChangeContact = (event) => {
    setContact({
      contact: event.target.value
    })
  }

  const handleSendContact = (event) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({contact})
    };
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
            onChange={handleChangeContact}
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