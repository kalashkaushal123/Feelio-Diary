import { useState } from 'react'
import './App.css'

import bgImage from './images/bg-image.jpeg'

import Navbar from './component/Navbar/Navbar'
import Hero from './component/Main/Hero'

function App() {

  return (
    <>
    <img src={bgImage} alt="Background Image" className="w-screen h-screen fixed -z-50" />
      <Navbar />
      <Hero />
    </>
  )
}

export default App
