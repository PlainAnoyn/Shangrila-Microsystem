import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot,faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
const ContactForm = () => {
  return (
    <section className='contact-form containerr'id='contact'>
       
      <h1><span>Contact</span> us</h1>
      <div className="contactForm">
        <form action="#">
          
          <input type="text" className="input" placeholder="Your name" />
          <input type="text" className="input" placeholder="Your email" />
          <input type="text" className="input" placeholder="Your Subject" />
          <textarea className="input" cols="30" rows="5" placeholder="Your message..." />
          <input type="submit" className="input submit" value="Send Message" />
        </form>

        <div className="map-container">
          {/* <div className="mapBg"></div> */}
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1276.7288497258219!2d85.33443348909766!3d27.700681932336938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19be56d18205%3A0xccbccf6af662d059!2sShangrila%20Tower!5e1!3m2!1sen!2snp!4v1724819639261!5m2!1sen!2snp"
              width="600"
              height="450"
              style={{ border:0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
        </div>
      </div> 

      <div className="contactMethod">
        <div className="method">
        <FontAwesomeIcon className='ic' icon={faLocationDot} size='2x'/>
          <article className="text">
            <h1 className="sub-heading">Location</h1>
            <p className="para">Maitidevi, Kathmandu, Nepal</p>
          </article>
        </div>

        <div className="method">
        <FontAwesomeIcon className='ic' icon={faEnvelope} size='2x'/>

          <article className="text">
            <h1 className="sub-heading">Email</h1>
            <p className="para">info@shangrilagroup.com.np</p>
          </article>
        </div>

        <div className="method">
        <FontAwesomeIcon className='ic' icon={faPhoneVolume} size='2x'/>
          <article className="text">
            <h1 className="sub-heading">Phone</h1>
            <p className="para">014102850, 014102852 </p>
          </article>
        </div>
      </div> 
    </section>
  );
};

export default ContactForm;
 