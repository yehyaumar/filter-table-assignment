import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import SideNav from '../components/SideNav';
import RightSideComponent from '../components/RightSideComponent';
import TopBar from '../components/TopBar';
import '../style/home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div >
        <SideNav />
        <TopBar />
        <div className="body-content">
          <MainContent />
          <RightSideComponent />
        </div>
      </div>
    )
  }
}