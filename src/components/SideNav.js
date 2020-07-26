import React, { Component } from 'react';
import MenuItem from './MenuItem';
import '../style/sidenav.css';

export default class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenuItems: {},
    }

    this.toggle = this.toggle.bind(this);

    this.state.toggleMenuItems = {
      triangle:true,
      home: false,
      foursquare: true,
      calendar: false,
      box: false,
      settings: false,
      close: false
    }
  }

  toggle(e, item) {
    e.preventDefault();
    this.setState({ 
      toggleMenuItems: {...this.state.toggleMenuItems,  [item]: !this.state.toggleMenuItems[item]}
    })
  }

  render() {
    const { toggleMenuItems } = this.state;
    return (
      <div className="sidenav">
        <div>
          {/* whichever MenuItem we want to keep active, just pass isactive prop true,
          menuItems are toggled based on state*/}
          <MenuItem name="triangle" isactive={toggleMenuItems.triangle} onClick={this.toggle}/>
          <MenuItem name="home" isactive={toggleMenuItems.home} onClick={this.toggle}/>
          <MenuItem name="foursquare" isactive={toggleMenuItems.foursquare} onClick={this.toggle}/>
          <MenuItem name="calendar" isactive={toggleMenuItems.calendar} onClick={this.toggle}/>
          <MenuItem name="box" isactive={toggleMenuItems.box} onClick={this.toggle}/>
          <MenuItem name="settings" isactive={toggleMenuItems.settings} onClick={this.toggle}/>
        </div>
        <div>
          <MenuItem name="close" isactive={toggleMenuItems.close} onClick={this.toggle}/>
        </div>

      </div>
    )
  }
}