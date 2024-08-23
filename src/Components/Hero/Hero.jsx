import React from 'react';
import './Hero.css';
import arrow_icon from '../../assets/arrowicon.png';

function Hero() {
  return (
    <section className="hero d-flex align-items-center justify-content-center" id="hero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="hero-content p-4 rounded">
              <h1 className="display-4 text-white mb-4">
                Working towards the excellence in ensuring the Digital Governance in Nepal.
              </h1>
              <button className="btn btn-primary btn-lg">
                Join US
                <img src={arrow_icon} alt="Arrow Icon" className="ms-2" style={{ width: '20px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
