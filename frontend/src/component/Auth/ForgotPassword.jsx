import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

import bgImg from '../../images/forgetPassword-bgImg.png'
import logo from '../../images/passwordLogo.png'

import { CiMail } from "react-icons/ci";  
import { CiLock } from "react-icons/ci";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";

function ForgotPassword() {
  const navigate = useNavigate()

  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // const navigate = useNavigate()

  const [showPassword, SetShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword){
      alert("Password do not match")
      return
    }

    try{
      const response = await fetch("http://127.0.0.1:8000/diary/reset_password/",{
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          confirmPassword 
        })
      })
      
      const data = await response.json()
      console.log(data);
      
      if(response.ok){
        alert("Password updated successfully")
        navigate("/login")
      }
      else{
        alert(data.error)
      }
    }catch(error){
      console.log(error);
      alert("Something went wrong")
    }
  }


  return (
    <section 
    className='h-screen w-screen bg-no-repeat bg-center relative'
    style={{backgroundImage : `url(${bgImg})`}}>

        <div className='bg-white/70 p-4 absolute top-14 right-40 w-[35rem] rounded-2xl shadow-2xl'>

          <img src={logo} alt="Password Logo" className='h-30 ml-40 mb-4' />  

          <h2 className='text-3xl text-center font-bold text-pink-800 font-caveat'>Forget Password</h2>

          <div className='text-pink-600 text-center mt-2'>
            _______ 🩷 _______
          </div>
          <p className='text-gray-500 mx-22 mt-3 text-center'>Don't worry! We'll send a verification code to your email.</p>

          {/* <input type="email" placeholder='Enter your Email' className='border-2 border-pink-200 px-5 py-3 rounded-xl font-semibold' /> */}
          
          <form onSubmit={handleSubmit}>
            <div className='flex items-center border-2 border-pink-200 px-5 py-3 rounded-xl my-4 mx-10'>
              <CiMail className='text-gray-500 text-2xl mr-3' />
              <input 
              type="email" 
              placeholder='Enter your Email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='outline-none font-semibold w-full' />
            </div>

            <div className='flex items-center border-2 border-pink-200 px-5 py-3 rounded-xl mx-10'>
              <CiLock className='text-gray-500 text-2xl mr-3' />
              <input 
              type="password" 
              placeholder='New Password' 
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              className='outline-none font-semibold w-full' />
            </div>

            <div className='flex items-center border-2 border-pink-200 px-5 py-3 rounded-xl my-4 mx-10'>
              <CiLock className='text-gray-500 text-2xl mr-3' />
              <input 
              type="password" 
              placeholder='Confirm New Password' 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='outline-none font-semibold w-full' />
            </div>

            <button type='submit' className='bg-pink-700 text-white font-bold py-3 w-[28rem] mx-10 rounded-xl mt-4 cursor-pointer'>Updated Password</button>

          </form>

          <Link to="/login" className='flex text-pink-700 mx-10 mt-3 pl-39 py-2 rounded-xl mb-3 cursor-pointer'>
            <FaArrowLeft className='mt-2 mr-2' />
            <button className=' font-semibold text-lg'>Back to Login</button>
          </Link>

        </div>
    </section>
  )
}

export default ForgotPassword
