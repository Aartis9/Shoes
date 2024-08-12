import React from 'react'
import './Catalog.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
// import Brands from "./Brands.jsx"

// import Reviews from "./Reviews.jsx"
// import Contact from './Contact.jsx'
// import Support from './Support.jsx'
import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Shoes from './Shoes.jsx'
import Hero from './Hero.jsx'
import Mid from './Mid.jsx'
// import pagination from './Pagination.jsx'
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

function Catalog() {

const [show, setShow] = React.useState(true)
const f1 = (val) => {
  setShow(val)
}

  return (
    <>
    {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalog" element={< Catalog/>} />
          <Route path="/Brands" element={<Brands />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
      </Router> */}
      
    <div className="main">
    <div className="s-container">
      {/* <button className='hidden sm:block' onClick={()=>{setShow(!show)}}> MENU </button>
      <Sidebar show={show} cshow={f1} /> */}
      
     
      <div className="h-container">
         <Header/>
          <Hero/>
          <Mid/>
          <Shoes/>
          {/* <Pagination/> */}
         <div className="f-container">
          <Footer/>
          </div>
      </div>
    

      </div>
      </div>
    </>
  )
}

export default Catalog
