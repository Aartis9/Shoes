import React ,{ useState } from 'react'
import "./Navbare.css"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { IoBagAddOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
const Menu = () => (
  <>
    <p><a href='/Catalog'>Catalog</a></p>
    <p><a href='/'>Home</a></p>
    
    <p><a href='/Product'>Product</a></p>
    <p><a href='/Testim'>Reviews</a></p>
    <p><a href='/Contact'>Contact</a></p>
       
  </>
)
const Navbare = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          Shoes.
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-wrapper">

          <div className="gpt3__navbar-sign">
            <span><IoBagAddOutline /></span>
            <span><CgProfile /></span>
          </div>
          {/* Responsive part for mobiles devices */}
          {/* hamburger menu */}
          <div className="gpt3__navbar-menu">
            {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu &&
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <Menu />up
                </div>
                <div className="gpt3__navbar-menu_container-links-sign">
                <button onclick="myFunction()">Click me</button>
                <span><IoBagAddOutline /></span>
                  <span><CgProfile /> </span>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbare;