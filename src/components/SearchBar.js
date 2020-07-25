import React from 'react';
import '../style/searchBar.css'

export default function SearchBar(props){
  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Search" />
    </div>
  )
}