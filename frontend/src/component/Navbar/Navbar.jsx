import React from 'react'

import logo from '../../images/logo.png'
import logoName from '../../images/logo-name.png'
import { FaHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="py-4 px-12 flex relative">
        <div className="flex items-center gap-2 pt-4 pr-5 bg-white/50 h-22 rounded-xl shadow-[0_0_30px_rgba(255,255,255,1)]">
          <img src={logo} alt="logo" className="w-32 h-22 -mt-2" />
          {/* <div> */}
            <img src={logoName} alt="logo-name" className="w-30 h-10 -ml-4 -mt-2" />
            {/* <h1 className="text-3xl font-bold text-pink-500" style={{ fontFamily: "'Poppins', 'sans-serif'" }}>Feelio</h1> */}
          {/* </div> */}  
        </div>
        

        <div className="flex absolute right-20 top-10 gap-4">
          <Link to="/login">
            <div className="flex bg-white px-6 py-2.5 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,1)] text-purple-800 cursor-pointer"> 
              <IoPersonOutline className="mt-1 mr-1.5"/> 
              Login
            </div>
          </Link>
          <Link to="/signup">
            <div className="flex bg-[#FF69B4] text-white px-6 py-2.5 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,1)] cursor-pointer"> 
              <FaHeart className="mt-1 mr-1.5" /> 
              Sign Up
            </div>
          </Link>
          <div className="bg-white px-3  rounded-full shadow-[0_0_30px_rgba(255,255,255,1)] text-purple-900 cursor-pointer"> 
            <FaMoon className="mt-3 text-xl" /> 
          </div>
        </div>
      </div>
  )
}

export default Navbar
