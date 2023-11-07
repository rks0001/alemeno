import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (

  <div className='p-10 md:p-20 flex flex-col w-full  m-auto'>
        <div className='flex-1 w-full  flex items-center'>
          <div>
          <div className='font-bold text-5xl'>Welcome to Alemeno</div>
          <div className='font-semibold text-xl md:text-3xl tracking-tighter'>Find the right course for you</div>
          </div>
          </div>
        <div className='flex-1 w-full'><img className='w-96 py-6' src='https://www.alemeno.com/static/assets/images/frameImg.jpg' alt='aaa'/></div>
        <button className='bg-sky-800 w-max px-4 py-2 rounded-lg my-4 text-white font-bold'><Link to='/courses'>Get Started</Link></button>
      </div>
   
    

  )
}

export default Homepage