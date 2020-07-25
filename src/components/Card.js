import React, { Component } from 'react';
import '../style/card.css';

export default class Card extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={`card ${this.props.black?"card-black": "card-gray"}`}>
        <p className={`card-heading ${this.props.black? "card-heading-white": ""}`}>
          {this.props.heading}
        </p>
        <p className={`card-content ${this.props.black? "card-content-white": ""}`}>
          {this.props.content}
        </p>
        <div className="card-bottom">
          <div className="images">
            <img className="face" src={require("../assets/faces/face1.jpeg")} alt="f1"/>
            <img className="face" src={require("../assets/faces/face4.jpg")} alt="f2"/>
            <img className="face" src={require("../assets/faces/face2.jpg")} alt="f3"/>
          </div>
          <div className={`claps-div ${this.props.black? "claps-div-white": ""}`}>
            <img className="clap-icon" 
              src={this.props.black?
                require("../assets/icons/clapping_white.png"):
                require("../assets/icons/clapping.png")} alt="claps" />
            {this.props.claps}
          </div>
        </div>
      </div>
    )
  }
}