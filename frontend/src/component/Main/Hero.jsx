import React from 'react'

import bgImage from '../../images/background-image.png'

function Hero() {
  return (
    <div className="bg-cover h-screen w-full -mt-16" style={{ backgroundImage: `url(${bgImage})` }}>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-white/10"></div> */}
      
    </div>
  )
}

export default Hero
