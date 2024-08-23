import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot,faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'

const ContactForm = () => {
  return (
    <section className='contact-form container py-5' id='contact'>
      <h1 className="text-center mb-4"><span>Contact</span> us</h1>
      
      <div className="row g-4">
        <div className="col-md-6">
          <form className="contact-form">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your email" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Subject" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Your message..." />
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
        
        <div className="col-md-6">
          <div className="map-container">
            <div className="map rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1276.7288497258219!2d85.33443348909766!3d27.700681932336938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19be56d18205%3A0xccbccf6af662d059!2sShangrila%20Tower!5e1!3m2!1sen!2snp!4v1724819639261!5m2!1sen!2snp"
                className="w-100 h-100"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faLocationDot} size='2x' className='text-primary me-3'/>
            <div>
              <h5 className="mb-1">Location</h5>
              <p className="mb-0 text-muted">Maitidevi, Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faEnvelope} size='2x' className='text-primary me-3'/>
            <div>
              <h5 className="mb-1">Email</h5>
              <p className="mb-0 text-muted">info@shangrilagroup.com.np</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faPhoneVolume} size='2x' className='text-primary me-3'/>
            <div>
              <h5 className="mb-1">Phone</h5>
              <p className="mb-0 text-muted">014102850, 014102852</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
