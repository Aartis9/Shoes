import React from 'react'
import './Home.css'
import s1 from './assets/s1.png'
import s22 from './assets/s22.png'
import Product from './Product.jsx'
function Home() {
  return (
    <div className="main-div">
        <div className="nike1">NIKE</div>

        <div className="smallc"> 
          <h8>promo:nike</h8>
          <div className="sl1">40%</div>
          <div className="sl2">Sale</div>
        </div>
        
        <div className="curves">
          <img className="ss1" src={s1} alt="shoes" />
          <svg className="jjj" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1140 410"><defs>
            <linearGradient id="idd">
              <stop offset="0%" stopColor="#ff626d" />
              <stop offset="100%" stopColor="#fcad72" />
              </linearGradient>
              </defs>
              <path className="jjin" fill="url(#idd)" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,122.7C384,149,480,235,576,240C672,245,768,171,864,165.3C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="small-circ">+</div>
        
        <div className="singp"></div>

        <div className="heaad">
          <h1>Brand Shoes.</h1>
          <p>Lorem ipsum dolor, sit amet consectetur <br/>adipisicing elit. Facere qui unde temp<br/> error sint vel illo a tenetur! </p>         
        </div>

        <div className="big-circ1">
          <img className="sh2" src= {s22}/>
        </div>
        <div className="big-circ2"></div>
        <div className="big-circ3">+</div>
        <div className="after-svg"></div>
        <div className="wrrr">AIR <h8>JORDAN</h8></div>
        
    </div>
  )
}

export default Home