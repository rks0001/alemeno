import React from 'react'
import { Link } from 'react-router-dom'
import {RiFolderVideoLine} from 'react-icons/ri'
import {MdSpaceDashboard} from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className=' bg-white shadow-xl w-full md:min-h-[100vh] '>
        <div className='flex flex-col gap-2 p-6'>
            <Link to='/'><img src='https://www.alemeno.com/static/assets/images/logo.png' alt='logo' /></Link>
            <hr/>
        <Link to='/courses' className='text-lg font-medium text-gray-800 flex items-center gap-2 '> <RiFolderVideoLine/> Courses</Link>
        <Link to='/dashboard'  className='text-lg font-medium text-gray-800 flex items-center gap-2  '><MdSpaceDashboard/>Dashboard</Link>
        </div>
       
    </div>
  )
}

export default Sidebar