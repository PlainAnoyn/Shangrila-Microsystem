import React from 'react'
import './Hero.css'
import arrow_icon from '../../assets/arrowicon.png'
const Hero = () => {
  return (
    <div className='hero containerr' id='hero'>
      <div className='hero-text'>
<h1>Working towards the excellence in ensuring the Digital Governance in Nepal.</h1>
      <button className='btnn rgt'>Join US 
        <img src={arrow_icon} alt="" />
      </button>
      </div>
    </div>
  )
}

export default Hero
