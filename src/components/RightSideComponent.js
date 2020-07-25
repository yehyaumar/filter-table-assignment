import React, { Component } from 'react';
import InfoCard from './InfoCards';
import '../style/rightSideComponent.css'
import Followers from './Followers';
import ProAccountComponent from './ProAccountComponent';

export default class RightSideComponent extends Component {
  constructor(props) {
    super(props);

    this.state ={

    }
  }

  render() {
    return (
      <div className="right-side-container">
        <InfoCard
          type="article"
          text="Articles Posted"
          info="80"
        />
        <InfoCard 
          type="clapping"
          text="Articles Posted"
          info="1.5K"
        />
        <InfoCard 
          type="followers"
          text="Articles Posted"
          info="972"
        />
        <Followers/>
        <ProAccountComponent />
      </div>
    )
  }
}