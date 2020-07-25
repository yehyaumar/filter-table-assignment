import React, { Component } from 'react';
import MenuItem from './MenuItem';
import '../style/sidenav.css';

export default class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTriangle: false,
    }
  }

  render() {
    return (
      <div className="sidenav">
        <MenuItem name="triangle" isactive={true}/>
        <MenuItem name="home" isactive={false}/>
        <MenuItem name="foursquare" isactive={true}/>
        <MenuItem name="calendar" isactive={false}/>
        <MenuItem name="box" isactive={false}/>
        <MenuItem name="settings" isactive={true}/>
        <MenuItem name="close" isactive={false}/>
        
      </div>
    )
  }
}