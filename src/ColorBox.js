import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let newValue = this.props.opacity - 0.1;
    return this.props.opacity < 0.2 ? null : (
        <div className="color-box" style={{opacity: 1 /*replace null with the value*/}}>
            <ColorBox opacity={newValue} />
        </div>
    )
  }

}

