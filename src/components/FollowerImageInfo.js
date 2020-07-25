import React from 'react';
import '../style/followers.css'

export default function FollowerImageInfo(props) {
  return (
    <div className="follower-dp-div">
      <img 
        className="follower-dp"
        alt="fd"
        src={require(`../assets/faces/${props.url}`)} //here we can giv avatar url, but here i'll just use face from assets
      />
      <div className="follower-dp-caption">
        {props.caption}
      </div>
    </div>
  )
}