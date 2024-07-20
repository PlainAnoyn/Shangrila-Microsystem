import React from 'react';
import './OurServices.css';

const services = [
  {
    title: 'Municipal ERP',
    description: `In operation in ward offices, municipalities, sub-metropolitans and metropolitans across the country this is a latest, easy to use tool employed in local administrative bodies of the country to manage day to function on land registration, municipal taxation, Building permit process, Inventory management information system, Land Tax (malpot), Vehicle Tax, Accounting System, Planning management and so on.`,
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="4" width="18" height="12" rx="2" ry="2"></rect>
        <path d="M2 18h20"></path>
      </svg>
    ),
  },
  {
    title: 'PMIS',
    description: `This is a centralized backbone web based System for Nepal Police to automate the process of Personnel Administration such as digital archiving of documents of about 75000 personnel. It also includes data conversion and migration from old system (d2k as frontend and oracle as backend, user interface: English with Preeti for some major fields) to (asp.net as frontend and oracle as backend, user interface: Multilingual).`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
      >
        <rect x="3" y="3" width="18" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    title: 'PPIS',
    description: `This is a centralized Personnel Information System for the 4 security forces (eg. Nepal Police, Armed Police). This system is designed for pulling data from the information system database of the security forces. This system can also calculate Pension, Gratuity & other facilities provided to retired police personnel. It manages more than 135,000 personnel’s records.`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
      >
        <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"></path>
        <path d="M12 2v20"></path>
      </svg>
    ),
  },
  {
    title: 'NHWR',
    description: `This registry of health workers is created by customization and localization of IHRIS to meet requirement of minimum data set and national needs. This system can import existing data from Human Resource Development Information System (HuRDIS). This system can manage information on over 100,000 national health workers.`,
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" ry="2"></rect>
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <path d="M3 13h18"></path>
        <rect x="10" y="10" width="4" height="4"></rect>
      </svg>
    ),
  },
  {
    title: 'Support Program',
    description: `This service was rendered to then Bharatpur municipality for Institutionalization of GIS, addressing sections of the municipality office, installation of various system component software, provide technical support for establishing metric house number and street signage, provide technical support for data entry and operation of the system, conduct introductory and advanced on-the job GIS training.`,
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 122.88 106.91"
      >
        <path d="M56,91.15a38.3,38.3,0,0,0,11.23,5.78c8.41,2.66,17.75,2.25,27.12-1.74a2.72,2.72,0,0,1,2-.08l12,4L107,90.36a2.78,2.78,0,0,1,1-2.53,28.41,28.41,0,0,0,6.31-6.8,17.53,17.53,0,0,0,2.73-12.47,27,27,0,0,0-6-12.5c-.6-.76-1.25-1.5-1.92-2.23h0a42.62,42.62,0,0,0,1.27-6.59,50,50,0,0,1,5,5.34,32.71,32.71,0,0,1,7.14,15.14A23,23,0,0,1,119.05,84a32.7,32.7,0,0,1-6.29,7.12l1.61,12.4a2.79,2.79,0,0,1-3.6,3.21l-15.24-5a43.85,43.85,0,0,1-30,1.53A45,45,0,0,1,47.47,92.16c.65,0,1.33.06,2.06.09,2.18.06,4.34,0,6.46-.1ZM72.11,35.22a6.39,6.39,0,1,1-6.38,6.39,6.39,6.39,0,0,1,6.38-6.39Zm-42.18,0a6.39,6.39,0,1,1-6.38,6.39,6.39,6.39,0,0,1,6.38-6.39Zm21.09,0a6.39,6.39,0,1,1-6.38,6.39A6.38,6.38,0,0,1,51,35.22ZM52.3,0h.05C66.29.46,78.79,5.42,87.74,13.09,96.89,20.93,102.37,31.6,102,43.26v0c-.36,11.66-6.48,22-16.1,29.3-9.41,7.14-22.22,11.36-36.16,11A62.05,62.05,0,0,1,38.5,82.2a58.64,58.64,0,0,1-9.43-2.87l-22.83,9,7.65-18.19a42.35,42.35,0,0,1-10-12.73A35.22,35.22,0,0,1,0,40.3C.37,28.63,6.49,18.28,16.11,11,25.53,3.83,38.33-.38,52.28,0Zm-.17,6.35h-.05C39.62,6,28.25,9.74,19.94,16,11.83,22.2,6.66,30.83,6.37,40.47A29.15,29.15,0,0,0,9.56,54.53,36.92,36.92,0,0,0,19.7,66.69l1.89,1.51-3.65,8.67,11.21-4.41,1.2.51a52.07,52.07,0,0,0,9.47,3A57,57,0,0,0,49.94,77.2c12.47.36,23.85-3.36,32.16-9.66,8.11-6.16,13.28-14.79,13.57-24.43v0C96,33.44,91.32,24.54,83.6,17.92c-7.91-6.78-19-11.16-31.45-11.54Z"/>
      </svg>
    ),
  },
  {
    title: 'Development of Website',
    description: `Development of interactive and dynamic CMS based website for numerous District Development Committees (DDC) of Nepal with Nepali Unicode Interface and a contemporary website for Citizen Investment Trust (CIT) with features such as VeriSign Certificate License.`,
    icon: (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
];

const OurServices = () => (
  <section className="service component__space" id="Services">
    <div className="containerr">
      <h1>
        <span>Our</span> Services
      </h1>
      <div className="row">
        {services.map((service, idx) => (
          <article className="col__3" key={idx}>
            <div className="service__box pointer">
              <div className="icon">{service.icon}</div>
              <div className="service__meta">
                <h1 className="service__text">{service.title}</h1>
                <p className="p service__text p__color">{service.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default OurServices;
