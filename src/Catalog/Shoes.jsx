import React from 'react'
import a2 from '../assets/a2.png'
import Card from './Card.jsx'
import a44 from '../assets/a44.png'
import a1 from '../assets/a1.png'
import a9 from '../assets/a9.png'
import a4 from '../assets/a4.png'

function Shoes() {
  const data=[{
    id:1,
    name:"Nike",
    price:100,
    img:a9
  },
  {
    id:2,
    name:"Adidas",
    price:80,
    img:a2
  },
  {
    id:3,
    name:"Puma",
    price:120,
    img:a44
  },
  {
    id:4,
    name:"Reebok",
    price:90,
    img:a4
  },
  {
    id:5,
    name:"Fila",
    price:60,
    img:a1
  },
  {
    id:6,
    name:"New Balance",
    price:110,
    img:a2
  },
  {
    id:7,
    name:"Converse",
    price:70,
    img:a2
  },
  {
    id:8,
    name:"Vans",
    price:50,
    img:a2
  },
  {
    id:9,
    name:"Fila",
    price:60,
    img:a1
  },
  {
    id:10,
    name:"New Balance",
    price:110,
    img:a2
  },
  // {
  //   id:9,
  //   name:"Under Armour",
  //   price:130,
  //   img:a2
  // },
  // {
  //   id:10,
  //   name:"Skechers",
  //   price:75,
  //   img:a2
  // },
  // {
  //   id:11,
  //   name:"ASICS",
  //   price:95,
  //   img:a2
  // },
  // {
  //   id:12,
  //   name:"Salomon",
  //   price:140,
  //   img:a2
  // },
  // {
  //   id:13,
  // }]
]
  return (
    <div>
      {/* d-flex justify-center grid grid-cols-3 lg:grid-cols-5 gap-8 */}
        <div className="ml-[1.5vw] lg:ml-[10px] grid grid-cols-2 lg:grid-cols-5 gap-[5vw] lg:gap-8">
         { /*(each element,index)*/}
            {data.map((shoe,N)=>(
                <Card key={shoe.id} name={shoe.name} price={shoe.price} img={shoe.img} col={N}/>
            ))}
    </div>
    </div>
  )
}

export default Shoes