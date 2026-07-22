import React from 'react'

function Footer() {
  return (
    <div className='bg-white/60 flex xl:px-44 lg:px-20 md:px-20 px-5 py-5 rounded-xl w-[24rem] md:w-[48rem] lg:w-[46rem] xl:w-[70rem]'>
      <p className='xl:block lg:block md:block hidden'>
        <span className='text-sm'>🌸</span>
        <span className='text-sm'>🌸</span>
        <span>🌸</span>
      </p>

      <span className='xl:px-20 lg:px-10 md:px-8 px-4'>💖</span>

      <span className='text-pink-900 font-semibold'>"Every feeling deserves a page."</span>

      <span className='xl:px-20 lg:px-10 md:px-8 px-4'>💖</span>

      <p className='xl:block lg:block md:block hidden'>
        <span>🌸</span>
        <span className='text-sm'>🌸</span>
        <span className='text-sm'>🌸</span>
      </p>
    </div>
  )
}

export default Footer
