import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Main/Hero'

import bgImage from './images/bg-image.jpeg'

function root() {
  return (
    <div>
        <img src={bgImage} alt="Background Image" className="w-screen h-screen fixed -z-50" />
      <Navbar />
      <Hero />
    </div>
  )
}

export default root
