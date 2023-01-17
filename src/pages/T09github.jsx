import React from 'react'
import { useNavigate } from 'react-router'

export default function T09() {

 const navigate = useNavigate()
  return (
    <article className='flex flex-col justify-center items-center  text-lg'>
      <h1 className='p-2 text-2xl font-semibold'>How to Host a Website with Github in 80 Seconds!</h1>
      <p className='p-2 text-center text-lg font-thin'>How to Host a Website with Github in 80 Seconds!</p>
    <p className='mt-12 p-2'>How to Host a Website with Github in 80 Seconds <br /><br />
    </p>
      <div className='w-full flex items-center justify-center mt-8 mb-8 lg:mt-32 '>
      <iframe className="border-2 rounded-xl lg:w-[700px] lg:h-[400px] md:h-[40vh] w-[90vw] h-[30vh]" src="https://www.youtube.com/embed/sGiiEImwfKQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
<p>With this 80 second video tutorial you will learn How to Host a Website with Github in 80 Seconds.
  <br /><br />
  <ol className=' list-decimal'>
    <li>Follow the instructions in the video.  </li>


    <li>Enjoy</li>
  </ol>
</p>
   
<p onClick={(()=>navigate('/'))} className=' mt-16 lg:mt-32 mb-12 cursor-pointer text-blue-400 hover:text-blue-300 active:text-blue-200'>Back to the Home Page</p>

    </article>



  )
}
