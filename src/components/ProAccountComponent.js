import React from 'react';
import '../style/proAccount.css'

export default function ProAccountComponent(props) {
  return (
    <div className="proaccount-div">
      <p className="proaccount-text">
        Buy <span className="pro-account-link">Pro Account</span> to Exlore Premium Features
      </p>
      <button className="purchase-button">
        Purchare Now
      </button>
    </div>
  )
}