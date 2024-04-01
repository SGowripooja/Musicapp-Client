import React from 'react'
import './Subscription.css'

function Subscription() {
  return (
    <div className='sub-container'>
        <h5 className='sub-header'>Subscribe to our cool features !!!</h5>
        <div>
            <h5 className='sub-l-header'>Starter Pack</h5>
            <ul>
                <li> ✔ Can Upload more than 5+ to 1000 Songs</li>
                <li> ✔ Early Access to New Releases</li>
                <li> ✔ Personalized Recommendations </li>
                <li> ✔ Exclusive Events or Concerts</li>
                <button>Buy for $39.50 per month</button>
            </ul>
            <h5 className='sub-l-header'>Premium Pack</h5>
            <ul>
                <li>✔ Can Upload more than 5+ Songs</li>
                <li>✔ Early Access to New Releases</li>
                <li>✔ Personalized Recommendations </li>
                <li>✔ Exclusive Events or Concerts</li>
                <li>✔ Access to Premium Content</li>
                <li>✔ Unlimited Song Uploads</li>
                <li>✔ Ad-Free Experience</li>
                <button>Buy for $99.50 per month</button>
            </ul>
        </div>
        </div>
  )
}

export default Subscription