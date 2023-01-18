import React from 'react'

export default function Footer() {
  return (
    <>
    <a href="http://ericpolley.com" title='Hire a Professional' alt="Hire a Software Developer">
    <div className='flex flex-col w-full h-40 bg-slate-800 text-white text-md md:text-2xl  
    justify-center items-center border-t-4 border-slate-900'> <div className='w-[90%] lg:w-[60%] flex flex-row justify-center items-center text-center border-4 border-black rounded-xl
     bg-slate-900 hover:bg-slate-800 shadow-lg mb-12 mt-6 p-4 shadow-slate-500 hover:text-blue-300 active:lg:w-[58%] active:w-[88%]
     active:lg:h-[60%] active:h-[50%]  active:text-blue-200 hover:shadow-2xl hover:shadow-slate-500'>
     
     <p className=' cursor-pointer text-blue-400'>Do you need a website built fast? <br /> Hire a professional today!</p>
     
     </div>
     
   </div>
   </a>
   
   </>
  )
}
