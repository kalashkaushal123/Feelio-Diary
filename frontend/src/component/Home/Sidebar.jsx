  import { useState, useEffect } from 'react'
  import { Link, Outlet } from 'react-router-dom'
  import { useLocation } from 'react-router-dom'
  import { useNavigate } from 'react-router-dom'

  import logo from '../../images/penDiary.png'
  import cloudDiary from '../../images/cloudDiary.png'

  import { IoMdHome } from "react-icons/io";
  import { PiBookOpenUserLight } from "react-icons/pi";
  import { FaRegSmile } from "react-icons/fa";
  import { CiCloudOn } from "react-icons/ci";
  import { SlCalender } from "react-icons/sl";
  import { HiTrendingUp } from "react-icons/hi";
  import { IoIosLock } from "react-icons/io";
  import { IoMdSettings } from "react-icons/io";
  import { BiSolidUserCircle } from "react-icons/bi";

  import { IoIosNotificationsOutline } from "react-icons/io";

function Sidebar({ user, isOpen, setIsOpen }) {
  
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/home"){
      navigate("/home");
      setTimeout(()=>{
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      },100)
    }else{
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("username");
    // console.log("User logout ");
    

    navigate("/login")
  }

  return (
    <>

      {/* slidebar  */}
          <section className={`xl:bg-white/50 lg:bg-white/50 md:bg-gray-100 bg-gray-100 w-fit h-[44rem] px-4 py-8 fixed top-4 bottom-4 left-4 rounded-2xl z-50
            transition-transform duration-300 lg:translate-x-0 
            ${isOpen ? "translate-x-0" : "-translate-x-[120%]"} `}>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-3xl text-pink-700 lg:hidden"
            >
              ✕
            </button>


            <div className="flex ml-2">
              <img src={logo} alt="Logo" className='h-16' />
              <div className="flex flex-col ml-4 text-pink-700">
                <span style={{fontFamily:" cursive"}} className="italic  text-3xl font-bold">Feelio</span>
                <span className="text-md">Your Safe Diary</span>
              </div>
            </div>
            <ul className=" w-56 mt-8" >
              <Link to="/home">
                <li className="flex items-center w-full px-4 py-3 rounded-xl cursor-pointer bg-pink-300/30 text-pink-700 transition-all duration-300 ">
                  <IoMdHome className="text-2xl mr-3" />
                  Home
                </li>
              </Link>
              <Link to="/diaryopt">
                <li className="flex items-center w-full px-4 py-3 rounded-xl cursor-pointer hover:bg-pink-300/30 hover:text-pink-700 transition-all duration-300">
                  <PiBookOpenUserLight className="text-2xl mr-3" />
                  My Diary
                </li>
              </Link>
              <li
              onClick={()=>scrollToSection("moodSection")}
              className="flex items-center w-full px-4 py-3 rounded-xl cursor-pointer hover:bg-pink-300/30 hover:text-pink-700 transition-all duration-300">
                <FaRegSmile className="text-2xl mr-3" />
                Mood Tracker
              </li>
              {/* <li className="flex items-center w-full px-4 py-3 rounded-xl cursor-pointer hover:bg-pink-300/30 hover:text-pink-700 transition-all duration-300">
                <CiCloudOn className="text-2xl mr-3" />
                Memories
              </li> */}
              <li 
              onClick={()=>scrollToSection("calenderSection")}
              className="flex items-center w-full px-4 py-3 rounded-xl cursor-pointer hover:bg-pink-300/30 hover:text-pink-700 transition-all duration-300">
                <SlCalender className="text-2xl mr-3" />
                Calendar
              </li>
              {/* <li className="flex items-center w-full px-4 py-3 rounded-xl cursor-pointer hover:bg-pink-300/30 hover:text-pink-700 transition-all duration-300">
                <HiTrendingUp className="text-2xl mr-3" />
                Goals
              </li>
              <li className="flex items-center w-full px-4 py-3 rounded-xl cursor-pointer hover:bg-pink-300/30 hover:text-pink-700 transition-all duration-300">
                <IoIosLock className="text-2xl mr-3" />
                Private Entries
              </li>
              <li className="flex items-center w-full px-4 py-3 rounded-xl cursor-pointer hover:bg-pink-300/30 hover:text-pink-700 transition-all duration-300">
                <IoMdSettings className="text-2xl mr-3" />
                Settings
              </li> */}

              <li className="flex items-center w-full px-4 py-3 rounded-xl cursor-pointer bg-pink-300/30 text-pink-700 hover:bg-pink-900 hover:text-white transition-all duration-300 capitalize text-xl font-semibold mt-20 mb-2">
                <BiSolidUserCircle className="text-3xl mr-3" />
                {user}
              </li>

              {/* <Link to="/login"> */}
                <li 
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 rounded-xl cursor-pointer bg-pink-300/30 text-pink-700 hover:bg-pink-900 hover:text-white transition-all duration-300 capitalize text-lg pl-10 font-semibold">
                  Logout
                </li>
              {/* </Link> */}
              
            </ul>

            <div>
              <img src={cloudDiary} alt="Cloud Diary" className="h-44" />
            </div>
          </section>
      
    </>
  )
}

export default Sidebar


