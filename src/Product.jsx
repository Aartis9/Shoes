import React from 'react'
import './Product.css'
import CardMap from './CardMap.jsx'
import Navbare from './Navbare.jsx'
import { useLocation } from 'react-router-dom';
function Product() {
  let location = useLocation();
  
  return (
    <>
    {(location.pathname === '/Product') ? <Navbare/> : null}
    
    <div className='mt-15 bg-[#333235]'>
        <h1 className='text-5xl font-bold ml-[10vw] text-white pt-10 '>Products.</h1>
        <div className="flex gap-10 ml-[10vw] mt-10">
            <span className='text-sm text-[#ff626d]'>Nike(120)</span>
            <span className='text-sm'>Adidas original(89)</span>
            <span className='text-sm'>Puma(42)</span>
            <span className='text-sm'>Reebok(106)</span>
            <span className='text-sm'>Converse(40)</span>
        </div>
        <CardMap/>
    </div>
    </>
  )
}

export default Product