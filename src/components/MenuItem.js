import React from 'react';
import '../style/menuItem.css';

export default function MenuItem (props){
  return (
    // this is just to give triangle item a different styling or we could just create a separate MenuItem Component for it
    <a className={(props.isactive && props.name === "triangle")? `triangle-item-active `:
      (props.isactive && props.name !== "triangle")? "menu-item-active":
      (props.isactive === false && props.name === "triangle")? "triangle-item":
      "menu-item"
    } href="/" onClick={(e) => props.onClick(e, props.name)}>

      <img 
        className="icons"
        src={props.isactive? require(`../assets/icons/${props.name}.png`):
         require(`../assets/icons/${props.name}_white.png`) }
        alt={props.name} />
    
    </a>
  )
}