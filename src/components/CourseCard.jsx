import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = (props) => {
  return (
    <div className='w-96 bg-gray-200 p-4 rounded-lg '>
        <Link  to={props.url}>
          <div className='flex flex-col gap-1'>
          <div className='w-100 h-100'>
            <img  className='object-fit' src={props.img} alt='courseimg'/>
          </div>
        <div className='font-bold text-2xl pt-2 tracking-tight leading-none '>{props.title}</div>
        <div className='text-base  tracking-tighter leading-tight '>{props.desc}</div>
        <div className='text-base font-normal'>Instructor - {props.instructor}</div>
       
        <div className='text-base font-normal'>{props.duration}</div>
        <div className='text-base font-normal'>{props.location}</div>
        
       
          </div>
          
        </Link>
        <div className='flex flex-col'>
        {props.progress &&  <button onClick={props.onclickprogress} className='text-base w-max font-normal  px-1 py-2'>Progress - {props.progress}</button>}
        {props.btn &&  <button onClick={props.onclickfunc} className='text-base  w-max font-normal bg-sky-500 px-10 py-2'>{props.btn}</button>}
        </div>
    
       
    </div>
  )
}

export default CourseCard