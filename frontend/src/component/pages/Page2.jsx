import React, { useState } from 'react'

import bg1 from '../../images/1.jpg'
import bg2 from '../../images/2.png'
import bg3 from '../../images/3.png'
import sticker1 from '../../images/sticker1.png'
import sticker2 from '../../images/sticker2.png'
import sticker3 from '../../images/sticker3.png'

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Page2() {
    const [text, setText] = useState("")
    
    const wordCounter = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    const letterCounter = text.replace(/\s/g,"").length;

    const date = new Date()
    // console.log(date);

    const diary = {
        username : localStorage.getItem("username"),
        description : text, 
        words : wordCounter,
        letters : letterCounter,
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

  return (
    <>
            <section>
    
            {/* slide 2  */}
    
    
                <div 
                className='h-screen bg-center bg-cover p-10 ' 
                style={{backgroundImage: `url(${bg2})`}}>
                    <div 
                    className='bg-white/70 h-[40rem] rounded-2xl py-14 flex justify-center align-middle relative'>
                        <Link to="/diaryopt">
                            <FaArrowAltCircleLeft 
                            className=' absolute left-6 top-6 text-3xl text-red-800 cursor-pointer' />
                        </Link>

                        <span className=' absolute top-7 left-20 text-orange-900 -900/80 text-xl font-semibold'> { date.toDateString() }</span>

                        <textarea 
                        name="dearDiary" 
                        placeholder='Dear Diary...' 
                        className='w-[82rem] h-[30rem] mt-10 py-2 pr-72 border-0 outline-0 text-3xl bg-transparent text-pink-800 indent-2 rounded-2xl font-caveat'
                        value={text}
                        onChange={(e)=>setText(e.target.value)}></textarea>

                        <img 
                        src={sticker2} 
                        alt="sticker" 
                        className=' absolute bottom-0 right-0 h-[20rem]' />

                        <p 
                        className=' absolute bottom-10 left-16 text-xl font-semibold text-red-800'>
                        Words : {wordCounter} 
                        </p>

                        <p 
                        className=' absolute bottom-10 left-52 text-xl font-semibold text-red-800'>
                        Letters : {letterCounter} 
                        </p>

                        <button
                        className=' absolute top-6 right-6 text-xl font-semibold bg-red-900 text-white px-6 py-2 rounded-2xl cursor-pointer'
                        onClick={handleSave}>
                        Save Page
                        </button>

                    </div>
                </div>
    
    
            </section>
        </>
  )
}

export default Page2
