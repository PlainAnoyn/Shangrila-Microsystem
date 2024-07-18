import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Our_team from './Components/team/team'
import Aboutus from './Components/Aboutus/Aboutus'
import RecentWork from './Components/RecentWork/RecentWork'
import OurClient from './Components/OurClient/OurClient'
import OurServices from './Components/OurServices/OurServices';
import WhyUs from './Components/WhyUs/WhyUs'
import ContactUs from './Components/ContactUs/Contact'
import Footer from './Components/Footer/Footer'


const App=()=> {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Aboutus/>
      <Our_team/>
      <RecentWork/>
      <OurClient/>
      <OurServices/>
      <WhyUs/>
      <ContactUs/>
      <Footer/>
     </div>
  )
}

export default App
