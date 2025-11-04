
import React from 'react'

const logos = [
 {name:'MTN', img:'/src/assets/mtn.png'},
  {name:'AIRTEL', img:'/src/assets/airtel.png'},
  {name:'GLO', img:'/src/assets/glo.png'},
 {name:'9MOBILE', img:'/src/assets/9mobile.png'},
]

export default function Logos(){
  return (
    <div className="max-w-7xl mx-auto  px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {logos.map(l=>(
          <div key={l.name} className="p-8 bg-slate-50  rounded-card flex flex-col items-center">
            <img src={l.img} alt={l.name} className="w-20 rounded-full h-20 object-contain"/>
            <div className="mt-4 font-semibold">{l.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}