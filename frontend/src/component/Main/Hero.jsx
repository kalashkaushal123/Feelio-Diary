import React from 'react'
import { Link } from 'react-router-dom'

import girl from '../../images/girl-image.png'
import heart from '../../images/heart.png'
import diary from '../../images/diary.png'
import cloud from '../../images/cloud.png'
import secure from '../../images/secure.png'
import mood from '../../images/mood.png'
import bannerBG from '../../images/banner-bg.png'
import openDiary from '../../images/open-diary.png'
import cup from '../../images/cup.png'

import { SiComma } from "react-icons/si";
import { FaPenFancy } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

function Hero() {
  return (
    <div>
      <div className="flex max-[426px]:flex-col">
        <img 
          src={girl} 
          alt="Girl" 
          className="xl:w-[35rem] lg:w-[27rem] md:w-[25rem] max-[426px]:w-[35rem] xl:h-[38rem] lg:h-[33rem] md:h-[26rem] max-[426px]:h-[25rem] md:mt-10 object-cover xl:ml-32 lg:ml-8 md:-ml-8 order-1 max-[426px]:order-2 max-[426px]:mt-14" />

        <div className="xl:ml-36 lg:ml-20 xl:mt-10 lg:mt-2 order-2 max-[426px]:order-1 max-[426px]:ml-6 max-[426px]:mt-8">
          <h1 
            className="xl:text-6xl md:text-5xl font-bold text-purple-900 tracking-wide xl:w-[35rem] md:w-96 max-[426px]:text-5xl" 
            style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            Welcome to <br /> 
            <div className="flex">
              <span className="bg-gradient-to-r from-pink-500 to-violet-700 bg-clip-text text-transparent xl:text-9xl md:text-8xl max-[426px]:text-8xl">Feelio</span>
              <span> <img src={heart} alt="Heart" className="xl:w-64 xl:h-36 md:h-28 rotate-30 -ml-8 md:-ml-4 max-[426px]:h-28" /> </span>  
            </div>
          </h1>
          
          <div className="flex bg-white/60 h-28 md:h-32 rounded-3xl px-7 py-6 xl:w-[28rem] md:w-[24rem] relative max-[426px]:w-[24rem] max-[426px]:h-32">
            <span className="flex">
              <SiComma className="text-pink-500 rotate-180 absolute" />
              <SiComma className="text-pink-500 rotate-180 absolute left-4" />
            </span>
            <p className="text-xl px-9 font-semibold text-purple-800 max-[426px]:px-6" style={{ fontFamily: "'Times New Roman', Times, serif" }}>Some fellings are too deep for words, but every feeling deserves a page.</p>
            <span className="flex">
              <SiComma className="text-pink-500 absolute top-14 right-10 md:top-20 max-[426px]:top-22" />
              <SiComma className="text-pink-500 absolute right-7 top-14 md:top-20 max-[426px]:top-22" />
            </span>
          </div>

          <p className="text-purple-900 mt-3 mx-10 w-[20rem] text-center">A safe place for your thoughts, emotions, and precious memories.</p>

          <div className="xl:mt-6 lg:mt-3 md:mt-2 max-[426px]:mt-4">
            <Link to="/login">
              <button className="flex bg-pink-500 text-white px-6 py-3 rounded-full items-center ml-28 hover:bg-pink-600 transition-all duration-300 hover:px-7 hover:py-4 shadow-lg hover:shadow-xl hover:text-xl hover:font-semibold cursor-pointer">
                <FaPenFancy className="text-xl mr-3 border-b-2" /> Start Writing
              </button>
            </Link>
          </div>
        </div>
        
      </div>


      <div className="bg-white/60 xl:w-[85rem] xl:h-62 lg:h-72 xl:mx-10 lg:mx-5 md:mx-3 xl:-mt-10 lg:-mt-8 md:-mt-6 z-50 rounded-4xl xl:px-8 lg:px-5 md:px-4 py-6 flex xl:gap-4 md:gap-2 max-[426px]:flex-col max-[426px]:-mt-6 max-[426px]:gap-y-4 max-[426px]:pl-5">
        <div className="relative xl:flex lg:block bg-[rgba(255,209,220,0.6)] border-2 border-white shadow-[0_0_40px_rgba(255,209,220,0.9)] rounded-4xl w-[24rem] xl:h-48 lg:h-62 md:h-64 p-2 transition-all duration-300 hover:-translate-y-3 max-[426px]:flex cursor-pointer">
          <img src={diary} alt="Diary" className="xl:h-33 xl:ml-0 lg:h-20 md:h-22 lg:ml-16 md:ml-10 max-[426px]:h-28" />
          <div className="ml-4 mt-2 max-[426px]:w-50">
            <h2 className="text-2xl text-pink-700 font-semibold md:text-xl">Private Diary</h2>
            <p className="text-lg xl:mt-4 lg:mt-2 md:text-base">Write your thoughts privately and freely</p>
          </div>
          <FaHeart className="absolute bottom-4 right-4 text-pink-400 text-xl" />
        </div>

        <div className="relative xl:flex lg:block bg-[rgba(224,187,255,0.5)] border-2 border-white shadow-[0_0_40px_rgba(224,187,255,0.5)] rounded-4xl w-[24rem] xl:h-48 lg:h-62 md:h-64 p-2 transition-all duration-300 hover:-translate-y-3 max-[426px]:flex cursor-pointer">
          <img src={secure} alt="Secure" className="xl:h-33 xl:ml-0 lg:h-20 md:h-22 lg:ml-16 md:ml-10 max-[426px]:h-28" />
          <div className="ml-4 mt-2 max-[426px]:w-50">
            <h2 className="text-2xl text-purple-700 font-semibold md:text-xl">Secure & Safe</h2>
            <p className="text-lg xl:mt-4 lg:mt-2 md:text-base">Your data is encrypted and always protected</p>
          </div>
          <FaHeart className="absolute bottom-4 right-4 text-purple-400 text-xl" />
        </div>  

        <div className="relative xl:flex lg:block bg-[rgba(255,223,128,0.3)] border-2 border-white shadow-[0_0_40px_rgba(255,223,128,0.3)] rounded-4xl w-[24rem] xl:h-48 lg:h-62 md:h-64 p-2 transition-all duration-300 hover:-translate-y-3 max-[426px]:flex cursor-pointer">
          <img src={cloud} alt="Cloud" className="xl:h-26 xl:ml-0 lg:h-20 md:h-22 lg:ml-16 md:ml-10 max-[426px]:h-28" />
          <div className="ml-4 mt-2 max-[426px]:w-50">
            <h2 className="text-2xl text-yellow-700 font-semibold md:text-xl">Cloud Storage</h2>
            <p className="text-lg xl:mt-4 lg:mt-2 md:text-base">Access your diary from anywhere, anytime</p>
          </div>
          <FaHeart className="absolute bottom-4 right-4 text-yellow-400 text-xl" />
        </div>

        <div className="relative xl:flex lg:block bg-[rgba(189,224,254,0.6)] border-2 border-white shadow-[0_0_40px_rgba(189,224,254,0.6)] rounded-4xl w-[24rem] xl:h-48 lg:h-62 md:h-64 p-2 transition-all duration-300 hover:-translate-y-3 max-[426px]:flex cursor-pointer">
          <img src={mood} alt="Mood" className="xl:h-26 xl:ml-0 lg:h-20 md:h-22 lg:ml-16 md:ml-10 max-[426px]:h-28" />
          <div className="ml-4 mt-2 max-[426px]:w-50">
            <h2 className="text-2xl text-blue-700 font-semibold md:text-xl">Mood Tracking</h2>
            <p className="text-lg xl:mt-4 lg:mt-2 md:text-base">Track your mood and understand your self better</p>
          </div>
          <FaHeart className="absolute bottom-4 right-4 text-blue-400 text-xl" />
        </div>
      </div>

      {/* banner  */}

      <div style={{backgroundImage:`url(${bannerBG})`}} className='px-48 py-5 mt-12 mx-10 bg-contain bg-center flex w-[85rem] h-[12rem] rounded-2xl'>

        <img src={openDiary} alt="" className='h-32' />

        <div className='text-center justify-center mx-30'>
          <h3 className='text-3xl font-bold text-pink-800' style={{fontFamily:"serif"}}>Ready to start your journey?</h3>
          <p className='text-purple-900 font-semibold mt-1 text-md'>Create your safe space and write your story.</p>
          <Link to="/signup">
            <button className='bg-white rounded-xl px-16 py-3 mt-4 font-bold text-pink-600 cursor-pointer hover:bg-pink-600 hover:text-white hover:text-lg hover:scale-105 transition duration-300'>
              Create your Account
            </button>
            
          </Link>
          <p className='text-sm mt-3 text-purple-800'>No credit card required.</p>
        </div>

        <img src={cup} alt="" className='h-32' />

      </div>
      

      <div className="text-2xl text-pink-800 font-semibold my-6 text-center">
        Made it 💖 for your feelings
      </div>

    </div>
  )
}

export default Hero
