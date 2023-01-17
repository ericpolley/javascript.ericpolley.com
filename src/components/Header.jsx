import React from 'react'
import { useNavigate } from 'react-router'

export default function Header() {
    const navigate = useNavigate(); 
  return (
    <div className='flex flex-col w-full h-16 shadow-xl bg-slate-800 text-white text-md md:text-4xl
     justify-center items-center fixed border-b-4 border-slate-900'> <div className='w-[90%] lg:w-[60%] flex flex-row justify-between'>
      <p onClick={(()=>navigate('/'))} className=' cursor-pointer'>Javascript Tutorials - Eric Polley</p>
      <p onClick={(()=>navigate('/'))} className=' cursor-pointer text-blue-400 hover:text-blue-300 active:text-blue-200'>Home</p>
      </div>
    </div>
  )
}
