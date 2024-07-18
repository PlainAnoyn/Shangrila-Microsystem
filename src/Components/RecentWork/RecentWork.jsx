import React from 'react'
import './RecentWork.css'
import img1 from '../../assets/A.png'
import img2 from '../../assets/B.png'
import img3 from '../../assets/C.png'

const RecentWork = () => {
  return (
   <div className='containerr' id='recentwork'>
      <div className="recent-work">
            <h1><span>Recent</span> Work</h1>
      </div>
   <div className='hello'>
        
   <div className="carde">
      <div className='sttyl'>
         <h5>Municipal Taxation</h5>
         <p>
Tax Collection by municipal from the individual and organisation within that municipality 
(eg vehicle tax, land tax, rental tax, house(rental) tax. 
         </p>
         <button className="sh_btn">Read more</button>
      </div>
      <div className="cover">
         <div className="coverFront">
            <div>
               <img src={img1} alt="" className="sh_img"/>
               <h5>Municipal Taxation</h5>

            </div>
         </div>
         <div className="coverBack"></div>
      </div>
   </div>

   <div className="carde">
      <div className='sttyl'>
         <h5>LGPIS</h5>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue.
         </p>
         <button className="sh_btn">Read more</button>
      </div>
      <div className="cover">
         <div className="coverFront">
            <div>
               <img src={img2} alt="" className="sh_img"/>
               <h5>LGPIS</h5>
            </div>
         </div>
         <div className="coverBack"></div>
      </div>
   </div>

   <div className="carde">
      <div className='sttyl'>
         <h5>Municipal ERP</h5>
         <p>
         Municipal Taxation System – Municipal Accounting System – Land Registration Management Information
          System – Building Permit Process Management System – Inventory and Assets Management System – Document 
          Management and Tracking System – Planning Management System
         </p>
         <button className="sh_btn">Read more</button>
      </div>
      <div className="cover">
         <div className="coverFront">
            <div>
               <img src={img3} alt="" className="sh_img"/>
               <h5>Municipal ERP</h5>

            </div>
         </div>
         <div className="coverBack"></div>
      </div>
   </div>
    </div>
    </div>
    
  )
}

export default RecentWork
