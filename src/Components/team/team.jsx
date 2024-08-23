import React from 'react'
import './team.css'
import ima from '../../assets/im1.jpg'
import imb from '../../assets/im2.jpg'
import imc from '../../assets/im3.jpg'

const teamMembers = [
  {
    name: 'James Henry',
    role: 'Web Analyst',
    image: ima,
    social: {
      instagram: '#',
      github: '#',
      linkedin: '#'
    }
  },
  {
    name: 'John Doe',
    role: 'UI/UX Designer',
    image: imb,
    social: {
      instagram: '#',
      github: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Mykel Smith',
    role: 'Front-End Web Developer',
    image: imc,
    social: {
      instagram: '#',
      github: '#',
      linkedin: '#'
    }
  }
];

const OurTeam = () => {
  return (
    <section className="team-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">
          <span className="text-primary">Our</span> Team
        </h2>
        
        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="team-card">
                <div className="card-inner">
                  <div className="card-front">
                    <img src={member.image} alt={member.name} className="team-image" />
                  </div>
                  <div className="card-back">
                    <h3>{member.name}</h3>
                    <p className="role">{member.role}</p>
                    <div className="social-links">
                      <a href={member.social.instagram} className="social-link">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href={member.social.github} className="social-link">
                        <i className="fa-brands fa-github"></i>
                      </a>
                      <a href={member.social.linkedin} className="social-link">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
