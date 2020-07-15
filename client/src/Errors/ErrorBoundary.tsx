import * as React from "react"
import NeonContainer from "../Components/Neon/Containers/NeonContainer"
import NeonText from "../Components/Neon/NeonText"
import TextContainer from "../Components/Neon/Containers/TextContainer"
import * as image from "../Components/Main/Assets/wall.jpg"

export default class ErrorBoundary extends React.Component {
  public state = {
    error: null,
    errorInfo: null
  }

  public componentDidCatch(error: Error, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  public render() {
    if (this.state.errorInfo) {
      return (
        <NeonContainer transparent={false} background={`url(${image})`}>
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