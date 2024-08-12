import React from 'react'
import s7 from './assets/s7.png'

function Slider() {
  return (
    <div className="w-full  mx-auto bg-[#333335] py-10">
      <h1 className="text-center text-white text-3xl font-bold mb-6">Most Popular Products.</h1>
      <div className="relative flex items-center justify-center space-x-7">
        <div className="relative w-80 h-96 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] shadow-lg">
          <div className="absolute top-4 left-4 bg-red-500 shadow-lg text-xs text-white font-bold px-2 py-1 rounded">NEW</div>
          <div className="absolute top-16 left-4 text-white text-xl font-bold">Under Armour Airr Max.</div>
          <div className="absolute top-24 left-4 text-white text-lg font-semibold">$ 117.00</div>
          <button className="absolute bottom-8 left-4 bg-[#333335] text-white text-sm font-medium px-4 py-2 rounded-3xl">
            GO TO CATALOG
          </button>
          <img src={s7} alt="Product Image" width={64} height={64} className=" absolute bottom-16 right-12 w-52 h-43 object-contain "/>
        </div>
        <div className="relative w-80 h-96 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] shadow-lg transform shadow-lg">
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</div>
          <div className="absolute top-16 left-4 text-white text-xl font-bold">Under Armour Curry 8.</div>
          <div className="absolute top-24 left-4 text-white text-lg font-semibold">$ 199.00</div>
          <button className="absolute bottom-8 left-4 bg-[#333335] text-white text-sm font-medium px-4 py-2 rounded-3xl">
            GO TO CATALOG
          </button>
          <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
            promo: nike 40% sale
          </div>
          <div className="absolute bottom-4 right-4 text-white text-sm font-semibold">outdoor shoes</div>
          
          <img src={s7} alt="Product Image" width={64} height={64} className=" absolute bottom-16 right-12 w-52 h-43 object-contain "/>
          
        </div>
        <div className="relative w-80 h-96 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] shadow-lg">
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</div>
          <div className="absolute top-16 left-4 text-white text-xl font-bold">Under Armour Airr Max.</div>
          <div className="absolute top-24 left-4 text-white text-lg font-semibold">$ 117.00</div>
          <button className="absolute bottom-8 left-4 bg-[#333335] text-white text-sm font-medium px-4 py-2 rounded-3xl">
            GO TO CATALOG
          </button>
          <img src={s7} alt="Product Image" width={64} height={64} className=" absolute bottom-16 right-12 w-52 h-43 object-contain "/>
        </div>
      </div>
    </div>
  )
}
export default Slider


















// import React from 'react'
// import s1 from './assets/s1.png'
// import './Slider.css'
// const Slider = () => {
//   return (
//     <div>
//         {/* <h1>Most popular product</h1> */}
//         <div>
//             <div className="container">
//               <input type="radio" name="slider" id="s1"/>
//               <input type="radio" name="slider" id="s2"/>
//               <input type="radio" name="slider" id="s3"/>

//               <div className="cards">

//                 <label for="s1" id="slide1">
                  
//                   <div className="card">

//                     <div className="image">
//                       <img className="s1" src={s1} alt="shoes"/>

//                       <div className="dots">
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                       </div>
//                     </div>

//                     <div className="infos ">
//                       <span className=' text-gray-700'>Nike SuperRep Go </span>
//                       <span className=' text-small text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>

//                         <a href="/details" className='btn-details'>Details</a>

//                     </div>
//                   </div>
//                 </label>

//                 <label for="s2" id="slide2">
                  
//                   <div className="card">

//                     <div className="image">
//                       <img className="s1" src={s1} alt="shoes"/>

//                       <div className="dots">
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                       </div>
//                     </div>

//                     <div className="infos ">
//                       <span className=' text-gray-700'>Nike SuperRep Go </span>
//                       <span className=' text-small text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>

//                         <a href="/details" className='btn-details'>Details</a>

//                         <div className="actions">
//                           <i className="fa-solid fa-cart-shopping"></i>
//                           <i className="fa-regular fa-heart"></i>
//                           <i className='fa-regular fa-bookmark'></i>
//                           <i className='fa-solid fa-share-nodes'></i>
//                         </div>

//                     </div>
//                   </div>
//                 </label>

//                 <label for="s3" id="slide3">
                  
//                   <div className="card">

//                     <div className="image">
//                       <img className="s1" src={s1} alt="shoes"/>

//                       <div className="dots">
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                       </div>
//                     </div>

//                     <div className="infos ">
//                       <span className=' text-gray-700'>Nike SuperRep Go </span>
//                       <span className=' text-small text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>

//                         <a href="/details" className='btn-details'>Details</a>

//                         <div className="actions">
//                           <i className="fa-solid fa-cart-shopping"></i>
//                           <i className="fa-regular fa-heart"></i>
//                           <i className='fa-regular fa-bookmark'></i>
//                           <i className='fa-solid fa-share-nodes'></i>
//                         </div>

//                     </div>
//                   </div>
//                 </label>
                
//               </div>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Slider