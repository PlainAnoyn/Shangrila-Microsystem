import React, { useEffect,useState } from 'react'
import './Navbar.css'
import icon from '../../assets/icon.png'
import menuicon from '../../assets/menuicon.png'
import { Link } from 'react-scroll';
const Navbar = () => {
  const[sticky, setSticky]=useState(false);
  useEffect(() =>{
      window.addEventListener('scroll', () =>{
        window.scrollY > 50? setSticky(true):setSticky(false);
      })
  },[])
  return (
<nav className={`containerr ${sticky? 'dark-nav': ''}`}>
    <img src={icon} alt="" className='icon'/>
    <ul>
      <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
      <li><Link to='about' smooth={true} offset={-80} duration={500}>About us</Link></li>
      <li><Link to='recentwork' smooth={true} offset={-60} duration={500}>Project</Link></li>
      <li><Link to='Services' smooth={true} offset={-70} duration={500}>Services</Link></li>
      <li><button className='btnn'><Link to='contact' smooth={true} offset={-55} duration={500}> Contact Us</Link></button></li>
    </ul>
    {/* <img src={menuicon} alt="" /> */}
</nav>
  )
}

export default Navbar
