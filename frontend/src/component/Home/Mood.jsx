import React, { useState } from 'react'

function Mood() {
  const [mood, setMood] = useState("Happy")

  const handleMood = (selectedMood) => {
    setMood(selectedMood)
    mood.style.backgroundColor = "Pink";
  }

  return (
    <section className='xl:w-[25.5rem] lg:w-[22.5rem] w-[23rem] bg-white/50 rounded-2xl xl:py-5 lg:py-3 md:py-2 py-2 xl:px-8 lg:px-2 md:px-2 md:-mx-4 lg:mx-0'>
      <h2 className='text-purple-900/80 font-semibold text-lg lg:ml-3 md:ml-3 ml-3'>How are you feeling today</h2>

      <div className='bg-pink-200 rounded-lg text-3xl py-3 mt-4'>

        <span 
        onClick={() => {
          handleMood("Excited");
        }}
        className={`p-2 rounded-lg cursor-pointer ${mood === "Excited" ? "bg-pink-400" : "hover:bg-pink-400"}`}>
          🤩
        </span>

        <span 
        onClick={() => handleMood("Happy")}
        className={`p-2 rounded-lg cursor-pointer ${mood === "Happy" ? "bg-pink-400" : "hover:bg-pink-400"}`}>
          😃
        </span>

        <span 
        onClick={() => handleMood("Neutral")}
        className={`p-2 rounded-lg cursor-pointer ${mood === "Neutral" ? "bg-pink-400" : "hover:bg-pink-400"}`}>
          😐
        </span>

        <span 
        onClick={() => handleMood("Sad")}
        className={`p-2 rounded-lg cursor-pointer ${mood === "Sad" ? "bg-pink-400" : "hover:bg-pink-400"}`}>
          😥
        </span>

        <span 
        onClick={() => handleMood("Very Sad")}
        className={`p-2 rounded-lg cursor-pointer ${mood === "Very Sad" ? "bg-pink-400" : "hover:bg-pink-400"}`}>
          😭
        </span>

        <span 
        onClick={() => handleMood("Angry")}
        className={`p-2 rounded-lg cursor-pointer ${mood === "Angry" ? "bg-pink-400" : "hover:bg-pink-400"}`}>
          😡
        </span>

      </div>

      <p className='text-sm text-center border-2 border-pink-200 rounded-xl my-3 py-2 font-semibold'>Today you're feeling <span className='text-green-600'>{mood} !</span> 🌸 </p>
    </section>
  )
}

export default Mood
