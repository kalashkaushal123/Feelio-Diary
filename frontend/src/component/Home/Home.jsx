  import { useState, useEffect } from 'react'
  import { Link, Outlet } from 'react-router-dom'
  import { useLocation } from 'react-router-dom'

  import bgImage from "../../images/home-bgImage.png"
  // import homeChar from "../../images/home-char.png"  
  import Char from '../../images/char.png'
  import logo from '../../images/penDiary.png'
  import cloudDiary from '../../images/cloudDiary.png'
  import diary from '../../images/diary.png'
  import penDiary from '../../images/penDiary.png'
  import streakImage from '../../images/streak.png'
  import heart from '../../images/heart.png'

  import { IoMdHome } from "react-icons/io";
  import { PiBookOpenUserLight } from "react-icons/pi";
  import { FaRegSmile } from "react-icons/fa";
  import { CiCloudOn } from "react-icons/ci";
  import { SlCalender } from "react-icons/sl";
  import { HiTrendingUp } from "react-icons/hi";
  import { IoIosLock } from "react-icons/io";
  import { IoMdSettings } from "react-icons/io";
  import { FaBars } from "react-icons/fa";

  import { IoIosNotificationsOutline } from "react-icons/io";

  import Sidebar from './Sidebar'
  import TodyaDiary from './TodyaDiary'
  import Mood from './Mood'
  import Calender from './Calender'
  import Footer from './Footer'


  function Home() {

    const [user, setUser] = useState({username: ""})
    const [diary, setDiary] = useState(0)
    const [streak, setStreak] = useState(0)
    const [memory, setMemory] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

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
          console.log(token);
          
        } catch (error) {
          console.log(error)
        }
        
      }

      fetchProfile();
        
    },[])

    
    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const token = localStorage.getItem("access");

                console.log("Token : ",token);

                if(!token){
                  console.log("No access token found");
                  return;
                }
                

                const response = await fetch(
                    "http://127.0.0.1:8000/diary/dashboard/",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                console.log("Dashboard Response:", response);

                const data = await response.json();

                console.log("Dashboard Data:", data);

                if (!response.ok) {
                    console.log("Dashboard Error:", data);
                    return;
                }

                setDiary(data.entries);
                setMemory(data.memories);
                setStreak(data.streak);

            } catch (error) {
                console.log("Dashboard Fetch Error:", error);
            }
        };

        fetchDashboard();

    }, []);
      

    const formatNumber = (number) => {
      if(number >= 1000000){
        return (number/1000000).toFixed(1).replace(".0", "") + "M";
      }
      if(number >= 1000){
        return(number/1000).toFixed(1).replace(".0","") + "K";
      }
      return number
    }


    const currentHour = new Date().getHours();

    let greeting;

    if(currentHour < 12){
      greeting = "Good Morning";
    } else if(currentHour < 18){
      greeting = "Good Afternoon";
    } else{
      greeting = "Good Evening"
    }
      
    
    
    return (
      <div className="relative h-[60rem]">
        <div
        style={{backgroundImage:`url(${bgImage})`}}
        className="fixed inset-0 bg-cover bg-center -z-50">

        

        </div>

          {/* slidebar  */}

        {/* {
          isOpen ? (
            <Sidebar user={user.username || "User"} isOpen={isOpen} setIsOpen={setIsOpen}></Sidebar>
          ) : (
            <FaBars onClick={() => setIsOpen(true)} className='fixed top-5 left-5 z-[60] text-3xl text-pink-700 cursor-pointer lg:hidden' />
          )
        } */}
        {/* <FaBars />/ */}

        <FaBars 
        onClick={() => setIsOpen(true)} 
        className='fixed top-5 left-5 z-[60] text-3xl text-pink-700 cursor-pointer lg:hidden' />

        <Sidebar 
        user={user.username || "User"} 
        isOpen={isOpen} setIsOpen={setIsOpen}></Sidebar>
        

          {/* background image  */}

          <section className=''>
            <div
            style={{backgroundImage:`url(${Char})`}}
            alt="Home Character" className="absolute xl:right-5 lg:-right-8 md:-right-22 xl:top-[6rem] lg:top-[10.8rem] md:top-[10rem] xl:w-[60rem] lg:w-[50rem] md:w-[45rem] xl:h-[65rem] lg:h-[50rem] md:h-[45rem] bg-contain bg-no-repeat pointer-events-none -z-50">
            </div>  
          
          </section>

          <section className=' absolute bg-white/60 text-purple-900/80 p-6 rounded-4xl xl:right-32 lg:right-0 md:right-0 xl:top-24 lg:top-18 md:top-22 -rotate-15 xl:block lg:block md:block hidden'>
            <span className='text-pink-700 font-semibold text-lg capitalize'>
              Hii {user.username || "User"} 👋🏻 ,
            </span> <br />
            Ready to write 
            today's memories?
          </section>
        

        {/* Main Content  */}

        <section className="absolute top-0 xl:left-80 lg:left-72 md:left-10 right-4 bottom-4 ">

          {/* head  */}

          <section className="flex flex-col gap-2 text-gray-500 mt-20 xl:text-2xl lg:text-2xl md:text-2xl text-xl font-semibold">
            <span>{greeting}</span>
            <span className="xl:text-6xl lg:text-6xl md:text-6xl text-5xl font-bold text-pink-800 capitalize">{ user.username || "User" }</span>
            <span>Glad to see you here!</span>
          </section>


          <section className='bg-white/60 rounded-2xl text-center w-70 mt-10 xl:py-6 lg:py-6 md:py-6 py-3 xl:px-10 lg:px-10 md:px-10 px-4 gap-3 relative'>
            <span className='text-pink-600 font-bold '>
              — ❤️ —
            </span> <br />
            <span className='text-purple-900/80 font-semibold text-lg'>
              "Write what your heart cannot say aloud."
            </span> <br />
            <span className='text-pink-600 font-bold'>
              — ❤️ —
            </span>
          </section>


          <section className='mt-6'>
            <TodyaDiary />
          </section>


          <section className='flex' id='moodSection'>
            <section className='xl:mt-20 lg:mt-20 md:mt-20 mt-80'>
              <Mood />
            </section>

            <section className='xl:mt-20 lg:mt-12 md:-mt-4 mt-10 absolute xl:right-12 lg:right-0 md:-right-12' id='calenderSection'>
              <Calender />
            </section>
          </section>


          <section className='xl:flex lg:block md:flex xl:gap-3 md:gap-5 xl:w-[40rem] lg:w-[25rem] mt-10 rounded-2xl'>
            <div className='xl:w-48 lg:w-48 md:w-48 w-70 xl:ml-0 lg:ml-0 md:ml-0 ml-10 h-32 bg-white/50 rounded-2xl flex py-6 xl:px-3 lg:px-3 md:px-3 px-10 cursor-pointer max-[426px]:mb-3'>
              <img src={penDiary} alt="diary" className='h-16 mr-4 mt-3' />
              <div className='xl:ml-0 lg:ml-0 md:ml-0 ml-5'>
                <h3 className='text-purple-900 font-semibold'>Entries</h3>
                <p className='text-purple-900 font-bold text-3xl'>{formatNumber(diary)}</p>
                <p className='text-purple-900 text-xs'>Total Entries</p>
              </div>
            </div>
            <div className='xl:flex lg:flex md:flex block xl:gap-3 lg:gap-5 md:gap-5 xl:mt-0 lg:mt-4'>
              <div className='xl:w-48 lg:w-48 md:w-48 w-70 xl:ml-0 lg:ml-0 md:ml-0 ml-10 h-32 bg-white/50 rounded-2xl flex py-6 xl:px-3 lg:px-3 md:px-3 px-10 cursor-pointer max-[426px]:mb-3'>
                <img src={streakImage} alt="diary" className='h-16 mr-4 mt-3' />
                <div className='xl:ml-0 lg:ml-0 md:ml-0 ml-5'>
                  <h3 className='text-purple-900 font-semibold'>Streak</h3>
                  <p className='text-purple-900 font-bold text-3xl'>{formatNumber(streak)}</p>
                  <p className='text-purple-900 text-xs'>Days in a row</p>
                </div>
              </div>
              <div className='xl:w-48 lg:w-48 md:w-48 w-70 xl:ml-0 lg:ml-0 md:ml-0 ml-10 h-32 bg-white/50 rounded-2xl flex py-6 xl:px-3 lg:px-3 md:px-3 px-10 cursor-pointer'>
                <img src={heart} alt="diary" className='h-12 mr-4 mt-5' />
                <div className='xl:ml-0 lg:ml-0 md:ml-0 ml-5'>
                  <h3 className='text-purple-900 font-semibold'>Memories</h3>
                  <p className='text-purple-900 font-bold text-3xl'>{formatNumber(memory)}</p>
                  <p className='text-purple-900 text-xs'>Saved Memories</p>
                </div>
              </div>
            </div>
          </section>

          <section className='mt-12 pb-3'>
            <Footer />
          </section>

        </section>

      </div>
    )
  }

  export default Home

  