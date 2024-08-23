import React from 'react'
import './Aboutus.css'

const Aboutus = () => {
  return (
    <section className='container py-5' id='about'>
      <h1 className='text-center mb-5'><span className="text-primary">About</span> Us</h1>
      
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="about-content bg-white p-4 rounded shadow">
            <p className="text-secondary">
              Shangrila Microsystem (P.) Ltd. (Shangrila) is a company established with a concrete aim 
              of providing complete IT solutions to the end-users. The establishment of the company 
              dates back to 2052 B.S. when a team of IT experts laid down the foundation stone of the 
              company as a small industry named Shangrila Software and Computer Services which is now
              incorporated as Shangrila Microsystem (P.) Ltd. as per the Company Act 2053 of Government 
              of Nepal.
            </p>
            <p className="text-secondary mb-4">
              The company has every reason to have pride on its existence as it is an undertaking of the people who have excelled
              in the field of Information Technology through practical display of their expertise and efficiency with immense competence.
              Moreover, they hold immeasurable esteem among the IT experts in and across the border.
            </p>
            <button className="btn btn-primary px-4 py-2">Contact Us</button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-image h-100 bg-image rounded"></div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
