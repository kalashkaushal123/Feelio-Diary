import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import bg1 from '../../images/1.jpg';
import bg2 from '../../images/2.png';
import bg3 from '../../images/3.png';
import sticker1 from '../../images/sticker1.png';
import sticker2 from '../../images/sticker2.png';
import sticker3 from '../../images/sticker3.png';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

function PrevPage() {

    const { id } = useParams();
    const [diary, setDiary] = useState(null);

    useEffect(() => {
        const fetchDiary = async () => {
            const token = localStorage.getItem("access");
            const response = await fetch(`http://127.0.0.1:8000/diary/diary/${id}`,{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            const data = await response.json();
            setDiary(data);
        }
        fetchDiary();
    }, [id]);

    if(!diary){
        return <h2>Loading...</h2>
    }

    let background = bg1;
    let sticker = sticker1;

    if(diary.page_type === "page2"){
        background = bg2;
        sticker = sticker2;
    }

    if(diary.page_type === "page3"){
        background = bg3;
        sticker = sticker3;
    }

  return (
    <div
    className='h-screen bg-cover p-10'
    style={{backgroundImage : `url(${background})`}}>

        <div className='bg-white/70 h-[40rem] rounded-2xl py-14 flex justify-center align-middle relative'>
            
            <Link to="/diaryopt">
                <FaArrowAltCircleLeft 
                className=' absolute left-6 top-6 text-3xl text-orange-900 cursor-pointer' />
            </Link>

            <span className=' absolute top-7 left-20 text-orange-900 text-xl font-semibold'>
                {diary.date}
            </span>

            <textarea readOnly value={diary.description} className='w-full h-[30rem] mt-10 ml-18 py-2 pr-72 border-0 outline-0 text-3xl bg-transparent text-pink-800 indent-2 rounded-2xl font-caveat'></textarea>

            <img src={sticker} alt="" className='absolute bottom-0 right-0 h-[20rem]' />

            <div className='absolute bottom-10 left-16 text-xl font-semibold text-orange-900'>
                Words : {diary.words}
            </div>

            <div className='absolute bottom-10 left-52 text-xl font-semibold text-orange-900'>
                Letters : {diary.letters}
            </div>

        </div>
      
    </div>
  )
}

export default PrevPage
      