import React, { Component } from 'react';

export default class ColorBox extends Component {
  constructor(props){
    // debugger;
    super();
    this.state = {
      opacity: props.opacity
    }
  }

  render() {
    //debugger;
    if(this.state.opacity >= 0.2){
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.state.opacity-0.1}/>
        </div>
      )
    }else{
      return null;
    }
  }

}

