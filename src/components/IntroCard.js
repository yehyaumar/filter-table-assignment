import React, { Component } from 'react';
import '../style/introCard.css';

export default class IntroCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="intro-card">
        <div>
          <p className="card-title">
            {this.props.title}
          </p>
          <p className="intro-card-content">
            {this.props.content}
          </p>
          <button className="intro-card-button">
            View Details
          </button>
        </div>
        <div className="intro-card-image-container">
          <img
            src={require("../assets/images/person.png")}
            alt="person"
            className="intro-card-image"
          />
        </div>
      </div>
    )
  }
}