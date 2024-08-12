import React from "react"
import './Sidebar.css'
import a44 from '../assets/a44.png'
import { IoIosCopy } from "react-icons/io";
const Sidebar = () => {
  
    return(
    <div className="Shoes-main">
    <div  className="  d-flex flex-column flex-shrink-0 w-[280px] lg:relative lg:w-[20vw]  sidebar">
      <div className="h-[100vh]">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white">
      <svg className="bi pe-none me-2" width="40" height="2"><use xlinkHref="#bootstrap"></use></svg>
      <span className="font-sans  text-4xl">
        Shoes.<span class>-</span></span>
    </a>
    <hr className="text-white text-2xl  mt-[15px]"/>
    <div className="sidebar1">
    <ul className="nav nav-pills flex-column mb-auto items-center ">
      <li className="nav-item">
        <a href="#" className="nav-link text-red-500">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            Catalog
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
            Brands
            
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
            Reviews
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
            Contact
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
            Support
        </a>
      </li>
    </ul>
   
    <hr className="text-white mt-[30px]"/>
    </div>
    <div className="dropdown">
      {/* <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={s4} alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>Username</strong>
      </a> */}
      <div className="Sidebar3">
          <h1>discount</h1>
          <div className="Sidebarh3">
             <h3>  promo  <span> code</span> </h3>
          </div>
          <div className="copyCode">
          <button className="bg-white text-black text-center w-[15%] ml-[30px] mt-[10vh] font-2xl flex gap-[80px] px-3 py-0.5 rounded-lg ">BR356789201
            <div className="Sidebar3a"><IoIosCopy /></div>
          </button>
          </div>
          <div className="Sidebar2"></div>
          <div className="Sidebar4">
          <img src={a44} alt="" className="Sidebar4-img "/>
          </div>
            
      </div>
      {/* <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        {/* <li><a className="dropdown-item" href="/">New project...</a></li>
        <li><a className="dropdown-item" href="/Catalog">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul> */}
      {/* </ul> */} 
    </div>
  </div>
  </div>
  </div>
    )
}

export default Sidebar;