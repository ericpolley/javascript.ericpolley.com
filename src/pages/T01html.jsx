import React from 'react'
import { useNavigate } from 'react-router'

export default function T01html() {

 const navigate = useNavigate()
  return (
    <article className='flex flex-col justify-center items-center  text-lg'>
      <h1 className='p-2 text-2xl font-semibold'>HTML Website</h1>
      <p className='p-2 text-center text-lg font-thin'>How to: Create your first HTML website in 80 seconds!</p>
    <p className='mt-12 p-2'>This is a fun and quick project. It's a cool easy way to get started, and 
    you don't even have to download anything special to get started! Open up a Notepad, pick a web browser, and let's get started!</p>
      <div className='w-full flex items-center justify-center mt-8 mb-8 lg:mt-32 '>
      <iframe className="border-2 rounded-xl lg:w-[700px] lg:h-[400px] md:h-[40vh] w-[90vw] h-[30vh]" src="https://www.youtube.com/embed/J6aWT0ywgWE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
<p>With this 80 second video tutorial you will learn how to build a website using the Notepad
  from windows with Chrome, or your preferred web browser. 
  <br /><br />
  <ol className=' list-decimal'>
    <li>Open up a blank Notepad document on your windows PC</li>
    <li>Type the HTML code into the notepad body</li>
    <li>Save As: index.html </li>
    <li>Open the file you have saved: index.html</li>
    <li>Enjoy your first website you have created!</li>
  </ol>
</p>
   
<p onClick={(()=>navigate('/'))} className=' mt-16 lg:mt-32 mb-12 cursor-pointer text-blue-400 hover:text-blue-300 active:text-blue-200'>Back to the Home Page</p>

    </article>



  )
}
