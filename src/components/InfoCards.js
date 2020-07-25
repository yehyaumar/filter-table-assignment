import React, { Component } from 'react';
import '../style/infoCards.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.state.iconColor =   this.props.type === "article"? "antiquewhite":
                 this.props.type==="clapping"? "#b0dbeb": 
                 this.props.type === "followers"? "#cccccc": "" 
  }

  render() {
    return (
      <div className="info-card">
        <div className="info-card-icon-div">
          <img
            className="info-card-icon"
            alt="type"
            style={{
              backgroundColor: `${this.state.iconColor}`
            }}
            src={
              require(`../assets/icons/${this.props.type}.png`)
            }
          />
          <div className="info-text-div">
            <span className="info-card-text" >{this.props.text}</span>
            <span className="info-card-info">{this.props.info}</span>
          </div>
        </div>

        <div className="arrow-div">
          {">"}
        </div>
      </div>
    )
  }
}