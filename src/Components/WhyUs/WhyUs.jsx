import React from 'react'
import './WhyUs.css'
import im from '../../assets/Pi3.png'
const WhyUs = () => {
  return (
    <div>

  <div className="containerr">
  <h1 className='wh1'><span>Why cho</span>ose Us?</h1>
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6 col-xl-5">
        <img className="img-fluid rounded w-50 ml-5"src={im} alt=""/>
      </div>
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="row ">  
            {/* justify-content-xl-center */}
          <div className="col-12 col-xl-11">
           
            <p className="lead fs-4 text-white mb-3 mr-4">Specialise in  Government Project.</p>
            <p className="mb-5">We believe we are pioneer in the field of Information technology  service industry by the sheer amount of experience we have gathered over  the last 20 years. We have become more wise and mature in our decision  making that has only helped us crystallize the attributes of our  services.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default WhyUs
