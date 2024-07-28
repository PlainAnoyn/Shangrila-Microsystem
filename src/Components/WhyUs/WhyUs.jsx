import React from 'react';
import './WhyUs.css';
import im from '../../assets/Pi3.png';

const WhyUs = () => (
  <section className="whyus-section">
    <div className="containerr">
      <h1 className="wh1">
        <span>Why cho</span>ose Us?
      </h1>
      <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
        <div className="col-12 col-lg-6 col-xl-5 d-flex justify-content-center">
          <img
            className="img-fluid rounded whyus-image"
            src={im}
            alt="Why Choose Us"
          />
        </div>
        <div className="col-12 col-lg-6 col-xl-7">
          <div className="row">
            <div className="col-12 col-xl-11">
              <p className="lead fs-4 text-white mb-3">
                Specialise in Government Projects.
              </p>
              <p className="mb-5">
                With over 20 years of experience in the Information Technology service industry, we have become pioneers in delivering government projects. Our maturity and wisdom in decision-making have helped us refine and crystallize the attributes of our services, ensuring quality and reliability for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
