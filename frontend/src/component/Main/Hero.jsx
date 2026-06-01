import React from 'react'

import girl from '../../images/girl-image.png'
import heart from '../../images/heart.png'

function Hero() {
  return (
    <div className="flex">
      <img src={girl} alt="Girl" className="w-[30rem] h-[30rem] object-cover -mt-14 ml-32 " />

      <div className="ml-36 mt-10">
        <h1 className="text-6xl font-bold text-purple-900 tracking-wide" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
          Welcome to <br /> 
          <div className="flex">
            <span className="bg-gradient-to-r from-pink-500 to-violet-700 bg-clip-text text-transparent text-9xl">Feelio</span>
            <span> <img src={heart} alt="Heart" className="w-64 h-36 rotate-30 -ml-8" /> </span>  
          </div>
        </h1>
      </div>
    </div>
  )
}

export default Hero
