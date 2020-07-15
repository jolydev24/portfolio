import * as React from 'react'
import {useState} from 'react'
import {Form} from "react-bootstrap"
import NeonContainer from "../Neon/Containers/NeonContainer"
import NeonButton from "../Neon/Buttons/NeonButton"
import NeonInput from "../Neon/Forms/NeonInput"

interface IQuestion {
  name: any;
  value: any;
}

const Question: React.SFC = () => {
  const [questions, setQuestion]: Array<any> = useState('')
  const [showEmailInput, setShowEmailInput]: Array<any> = useState(false)

  const handleChange = (event: Event) => {
    console.log(event.target)
    setQuestion({
      ...questions,
      '': ''
    })
  }

  const handleSend = () => {
    console.log(questions)
    const requestOptions: object = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({questions})
    }
    // @ts-ignore
    fetch(process.env.REACT_APP_FECTH_API, requestOptions)
  }

  return (
    <Form onSubmit={handleSend}>
      <NeonContainer background="none" transparent>
        <Form.Group>
          <NeonInput
            type="text"
            className="sign__input"
            placeholder="You contact..."
            name="contact"
            onClick={() => setShowEmailInput(true)}
            onChange={handleChange}
          />
          {showEmailInput &&
          <NeonInput
            type="email"
            className="sign__input"
            placeholder="You email..."
            name="email"
            onChange={handleChange}
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