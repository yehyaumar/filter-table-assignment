import React from 'react';
import '../style/menuItem.css';

export default function MenuItem (props){
  console.log(props)
  return (
    <a className={props.isactive? 
      `menu-item-active ${props.name==="triangle"? "triangle-item": "" }`: 
      `menu-item ${props.name==="triangle"? "triangle-item": "" }`} href="/h">

      <img 
        className="icons"
        src={props.isactive? require(`../assets/icons/${props.name}.png`):
         require(`../assets/icons/${props.name}_white.png`) }
        alt={props.name} />
    
    </a>
  )
}