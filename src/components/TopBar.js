import React, { Component } from 'react';
import '../style/topBar.css'
import SearchBar from './SearchBar';

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="top-bar-container">
        <SearchBar />
        <div className="profile-name-container">
          <div className="bell-container">
            <img
              className="bell"
              src={require("../assets/icons/bell.png")}
              alt="bell"
            />
          </div>

          <div className="language">
            <span>En</span>
          </div>

          <div className="name-div">
            <span className="name">Alif Baba</span>
            <span className="sub-name">Alif Baba</span>
          </div>
          <div className="dp-container" >
            <img
              className="dp"
              src={require("../assets/faces/face4.jpg")}
              alt="dp"
            />
          </div>
        </div>
      </div>
    )
  }

}