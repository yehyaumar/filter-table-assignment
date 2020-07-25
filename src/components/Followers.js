import React, { Component } from 'react';
import '../style/followers.css'
import FollowerImageInfo from './FollowerImageInfo';

export default class Followers extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="followers-container">
        <div className="followers-title-link">
          <span className="followers-title">Followers</span>
          <span className="followers-link">View All</span>
        </div>
        <div className="follower-images-container">
          <FollowerImageInfo
            url="face1.jpeg"
            caption="Joe"
          />
          <FollowerImageInfo
            url="face2.jpg"
            caption="May"
          />
          <FollowerImageInfo
            url="face3.png"
            caption="Steve"
          />
          <FollowerImageInfo
            url="face1.jpeg"
            caption="Joe"
          />
          <FollowerImageInfo
            url="face2.jpg"
            caption="Joe"
          />
          <FollowerImageInfo
            url="face3.png"
            caption="Joe"
          />
        </div>
      </div>

    )
  }
}