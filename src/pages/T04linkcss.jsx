import React from 'react'
import { useNavigate } from 'react-router'

export default function T04linkcss() {

 const navigate = useNavigate()
  return (
    <article className='flex flex-col justify-center items-center  text-lg'>
      <h1 className='p-2 text-2xl font-semibold'>Link a CSS style Sheet to your HTML document</h1>
      <p className='p-2 text-center text-lg font-thin'>How to: Link a CSS Style Sheet to your HTML document in 80 seconds!</p>
    <p className='mt-12 p-2'>Link a CSS (Cascade Style Sheet) file to your HTML document, 
    This is where we start to make the website look pretty.
    </p>
      <div className='w-full flex items-center justify-center mt-8 mb-8 lg:mt-32 '>
      <iframe className="border-2 rounded-xl lg:w-[700px] lg:h-[400px] md:h-[40vh] w-[90vw] h-[30vh]" src="https://www.youtube.com/embed/qA3xK9_CVnE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
<p>With this 80 second video tutorial you will learn how to Link a CSS style Sheet to your HTML document.
  <br /><br />
  <ol className=' list-decimal'>
    <li>Open up VSCODE ( Visual Studio Code - Program ) </li>
    <li>Open your HTML document</li>
    <li>Create a file style.css</li>
    <li>Link your CSS style sheet to you HTML document</li>

    <li>Enjoy using CSS!</li>
  </ol>
</p>
   
<p onClick={(()=>navigate('/'))} className=' mt-16 lg:mt-32 mb-12 cursor-pointer text-blue-400 hover:text-blue-300 active:text-blue-200'>Back to the Home Page</p>

    </article>



  )
}
