import React from 'react'
import T01html from './T01html'
import { useNavigate } from 'react-router'
import T03boiler from './T03boiler';
import T04linkcss from './T04linkcss';
import T05flexbox from './T05flexbox';
import T10boot from './T10boot';
import T02htmltext from './T02htmltext';

export default function Home() {
    const navigate = useNavigate();
  return (
    <main className='flex justify-evenly flex-wrap items-center text-center'>



<article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl'>
<div onClick={(()=>navigate('/T01'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T01html/> </div> </article>

    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl'>
<div onClick={(()=>navigate('/T02'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T02htmltext /> </div> </article>

    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl'>
<div onClick={(()=>navigate('/T03'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T03boiler /> </div> </article>

    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl'>
<div onClick={(()=>navigate('/T04'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T04linkcss /> </div> </article>

    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl'>
<div onClick={(()=>navigate('/T05'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T05flexbox /> </div> </article>



    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl'>
<div onClick={(()=>navigate('/T10'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T10boot /> </div> </article>





    </main>
  )
}
