import React from 'react'
import './OurClient.css'
import pp1 from '../../assets/1.png'
import pp2 from '../../assets/2.png'
import pp3 from '../../assets/3.png'
import pp4 from '../../assets/4.png'
import pp5 from '../../assets/5.png'

const OurClient = () => {
  return (
    <div className='containerr'>
      <h1><span>Satisfied</span> Client</h1>
        <div className='slides' reverse='true'>
        <div className='list'>
        <div className='item pos1'><img src={pp1} alt="" /></div>
        <div className='item pos2'><img src={pp2} alt="" /></div>
        <div className='item pos3'><img src={pp3} alt="" /></div>
        <div className='item pos4'><img src={pp4} alt="" /></div>
        <div className='item pos5'><img src={pp5} alt="" /></div>
        </div>
        </div>
    </div>
  )
}

export default OurClient
