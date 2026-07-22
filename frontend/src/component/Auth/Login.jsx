import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import bgImg1 from '../../images/bg-image-login.png'
import boy from '../../images/login-boy.png'
import heartIcon from '../../images/heart-icon.png'
import cloud from '../../images/cloud.png'
import diary from '../../images/diary.png'

import { GoHeartFill } from "react-icons/go";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaHeart } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useLocation } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const user = {
    username, 
    password 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/diary/login/", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(user)
    })

    if (!response.ok) {
      const text = await response.text();
      console.log(text); // You'll see the HTML error page or server error
      return;
    }

    const data = await response.json()
        console.log( "Username : ",data.username);

    console.log(data);

    if(response.ok){
      alert("Login Successfully")
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      localStorage.setItem("username", data.username);

      console.log(localStorage.getItem("username", data.username));

      navigate("/home",{
        state: {
          username: username
        }
      })
    }else{
      alert(data.error || "Login failed")
      console.log(data);
    }
  }

  return (
    <div className='w-screen h-full bg-gradient-to-r from-purple-300 to-pink-300 p-16 max-[769px]:p-8'>
      <div className="h-[37.5rem] bg-cover bg-center rounded-3xl border-2 border-white flex" style={{ backgroundImage: `url(${bgImg1})` }}>

        {/* back */}
        <Link to="/">
          <FaArrowLeftLong className='text-4xl bg-pink-800 rounded-full p-2 text-white mt-5 font-bold ml-5'/>
        </Link>

        {/* Left side  */}

        <div className='my-14 xl:ml-30 lg:ml-4 xl:mr-36 lg:mr-8 flex relative xl:w-[38rem] lg:w-[45rem] md:w-[38rem] max-[769px]:mt-16 max-[769px]:-ml-10'>
          <div className=' rounded-3xl w-[30rem] h-[33rem] bg-pink-100/70 p-6 max-[426px]:w-[20rem]'>
            <img src={heartIcon} alt="heart icon" className='h-20 ml-40 mb-5 max-[426px]:h-16 max-[426px]:ml-28'/>
            <h1 className='text-4xl font-bold text-pink-800 text-center' style={{fontFamily:'serif'}}>Welcome</h1>
            <p className='flex ml-33 text-[#7c7575] mb-10 max-[426px]:ml-14'>Glad to see you again <GoHeartFill className='mt-1 ml-1 text-pink-400' /> </p>

            <form className='mx-4 max-[426px]:mx-0' onSubmit={handleSubmit}>

              {/* name  */}
              <div className='flex shadow-lg bg-white/70 px-5 py-2 text-pink-900 rounded-lg'>
                <FaUser className="mr-3 text-2xl" />
                <input 
                type="text" 
                name='username' 
                placeholder='Enter Your Name' 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                className='text-xl w-72 ml-2 outline-none' />
              </div>

              {/* password  */}
              <div className='flex shadow-lg bg-white/70 px-5 py-2 text-pink-900 rounded-lg mt-5'>
                <FaLock className="mr-3 text-2xl" />
                <input 
                type={showPassword ? "text" : "password"} 
                name='password' 
                placeholder='Enter Password' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className='text-xl w-72 ml-2 outline-none' />

                <span
                className='text-2xl mt-0.5 mr-3'
                onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* forget password  */}
              <div className='text-right mt-5 mr-3 font-semibold text-pink-900 underline'>
                <Link to="/forgetPassword">
                  Forget Password ?
                </Link>
              </div>

              {/* login button  */}
              <button
              type='submit'
              className='bg-pink-900 text-white font-bold text-lg w-full py-2 mt-8 cursor-pointer'>
                Login
              </button>

              <p className='text-center my-5'>
                Don't have an account?
                <Link to="/signup" className='text-pink-900 font-semibold underline'>
                    Sign Up
                </Link>
              </p>
            </form>

            
          </div>
          <div className='flex absolute bottom-0 right-0 max-[1025px]:-right-20 max-[1025px]:-bottom-14 max-[769px]:-right-8'>
              <img src={cloud} alt="" className='h-20' />
              <img src={diary} alt="" className='h-20 -ml-7 max-[426px]:hidden'/>
          </div> 
          <div className=''>
            <FaHeart className='text-2xl text-pink-600/70 absolute bottom-22 right-14 rotate-10 max-[1025px]:-right-8 max-[769px]:-right-0' />
            <FaHeart className='text-2xl text-pink-600/50 absolute bottom-40 right-3 rotate-20 max-[1025px]:-right-2 max-[769px]:right-9' />
            <FaHeart className='text-2xl text-pink-600/30 absolute bottom-60 right-10 rotate-20 max-[1025px]:-right-10 max-[769px]:right-0' />
            
          </div> 
        </div>


        {/* Right side  */}

        <img src={boy} alt="boy" className='xl:h-11/12 xl:mt-12 xl:ml-0 lg:h-10/12 lg:mt-26 lg:ml-3 max-[769px]:hidden' />

      </div>
    </div>
  )
}

export default Login


