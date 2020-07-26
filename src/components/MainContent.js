import React, { Component } from 'react';
import '../style/maincontent.css' 
import Card from './Card';
import TopBar from './TopBar';
import IntroCard from './IntroCard';
import FilterTable from './FilterTable';


export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (<div className="main-content">
      <IntroCard 
        title="Hi Alif Baba."
        content="Welcome back John Doe. We are glad you are here. Inspire the best work in people, enable them to achieve their goals."
      />
      <div className="trending-blogs-div">
        <span className="trending-blogs-title ">Trending Blogs</span>
        <span className="view-all-link">View All</span>
      </div>
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

      <FilterTable />
      
    </div>)
  }

}