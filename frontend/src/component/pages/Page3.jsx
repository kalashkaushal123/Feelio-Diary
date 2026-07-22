import React, { useState } from 'react'

import bg1 from '../../images/1.jpg'
import bg2 from '../../images/2.png'
import bg3 from '../../images/3.png'
import sticker1 from '../../images/sticker1.png'
import sticker2 from '../../images/sticker2.png'
import sticker3 from '../../images/sticker3.png'

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Page3() {
    const [text, setText] = useState("")
    
    const wordCounter = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    
    const letterCounter = text.replace(/\s/g,"").length;
    
    const currentDate = new Date()
//   console.log(currentDate);

    const formattedDate = currentDate.toISOString().split("T")[0];

    const diary = {
        username : localStorage.getItem("username"),
        date : formattedDate,
        description : text, 
        words : wordCounter,
        letters : letterCounter,
        page_type : "page3",
    }

    const handleSave = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/diary/save_diary/",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(diary),
            })

            const data = await response.json();

            // console.log(data);
            // console.log( "Username : ",data.username);

            if (response.ok) {
                alert("Diary Saved Successfully");
            } else {
                alert(data.error || "Failed to Save Diary");
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    const formatNumber = (number) => {
      if(number >= 1000000){
        return (number/1000000).toFixed(1).replace(".0", "") + "M";
      }
      if(number >= 1000){
        return(number/1000).toFixed(1).replace(".0","") + "K";
      }
      return number
    }
    
  return (
    <>
            <section>
    
            {/* slide 3  */}
    
    
                <div 
                className='xl:h-[45.6rem] bg-center bg-cover xl:p-10 lg:p-10 md:p-5 p-3' 
                style={{backgroundImage: `url(${bg3})`}}>
                    <div 
                    className='bg-white/70 h-[40rem] rounded-2xl py-14 flex justify-center align-middle relative'>
                        <Link to="/diaryopt">
                            <FaArrowAltCircleLeft 
                            className=' absolute left-6 top-6 text-3xl text-orange-900 cursor-pointer' />
                        </Link>

                        <span className=' absolute top-7 left-20 text-orange-900 -900/80 text-xl font-semibold'> { currentDate.toDateString() }</span>

                        <textarea 
                        name="dearDiary" 
                        placeholder='Dear Diary...' 
                        className='w-[82rem] h-[30rem] mt-10 py-2 xl:pr-72 lg:pr-70 md:pr-52 xl:pl-5 lg:pl-8 md:pl-4 pl-2 border-0 outline-0 text-3xl bg-transparent text-pink-800 indent-2 rounded-2xl font-caveat'
                        value={text}
                        onChange={(e)=>setText(e.target.value)}></textarea>

                        <img 
                        src={sticker3} 
                        alt="sticker" 
                        className=' absolute bottom-0 right-0 xl:h-[20rem] lg:h-[20rem] md:h-[16rem] h-[12rem]' />

                        <p 
                        className=' absolute bottom-10 xl:left-16 lg:left-16 md:left-16 left-4 text-xl font-semibold text-orange-900'>
                        Words : {formatNumber(wordCounter)} 
                        </p>

                        <p 
                        className=' absolute bottom-10 xl:left-52 lg:left-52 md:left-52 left-32 text-xl font-semibold text-orange-900'>
                        Letters : {formatNumber(letterCounter)} 
                        </p>

                        <button
                        className=' absolute top-6 right-6 text-xl font-semibold bg-orange-900 text-white px-6 py-2 rounded-2xl cursor-pointer'
                        onClick={handleSave}>
                        Save Page
                        </button>

                    </div>
                </div>
            
    
            </section>
        </>
  )
}

export default Page3
