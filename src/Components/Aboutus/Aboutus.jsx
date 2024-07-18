import React from 'react'
import './Aboutus.css'
import bg from '../../assets/bg1.jpg'
const Aboutus = () => {
  return (
    <div className='containerr' id='about'>

       <h1 className='abttitle'><span>About</span> Us</h1>
       <div className="about">
        <div className="inner-section">
            <p className="text">
            Shangrila Microsystem (P.) Ltd. (Shangrila) is a company established with a concrete aim 
            of providing complete IT solutions to the end-users. The establishment of the company 
            dates back to 2052 B.S. when a team of IT experts laid down the foundation stone of the 
            company as a small industry named Shangrila Software and Computer Services which is now
             incorporated as Shangrila Microsystem (P.) Ltd. as per the Company Act 2053 of Government 
             of Nepal. With years of professional experience in the field of IT, the company has been 
             engaged in developing a variety of products and consultation services to the concerned government
             organizations, non-government organizations as well as private organizations as per their needs and demands.
<br/>
         The company has every reason to have pride on its existence as it is an undertaking of the people who have excelled
 in the field of Information Technology through practical display of their expertise and efficiency with immense competence.
  Moreover, they hold immeasurable esteem among the IT experts in and across the border. The company strongly emphasizes and
   promotes its quality of product to its costumers. Quality control has been strictly follow the standard and tested meticulously
    during the design, development and operation process to ensure the products to be error free. Shangrila is committed to give
    the quality products as well as the strong technical support for the establishment and operation of the computerized information 
    system. Shangrila further commits to continue its tradition of providing top-quality margins aggressive products equipped well with 
    latest state-of-art technology. 
            </p>
            <div className="skills">
                <button>Contact Us</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Aboutus
