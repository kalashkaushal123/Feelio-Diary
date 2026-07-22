import React, { useState } from 'react'

function calender() {
  const [currentDate] = useState(new Date())
  const today = new Date()
  
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()

  const monthName = currentDate.toLocaleString("default",{
    month:'long'
  })

  const firstDay = new Date(year, month, 1).getDay()
  const totalDay = new Date(year, month + 1, 0).getDate()

  // console.log(firstDay);
  // console.log(currentDate);
  // console.log(totalDay);
  
  const startDay = firstDay === 0 ? 6 : firstDay-1
  const days = []

  for(let i=0; i<startDay; i++){
    days.push("")
  }

  for(let i=1; i<=totalDay; i++){
    days.push(i)
  }


  return (
    <section className='xl:w-[28rem] lg:w-[21rem] md:w-[22rem] w-[23rem] bg-white/60 rounded-2xl xl:py-5 lg:py-3 md:py-3 py-5 xl:px-8 lg:px-3 md:px-2 px-4 -mt-5'>
      <h2 className='text-purple-900 font-bold text-xl text-center xl:mb-8 lg:5'>
        {monthName} {year}
      </h2>

      <div className='grid grid-cols-7 gap-2 text-purple-800/80 font-semibold my-4 ml-3'>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thr</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>

        {days.map((day, index) => {
          const isToday = day === today.getDate() && 
                          month === today.getMonth() && 
                          year === today.getFullYear()
          return (
            <div
            key={index}
            className={` xl:h-12 lg:h-9 md:h-8 w-12 flex items-center justify-center rounded-full 
            ${isToday ? "bg-pink-700 text-white" : ""}`}>
              {day}
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default calender
