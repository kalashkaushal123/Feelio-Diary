import React from 'react'

import girl from '../../images/girl-image.png'
import heart from '../../images/heart.png'
import diary from '../../images/diary.png'
import cloud from '../../images/cloud.png'
import secure from '../../images/secure.png'
import mood from '../../images/mood.png'

import { SiComma } from "react-icons/si";
import { FaPenFancy } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

function Hero() {
  return (
    <div>
      <div className="flex">
        <img src={girl} alt="Girl" className="w-[35rem] h-[38rem] object-cover ml-32 " />

        <div className="ml-36 mt-10">
          <h1 className="text-6xl font-bold text-purple-900 tracking-wide" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            Welcome to <br /> 
            <div className="flex">
              <span className="bg-gradient-to-r from-pink-500 to-violet-700 bg-clip-text text-transparent text-9xl">Feelio</span>
              <span> <img src={heart} alt="Heart" className="w-64 h-36 rotate-30 -ml-8" /> </span>  
            </div>
          </h1>
          
          <div className="flex bg-white/60 h-28 rounded-3xl px-7 py-6 w-[28rem] relative">
            <span className="flex">
              <SiComma className="text-pink-500 rotate-180 absolute" />
              <SiComma className="text-pink-500 rotate-180 absolute left-4" />
            </span>
            <p className="text-xl px-9 font-semibold text-purple-800" style={{ fontFamily: "'Times New Roman', Times, serif" }}>Some fellings are too deep for words, but every feeling deserves a page.</p>
            <span className="flex">
              <SiComma className="text-pink-500 absolute top-14 right-10" />
              <SiComma className="text-pink-500 absolute right-7 top-14" />
            </span>
          </div>

          <p className="text-purple-900 mt-3 mx-10 w-[20rem] text-center">A safe place for your thoughts, emotions, and precious memories.</p>

          <div className="mt-6">
            <button className="flex bg-pink-500 text-white px-6 py-3 rounded-full items-center ml-28 hover:bg-pink-600 transition-all duration-300 hover:px-7 hover:py-4 shadow-lg hover:shadow-xl hover:text-xl hover:font-semibold cursor-pointer">
              <FaPenFancy className="text-xl mr-3 border-b-2" /> Start Writing
            </button>
          </div>
        </div>

        

        
      </div>

      <div className="bg-white/60 w-[90rem] h-62 mx-10 -mt-10 z-50 rounded-4xl px-8 py-6 flex gap-4">
        <div className="relative flex bg-[rgba(255,209,220,0.6)] border-2 border-white shadow-[0_0_40px_rgba(255,209,220,0.9)] rounded-4xl w-[24rem] h-48 p-2 transition-all duration-300 hover:-translate-y-3">
          <img src={diary} alt="Diary" className="h-33" />
          <div className="ml-4 mt-2">
            <h2 className="text-2xl text-pink-700 font-semibold">Private Diary</h2>
            <p className="text-lg mt-4">Write your thoughts privately and freely</p>
          </div>
          <FaHeart className="absolute bottom-4 right-4 text-pink-400 text-xl" />
        </div>

        <div className="relative flex bg-[rgba(224,187,255,0.5)] border-2 border-white shadow-[0_0_40px_rgba(224,187,255,0.5)] rounded-4xl w-[24rem] h-48 p-2 transition-all duration-300 hover:-translate-y-3">
          <img src={secure} alt="Secure" className="h-33" />
          <div className="ml-4 mt-2">
            <h2 className="text-2xl text-purple-700 font-semibold">Secure & Safe</h2>
            <p className="text-lg mt-4">Your data is encrypted and always protected</p>
          </div>
          <FaHeart className="absolute bottom-4 right-4 text-purple-400 text-xl" />
        </div>

        <div className="relative flex bg-[rgba(255,223,128,0.3)] border-2 border-white shadow-[0_0_40px_rgba(255,223,128,0.3)] rounded-4xl w-[24rem] h-48 p-2 transition-all duration-300 hover:-translate-y-3">
          <img src={cloud} alt="Cloud" className="h-26" />
          <div className="ml-4 mt-2">
            <h2 className="text-2xl text-yellow-700 font-semibold">Cloud Storage</h2>
            <p className="text-lg mt-4">Access your diary from anywhere, anytime</p>
          </div>
          <FaHeart className="absolute bottom-4 right-4 text-yellow-400 text-xl" />
        </div>

        <div className="relative flex bg-[rgba(189,224,254,0.6)] border-2 border-white shadow-[0_0_40px_rgba(189,224,254,0.6)] rounded-4xl w-[24rem] h-48 p-2 transition-all duration-300 hover:-translate-y-3">
          <img src={mood} alt="Mood" className="h-26" />
          <div className="ml-4 mt-2">
            <h2 className="text-2xl text-blue-700 font-semibold">Mood Tracking</h2>
            <p className="text-lg mt-4">Track your mood and understand your self better</p>
          </div>
          <FaHeart className="absolute bottom-4 right-4 text-blue-400 text-xl" />
        </div>
      </div>
      

      <div className="text-2xl text-pink-800 font-semibold my-6 text-center">
        Made it 💖 for your feelings
      </div>

    </div>
  )
}

export default Hero
