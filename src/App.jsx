import React from 'react'

// import Navbare from './Navbare.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Home.jsx'
import Catalog from './Catalog/Catalog.jsx'
import Product from './Product.jsx'
import Contact from './Contact.jsx'
import Support from './Support.jsx'
import Navbare from './Navbare.jsx'
import Cart from './Cart.jsx'
import Testim from './Testim.jsx'
import Slider from './Slider.jsx'

function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Catalog' element={<Catalog />} />
          {/* <Route path='Reviews' element={<Reviews />} /> */}
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Support' element={<Support/>} />
          <Route path='/Cart' element={<Cart />} />
          <Route path = '/Testim' element={<Testim />} />
          <Route path = '/Slider' element={<Slider />} />
          <Route path = '/Product' element={<Product />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
