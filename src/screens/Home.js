import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import SideNav from '../components/SideNav';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div >
        <SideNav/>
        <MainContent/>
      </div>
    )
  }
}