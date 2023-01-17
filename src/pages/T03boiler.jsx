import React from 'react'
import { useNavigate } from 'react-router'

export default function T03boiler() {

 const navigate = useNavigate()
  return (
    <article className='flex flex-col justify-center items-center  text-lg'>
      <h1 className='p-2 text-2xl font-semibold'>Import BoilerPlate with VS CODE extension</h1>
      <p className='p-2 text-center text-lg font-thin'>How to: Import BoilerPlate using a VSCODE extension in 80 seconds!</p>
    <p className='mt-12 p-2'>This is a quick and easy way to get started with BoilerPlate, 
    BoilerPlate will set up your HTML document essentials for you.
    </p>
      <div className='w-full flex items-center justify-center mt-8 mb-8 lg:mt-32 '>
      <iframe className="border-2 rounded-xl lg:w-[700px] lg:h-[400px] md:h-[40vh] w-[90vw] h-[30vh]" src="https://www.youtube.com/embed/fcsOt4DjnNg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
<p>With this 80 second video tutorial you will learn how to import the Boiler Plate using a VS Code Extension.
  <br /><br />
  <ol className=' list-decimal'>
    <li>Open up VSCODE ( Visual Studio Code - Program ) </li>
    <li>Open the extensions panel located on the farthest left side panel of VS CODE</li>
    <li>Type in the Search Box: Boiler Plate</li>
    <li>Click the extension, and then click the install button located in the documentation</li>
    <li>Import with html5-boilerplate </li>
    <li>Enjoy using the BoilerPlate!</li>
  </ol>
</p>
   
<p onClick={(()=>navigate('/'))} className=' mt-16 lg:mt-32 mb-12 cursor-pointer text-blue-400 hover:text-blue-300 active:text-blue-200'>Back to the Home Page</p>

    </article>



  )
}
