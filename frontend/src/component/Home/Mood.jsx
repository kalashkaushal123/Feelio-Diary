import React, { useState } from 'react'

function Mood() {
  const [mood, setMood] = useState(["Happy "])

  return (
    <section className='w-[25.5rem] bg-white/50 rounded-2xl py-5 px-8 '>
      <h2 className='text-purple-900/80 font-semibold text-lg'>How are you feeling today</h2>

      <div className='bg-pink-200 rounded-lg text-3xl py-3 mt-4'>
        <span className='p-2 hover:bg-pink-400 rounded-lg cursor-pointer'>🤩</span>
        <span className='p-2 hover:bg-pink-400 rounded-lg cursor-pointer'>😃</span>
        <span className='p-2 hover:bg-pink-400 rounded-lg cursor-pointer'>😐</span>
        <span className='p-2 hover:bg-pink-400 rounded-lg cursor-pointer'>😥</span>
        <span className='p-2 hover:bg-pink-400 rounded-lg cursor-pointer'>😭</span>
        <span className='p-2 hover:bg-pink-400 rounded-lg cursor-pointer'>😡</span>

      </div>

      <p className='text-sm text-center border-2 border-pink-200 rounded-xl my-3 py-2 font-semibold'>Today you're feeling <span className='text-green-600'>{mood} !</span> 🌸 </p>
    </section>
  )
}

export default Mood
