import React from 'react'
import './Hero.css'
import a22 from '../assets/a22.png'
import a6 from '../assets/a6.png'
function Hero() {
  return (
    <div className="heromain">
        <div className="hero1">

          </div>
          
          <div className="hero2">
              <h1 className="hero2-h1">Brand Shoes.</h1>
              <p className="hero2-p">Lorem, ipsum dolor sit amet consectetur adipisicing <br/> elit. Aut maiores accusantium assumenda, cum <br/> tempora dicta sapient </p>
              <button className="hero2-btn">GO TO CATALOG</button>
            </div>
            <div className="hero3">
              <img src={a22} alt="" className="hero3-img"/>
            </div>
            <div className="hero4 ">
              <img src={a6} alt="" className="hero4-img "/>
            </div>
    </div>
  )
}

export default Hero;