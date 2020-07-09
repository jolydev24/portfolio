import React from "react"
import NeonContainer from "../Components/Neon/Containers/NeonContainer"
import NeonText from "../Components/Neon/NeonText"
import TextContainer from "../Components/Neon/Containers/TextContainer"
import image from "../Components/Main/Assets/wall.jpg"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <NeonContainer background={`url(${image})`}>
          <TextContainer>
            <NeonText
              neonText="505 - Something went wrong..."
            />
          </TextContainer>
        </NeonContainer>
      );
    }

    return this.props.children
  }
}

export default ErrorBoundary