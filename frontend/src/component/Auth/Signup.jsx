import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import bgImg1 from '../../images/bg-image-login.png'
import girl from '../../images/signup-girl.png'
import heartIcon from '../../images/heart-icon.png'
import cloud from '../../images/cloud.png'
import diary from '../../images/diary.png'

import { GoHeartFill } from "react-icons/go";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaHeart } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";


function Signup() {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='w-screen h-full bg-gradient-to-r from-purple-300 to-pink-300 p-16 max-[426px]:p-6'>
      <div className="h-[37.5rem] bg-cover bg-center rounded-3xl border-2 border-white flex" style={{ backgroundImage: `url(${bgImg1})` }}>

        {/* back */}
        <Link to="/">
          <FaArrowLeftLong className='text-4xl bg-pink-800 rounded-full p-2 text-white mt-5 font-bold ml-5'/>
        </Link>


        {/* Left side  */}

        <img src={girl} alt="boy" className='xl:h-11/12 xl:mt-12 xl:ml-28 lg:h-10/12 lg:mt-26 lg:-ml-10 max-[769px]:hidden' />

        {/* Right side  */}

        <div className='my-14 xl:ml-44 flex relative w-[38rem] lg:ml-5 md:mt-16 max-[426px]:my-20 max-[426px]:-ml-10 max-[426px]:w-[23rem]'>
          <div className=' rounded-3xl w-[30rem] h-[32rem] bg-pink-100/70 p-6 max-[426px]:w-[21rem]'>
            {/* <img src={heartIcon} alt="heart icon" className='h-20 ml-40 mb-5' /> */}
            <h1 className='text-4xl font-bold text-pink-800 text-center' style={{fontFamily:'serif'}}>Signup </h1>
            <p className='flex ml-33 text-[#7c7575] mb-10 max-[426px]:ml-18'>Glad to see you again <GoHeartFill className='mt-1 ml-1 text-pink-400' /> </p>

            <form className='mx-4 max-[426px]:mx-0'>

              {/* name  */}
              <div className='flex shadow-lg bg-white/70 px-5 py-2 text-pink-900 rounded-lg'>
                <FaUser className="mr-3 text-2xl" />
                <input 
                  type="text" 
                  name='name'
                  placeholder='Enter Name' 
                  className='text-xl w-72 ml-2 outline-none'
                  required />
              </div>

              {/* email  */}
              <div className='flex shadow-lg bg-white/70 px-5 py-2 text-pink-900 rounded-lg mt-5'>
                <FaUser className="mr-3 text-2xl" />
                <input 
                  type="text" 
                  name='email'
                  placeholder='Enter Email' 
                  className='text-xl w-72 ml-2 outline-none' 
                  required
                  />
              </div>

              {/* password  */}
              <div className='flex shadow-lg bg-white/70 px-5 py-2 text-pink-900 rounded-lg mt-5'>
                <FaLock className="mr-3 text-2xl" />
                <input 
                  type={showPassword ? "text" : "password"}
                  name='email' 
                  placeholder='Enter Password' 
                  className='text-xl w-72 ml-2 outline-none' 
                  required
                  />

                <span
                className='text-2xl mt-0.5 mr-3'
                onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* confirm password  */}
              <div className='flex shadow-lg bg-white/70 px-5 py-2 text-pink-900 rounded-lg mt-5'>
                <FaLock className="mr-3 text-2xl" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  name='confirmPassword'
                  placeholder='Enter Confirm Password' 
                  className='text-xl w-72 ml-2 outline-none' 
                  required
                  />

                <span
                className='text-2xl mt-0.5 mr-3'
                onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* login button  */}
              <button className='bg-pink-900 text-white font-bold text-lg w-full py-2 mt-10'>
                Signup
              </button>

              <p className='text-center my-5'>
                Already have an account?
                <Link to="/login" className='text-pink-900 font-semibold underline'>
                    Login
                </Link>
              </p>
            </form>

            
          </div>
          <div className='flex absolute bottom-0 right-0 max-[426px]:-bottom-25 max-[426px]:-right-12'>
              <img src={cloud} alt="" className='h-20' />
              <img src={diary} alt="" className='h-20 -ml-7'/>
          </div> 
          <div className=''>
            <FaHeart className='text-2xl text-pink-600/70 absolute bottom-22 right-14 rotate-10 max-[426px]:-right-4 max-[426px]:bottom-7' />
            <FaHeart className='text-2xl text-pink-600/50 absolute bottom-40 right-3 rotate-20 max-[426px]:right-2 max-[426px]:bottom-30' />
            <FaHeart className='text-2xl text-pink-600/30 absolute bottom-60 right-10 rotate-20 max-[426px]:-right-4 max-[426px]:bottom-50' />
            
          </div> 
        </div>


      </div>
    </div>
  )
}

export default Signup
