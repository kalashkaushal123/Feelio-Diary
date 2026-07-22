import React, { useEffect, useState } from 'react'

import diaryBg from '../../images/diary-bgImg.png'
import slide1 from '../../images/slide1.png'
import slide2 from '../../images/slide2.png'
import slide3 from '../../images/slide3.png'
import cardBg from '../../images/cardBg.png'

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function DiaryOpt() {
    const [user, setUser] = useState({username: ""})
    const [history, setHistory] = useState([])

    useEffect(()=>{
      const fetchProfile = async () => {
        try {
          const token = localStorage.getItem("access")
          const response = await fetch("http://127.0.0.1:8000/diary/profile/",{
            headers: {
              Authorization : `Bearer ${token}`,
            },
          })
          // console.log("Profile Data : ",response);
          
          if(!response.ok){
            setUser(response)
          }
          const data = await response.json();
          // console.log(data);

          setUser(data)
        //   console.log(token);
          
        } catch (error) {
          console.log(error)
        }
        
      }

      fetchProfile();
        
      },[])

    
    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const token = localStorage.getItem("access")
                const response = await fetch("http://127.0.0.1:8000/diary/diary_history/",{
                    headers: {
                        Authorization : `Bearer ${token}`,
                    }
                })
                const data = await response.json()
                // console.log(data);

                setHistory(data)

            } catch (error) {
                console.log(error);
            }
        }
        fetchHistory()
    }, [])

    const date = new Date()


  return (
    <div style={{backgroundImage:`url(${diaryBg})`}} className=' bg-no-repeat xl:h-[45.6rem] w-screen xl:p-16 lg:p-16 md:p-6 p-3'>
        <div className='bg-white/70 h-full w-full rounded-2xl pt-5 xl:pb-0 lg:pb-5 md:pb-6 pb-10'>
            {/* back */}
            <div className='flex'>
                <Link to="/home">
                    <FaArrowLeftLong className='text-4xl bg-pink-600 rounded-full p-2 text-white font-bold xl:ml-5 lg:ml-5 md:ml-3'/>
                </Link>
                <div className='xl:ml-8 lg:ml-8 md:ml-3 h-[34rem] w-[80rem] overflow-y-scroll no-scrollbar'>
                    <p className=' text-xl font-semibold mt-3 text-purple-800/60 capitalize'>Welcome {user.username || "User"} , Select your Page</p>

                    <h2 className='text-4xl mt-3 mb-1 font-bold text-pink-800'>Your Diary Pages</h2>
                    <span className='text-gray-500 font-semibold text-sm'>Choose a page to start writing your throughts...</span>
                
                    <div className='mt-8'>
                        <div className='flex'>
                            {/* <FaArrowRight className='text-purple-900 text-2xl mx-3 mt-1' /> */}
                            <h3 className='text-purple-800 text-xl font-bold'>Start a New Page </h3>    
                        </div>
                        <div className='mt-5 xl:flex lg:flex md:flex block xl:gap-5 lg:gap-5 md:gap-3 xl:w-[60rem] lg:w-[48rem] md:w-[40rem]'>
                            <Link to="/page1">
                                <img src={slide1} alt="" className='h-40 rounded-2xl mb-4 md:mb-0 lg:mb-0 xl:mb-0' />
                            </Link>
                            <Link to="/page2">
                                <img src={slide2} alt="" className='h-40 rounded-2xl mb-4 md:mb-0 lg:mb-0 xl:mb-0' />
                            </Link>
                            <Link to="/page3">
                                <img src={slide3} alt="" className='h-40 rounded-2xl mb-4 md:mb-0 lg:mb-0 xl:mb-0' />
                            </Link>
                        </div>
                    </div>

                    <div className='mt-8'>

                        {/* <FaArrowRight className='text-purple-900 text-2xl mx-3 mt-1' /> */}
                        <h3 className='text-purple-800 text-xl font-bold'>Your Diary History </h3>
                        
                        {/* <div className='mt-5 flex gap-5'>
                            <Link>
                                <img src={slide1} alt="" className='h-40 rounded-2xl' />
                            </Link>
                        </div> */}

                        {
                            history.length === 0 ? (
                                <div className='mt-10 text-center'>

                                    <h2 className='text-2xl font-semibold text-purple-900'>
                                        There is no History.
                                    </h2>

                                    <p className='text-gray-800'>
                                        Now, write your views, throughts and emotions ❤️
                                    </p>

                                </div>
                            ) : (
                                <div className='mt-5 flex gap-5 flex-nowrap mb-10 h-78 overflow-x-auto overflow-y-hidden no-scrollbar xl:mr-16 lg:mr-12 md:mr-8'>
                                    {history.map((item, index) => (
                                        <Link key={item.id} to={`/prevpage/${item.id}`} className='shrink-0'>
                                            <div className='rounded-2xl shadow-lg p-4 w-56 hover:scale-105 duration-300 my-5' style={{backgroundImage: `url(${cardBg})`}}>
                                                <img src={slide1} alt="" className='h-36 w-full rounded-xl object-cover' />

                                                {/* <p className='mt-3 text-pink-700 font-bold'>Page #{history.length - index}</p> */}

                                                <p>
                                                    <span className='text-sm text-gray-700'>{ item.date }</span>
                                                    {/* <span>{  }</span> */}
                                                </p>

                                                <p className='text-gray-600 text-sm'>{item.data}</p>

                                                <p className='mt-2 text-purple-800 line-clamp-3 overflow-hidden w-48 h-6 truncate'>{item.description}</p>

                                                <div className='mt-3 flex justify-between text-sm text-gray-700'>
                                                    <span>{item.words} Words</span>
                                                    <span>{item.letters} Letters</span>
                                                </div>

                                            </div>

                                        </Link>
                                    ))}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default DiaryOpt
