import React from 'react'
import './Contact.css'
import { FaPhoneVolume } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Nav, Navbar } from 'react-bootstrap'
import A from './assets/amishapic.jpg'
import B from './assets/artipic1.jpg'
import Navbare from './Navbare.jsx'
function Contact() {
  return (
    
    
    <div className='bg-[#333235] h-[100vh] '>
     <Navbare/>
    <div className="contact-main"> 
    <div className="card">
      <div className="bg"><img src={A} alt="shoes" /><span>Amisha Kumari</span>
      <br/>
      <span>Frontend Developer</span>
      <div className="PS">
        <FaLinkedin />
        <FaGithub />
        <SiGmail />
        <FaPhoneVolume />
      </div>
      </div>
      <div className="blob"></div>
    </div>

    <div className="card">
      <div className="bg"><img src={B} alt="shoes" /><span>Aarti Kumari</span><br/><span>Frontend Developer</span>
      <div className="PS">
      <FaLinkedin /> 
      <FaGithub />
      <SiGmail />
      <FaPhoneVolume />
      </div >
      </div>
      <div className="blob"></div>
    </div>

      
    </div>
    </div>
  )
}

export default Contact