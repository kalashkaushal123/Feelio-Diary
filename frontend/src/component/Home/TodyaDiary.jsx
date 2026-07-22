import React from 'react'

import diary from '../../images/diary.png'
import penDiary from '../../images/penDiary.png'

import { SiComma } from "react-icons/si";
import { Link } from 'react-router-dom';

function TodyaDiary() {
  return (
    <>
            <section className='xl:w-[22rem] lg:w-[22rem] md:w-[22rem] w-[23rem] bg-white/60 rounded-2xl flex flex-col items-center text-center py-5'>
                {/* <img src={diary} alt="" className='h-10 ' />
                <h2 className='text-2xl font-bold text-pink-600'>Today's Diary</h2>
                <p className='w-48 text-center text-gray-500'>Write your throughts and feelings 💖</p> */}
                <img src={penDiary} alt="" className='xl:h-28 lg:h-28 md:h-28 h-24'/>

                <Link to="/diaryopt">
                    <button className=' bg-gradient-to-l to-pink-600 from-orange-500 text-white px-14 py-2 rounded-3xl font-semibold my-3 shadow-2xl cursor-pointer'>+ Write New Entry</button>
                </Link>

                <p className='relative'>
                    <span>
                        <SiComma className="text-pink-500 rotate-180 absolute -ml-3 text-sm" />
                        <SiComma className="text-pink-500 rotate-180 absolute left-0 text-sm" />
                    </span>
                    <span className='ml-6 text-sm text-gray-700'>
                        Your story matters. Let your feeling flow
                    </span> 
                    {/* <br />
                    <span className='ml-6 text-sm text-gray-700'>
                        
                    </span> */}
                    <span>
                        <SiComma className="text-pink-500 absolute top-1 -right-5 text-sm" />
                        <SiComma className="text-pink-500 absolute -right-8 top-1 text-sm" />
                    </span>
                </p>
            </section>
      
    </>
  )
}

export default TodyaDiary
