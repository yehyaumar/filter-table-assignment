import React, { Component } from 'react';
import '../style/maincontent.css' 
import Card from './Card';

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return <div className="main-content">
      <p className="trending-blogs-title ">Trending Blogs</p>
      <div className="cards-trending">

        <Card
          black={false}
          heading="Prototyping"
          content="A prototype is an early sample model or release of a product build to test a..."
          claps="1.5k"
        />
        <Card
          black={true}
          heading="Typography"
          content="A prototype is an early sample model or release of a product build to test a..."
          claps="1.2k"
        />
        <Card
          black={false}
          heading="Color Pallete"
          content="A prototype is an early sample model or release of a product build to test a..."
          claps="1.6k"
        />
      </div>
    </div>
  }

}