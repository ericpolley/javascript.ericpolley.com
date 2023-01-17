import React from 'react'
import T01html from './T01html'
import { useNavigate } from 'react-router'
import T03boiler from './T03boiler';
import T04linkcss from './T04linkcss';
import T05flexbox from './T05flexbox';
import T02htmltext from './T02htmltext';
import T06 from './T06imagehtml';
import T07 from './T07color';
import T08 from './T08csbox';
import T09 from './T09github';
import T12boot from './T12boot';
import T10 from './T10customdomain';
import T11 from './T11updategithub';

export default function Home() {
    const navigate = useNavigate();
  return (
    <main className='flex justify-evenly flex-wrap items-center text-center'>



<article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl shadow-slate-600 hover:shadow-slate-500'>
<div onClick={(()=>navigate('/T01'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T01html/> </div> </article>

    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl shadow-slate-600 hover:shadow-slate-500'>
<div onClick={(()=>navigate('/T02'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T02htmltext /> </div> </article>

    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl shadow-slate-600 hover:shadow-slate-500'>
<div onClick={(()=>navigate('/T03'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T03boiler /> </div> </article>

    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl shadow-slate-600 hover:shadow-slate-500'>
<div onClick={(()=>navigate('/T04'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T04linkcss /> </div> </article>

    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl shadow-slate-600 hover:shadow-slate-500'>
<div onClick={(()=>navigate('/T05'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T05flexbox /> </div> </article>

    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl shadow-slate-600 hover:shadow-slate-500'>
<div onClick={(()=>navigate('/T06'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T06 /> </div> </article>

    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl shadow-slate-600 hover:shadow-slate-500'>
<div onClick={(()=>navigate('/T07'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T07 /> </div> </article>

    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl shadow-slate-600 hover:shadow-slate-500'>
<div onClick={(()=>navigate('/T08'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T08 /> </div> </article>

    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl shadow-slate-600 hover:shadow-slate-500'>
<div onClick={(()=>navigate('/T09'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T09 /> </div> </article>

    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl shadow-slate-600 hover:shadow-slate-500'>
<div onClick={(()=>navigate('/T10'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T10 /> </div> </article>

    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl shadow-slate-600 hover:shadow-slate-500'>
<div onClick={(()=>navigate('/T11'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T11 /> </div> </article>


    <article className='border-2 border-slate-600 rounded-xl w-[90%] h-[280px] lg:w-[40vw] lg:h-[40vh] xl:w-[28vw] mb-8 mt-8 
flex flex-col items-center justify-center bg-black shadow-xl hover:shadow-2xl shadow-slate-600 hover:shadow-slate-500'>
<div onClick={(()=>navigate('/T12'))}  className=' cursor-pointer h-[95%] w-[95%] border-2
 border-slate-900 rounded-xl bg-slate-900 overflow-hidden hover:bg-slate-800'>
    <T12boot /> </div> </article>





    </main>
  )
}
