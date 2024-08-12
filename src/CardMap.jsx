import React from 'react'
import './CardMap.css'
import s1 from './assets/s22.png'
import s3 from './assets/s3.png'
import s4 from './assets/s4.png'
import s5 from './assets/s5.png'
import s6 from './assets/s6.png'
import s7 from './assets/s7.png'
import s8 from './assets/s8.png'
import s9 from './assets/s9.png'

function CardMap() {
  return (
    <div>
        <div className="flex mt-[5vh] ">
          <div className='h-[90vh] w-[30vw] ml-[10vw] '>

            <div className='flex justify-between mr-10 items-center text-white h-[10vh] ml-10'> 
              <div >
                <div className='text-sm '>Nike pro max100 </div>
                <div className='text-sm'>Pricing $100</div>
              </div>
              <div>🤍</div>
            </div>

            <div className='bg-white h-[80vh]'>
              <img src={s3} alt="shoes" className='h-[80vh] w-[60vw] mt-'/>
            </div>
          </div>
          {/* right side */}
          <div className='h-[90vh] mr-[10vw] w-[50vw] flex flex-wrap'>

            <div className='h-[45vh] w-[25vw]'>
              <div className='text-white h-[10vh] ml-10 mr-5 flex justify-between items-center'> 
                <div>
                  <div className='text-sm'>NIKE PRO MAX 100 </div>
                  <div className='text-sm'>Pricing $100</div>
                </div>
                <div>🤍</div>
              </div>
              <div className='h-[35vh] bg-[#606060] flex justify-center'>
                <img src={s5} alt="shoes" className='h-[35vh]'/>
              </div>
            </div>

            <div className='h-[45vh] w-[25vw] '>
              <div className='text-white h-[10vh] ml-10 mr-5 flex justify-between items-center'> 
                  <div>
                    <div className='text-sm'>SNEAKERS RUNNING SHOES 100 </div>
                    <div className='text-sm'>Pricing $100</div>
                  </div>
                  <div>🤍</div>
                </div>
              <div className='h-[35vh] bg-black flex justify-center'>
              <img src={s4} alt="shoes" className='h-[35vh] '/>
              </div>
            </div>

            <div className='h-[45vh] w-[25vw]'>
              <div className='text-white h-[10vh] ml-10 mr-5 flex justify-between items-center'> 
                  <div>
                    <div className='text-sm'>NIKE PRO MAX 100 </div>
                    <div className='text-sm'>Pricing $100</div>
                  </div>
                  <div>🤍</div>
                </div>
              <div className=' shoe3 h-[35vh] bg-orange-400 flex justify-center'>
                <img src={s6} alt="shoes" className='h-[35vh] '/>
              </div>
            </div>


            <div className='h-[45vh] w-[25vw]'>
              <div className='text-white h-[10vh] ml-10 mr-5 flex justify-between items-center'> 
                  <div>
                    <div className='text-sm'>NIKE PRO MAX100 </div>
                    <div className='text-sm'>Pricing $100</div>
                  </div>
                  <div>🤍</div>
                </div>
              <div className='h-[35vh] bg-[#C0C0C0] flex justify-center align-center'>
              <img src={s1} alt="shoes" className='h-[35vh]'/>
              </div>
            </div>

          </div>
        </div>

      {/* second row */}
        <div className=' flex mt-2 ml-[10vw] mr-[10vw] h-[45vh] w-[80vw]'>
          <div className=' w-[27vw]'>

            <div className=' flex items-center justify-between text-white ml-10 h-[10vh] mr-5'>
              <div>
                <div className='text-sm'>Nike Shoes ProMax</div>
                <div className='text-sm'>Pricing $200</div>
              </div>
              <div>🤍</div>
            </div>
            <div className='h-[35vh] flex justify-center items-center bg-[#C0C0C0]'>
              <img src={s7} alt="shoes" className='h-[40vh] '/>              
            </div>

          </div>
          
          <div className=' w-[26vw] '>

            <div className=' flex items-center justify-between text-white ml-10 h-[10vh] mr-5'>
              <div>
                <div className='text-sm'>Nike Shoes ProMax</div>
                <div className='text-sm'>Pricing $200</div>
              </div>
              <div>🤍</div>
            </div>
            <div className='h-[35vh] flex justify-center items-center bg-[#606060]'>
              <img src={s1} alt="shoes" className='h-[42vh] '/>              
            </div>

          </div>


          <div className=' w-[27vw] '>

            <div className=' flex items-center justify-between text-white ml-10 h-[10vh] mr-5'>
            <div>
                <div className='text-sm'>Nike Shoes ProMax</div>
                <div className='text-sm'>Pricing $200</div>
            </div>
              <div>🤍</div>
            </div>
            <div className='h-[35vh] flex justify-center items-center bg-[#A0A0A0]'>
              <img src={s8} alt="shoes" className='h-[40vh] '/>              
            </div>

          </div>

        </div>


      {/* last row */}
        <div className='ml-[10vw] mt-3 flex'>
          <div className='mt-5 '>
            <h1 className=' text-5xl font-bold mt-5 mb-5 text-white '>Brand Shoes.</h1>

            <div className='flex '>
              <div className='h-[45vh] w-[25vw]'>
                <div className='text-white h-[10vh] ml-10 mr-5 flex justify-between items-center'> 
                  <div>
                    <div className='text-sm'>NIKE PRO MAX 100 </div>
                    <div className='text-sm'>Pricing $100</div>
                  </div>
                  <div>🤍</div>
                </div>
                <div className='h-[35vh] bg-[#606060] flex justify-center items-center'>
                  <img src={s8} alt="shoes" className='h-[40vh] '/>
                </div>
              </div>

              <div className='h-[45vh] w-[25vw]'>
                <div className='text-white h-[10vh] ml-10 mr-5 flex justify-between items-center'> 
                  <div>
                    <div className='text-sm'>NIKE PRO MAX 100 </div>
                    <div className='text-sm'>Pricing $100</div>
                  </div>
                  <div>🤍</div>
                </div>
                <div className='h-[35vh] bg-[#232227] flex justify-center items-center'>
                  <img src={s7} alt="shoes" className='h-[40vh]'/>
                </div>
              </div>
            </div>
            
          </div> 

          <div className='h-[90vh] w-[30vw]'>
            <div className='flex justify-between mr-10 items-center text-white h-[10vh] ml-10'> 
              <div >
                <div className='text-sm '>Nike pro max100 </div>
                <div className='text-sm'>Pricing $100</div>
              </div>
              <div>🤍</div>
            </div>
            <div className='bg-white h-[70vh]'>
              <img src={s9} alt="shoes" className='h-[60vh]'/>
            </div>
          </div>

        </div>



    </div>
  )
}

export default CardMap