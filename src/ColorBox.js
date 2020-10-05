import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const nextOpacity = this.props.opacity - 0.1;
    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={nextOpacity} />
        </div>)
    } else {
      return (
        null
      )
    }
  }
}