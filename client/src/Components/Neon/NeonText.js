import React, {Component} from 'react'

class NeonText extends Component {
  styles = {
    fontSize: '2rem',
    textAlign: 'center',
    lineHeight: '1',
    color: '#c6e2ff',
    animation: 'neon .2s ease-in-out infinite alternate'
  }

  render() {
    return (
      <div style={this.styles} className="sign__word" onClick={this.props.onClick}>
        {this.props.neonText}
      </div>
    )
  }
}

export default NeonText