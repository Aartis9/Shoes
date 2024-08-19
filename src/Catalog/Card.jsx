import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div className="CardMain">
        <div className={(Math.floor(props.col/5)%2==0)?((props.col%2==0)?"lg:w-[15.5vw] w-[48.5vw]  h-[35vh] bg-[#4e4e50] p-2 flex flex-col rounded-br-3xl":" lg:w-[15.5vw] w-[48.5vw]  h-[35vh] bg-[#333335] p-2 flex flex-col rounded-br-3xl")
          :((props.col%2==1)?" lg:w-[15.5vw] w-[48.5vw]  h-[35vh] bg-[#333335] p-2 flex flex-col rounded-br-3xl":" lg:w-[15.5vw] w-[48.5vw]  h-[35vh] bg-[#4e4e50] p-2 flex flex-col rounded-br-3xl")}>
        <div className="flex flex-row justify-between">
                <span className="text-[1rem]">STREAT</span>

                <button className="bg-orange-500 text-white text-center font-bold px-3 py-0.5 rounded-lg">Buy</button>
        </div>
        <div className="CardImg">
            <img src={props.img} alt="shoe" className="w-[18vw] h-[20vh]"/>
        </div>
        {/* <div className="duration-500 contrast-50 h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100"></div> */}
        <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
            <div className="flex flex-col">
                <span className="text-[1rem] ">{props.name}</span>
                <span className="text-[1rem]">Pricing  ${props.price}</span>
            </div>
            <span className="font-bold  text-white">🤍</span>
            </div>
           
        </div>
        </div>
    </div>
  )
}

export default Card