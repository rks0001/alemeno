import React, { useState } from 'react';
import { useParams } from 'react-router';
import courseModel from '../utils/allcourses';
import { useDispatch, useSelector } from 'react-redux';
import {  addEnrollStatus, addLike } from '../redux/storeSlice';
import {AiFillLike} from 'react-icons/ai'
const SingleCourse = () => {
  const params = useParams();
  const courseId = +params.id;

  const singleCourse = courseModel.find(course => course.id === courseId);
  
  const status = useSelector(state => state.store.likeStatus);
 
  
  const enroll = useSelector(state => state.store.singleCourse[params.id]?.enrollmentStatus);

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!open);
  }

  const handleLike = () => {
    dispatch(addLike());
    const updatedCourse = { ...singleCourse, enrollmentStatus: true };
    console.log(updatedCourse)
  

  }

const enrollStatus = () => {
  if (!enroll) {
   
    const updatedCourse = { ...singleCourse, enrollmentStatus: true };
    dispatch(addEnrollStatus(updatedCourse));

  }

  else{
    alert("Already Enrolled")
  }


}
   
  
  return (
    <div className='p-10'>
      {singleCourse && (
        <div>
          <h2 className='text-2xl font-semibold tracking-tight pb-2'>{singleCourse.name}</h2>
          <div className='flex flex-col md:flex-row'>
            <div className='flex-1'><img src={singleCourse.thumbnail} alt='thumbnail' /></div>
            <div className='flex-1 my-2 md:my-0 md:mx-10'>
              <button onClick={() => enrollStatus()} className='bg-blue-900 font-bold rounded-sm px-6 py-2 text-lg text-white'>{enroll ? 'Enrolled' : 'Enroll'}</button>
              <div onClick={handleLike} className={status ? 'p-2 bg-[#f1f1f1] flex gap-2 items-center font-bold  text-[#0047AB] mt-2 w-max  cursor-pointer':'p-2 bg-[#f1f1f1] flex gap-2 items-center font-bold  text-black mt-2 w-max  cursor-pointer'}>Like - {status ? <AiFillLike color='#0047AB' size={28}/> : <AiFillLike color='#000' size={28}/>}</div>

              
            </div>
          </div>
          <p className='text-base font-medium tracking-tight pb-2'>{singleCourse.description}</p>
          <p>{singleCourse.schedule}</p>
          <p>Duration - {singleCourse.duration}</p>
          <p>Mode - {singleCourse.location}</p>
          <p>Prerequisites - {`${singleCourse.prerequisites[0]}, ${singleCourse.prerequisites[1]}` }</p>
          <div onClick={handleClick} className='text-lg font-semibold'>{`Syllabus ${open ? '-' : '+'}`}</div>
          {open &&
            <>
              {singleCourse.syllabus.map(item => (
                <li key={item.week}>
                  <span>Week {item.week}:</span> {item.topic}
                  <p>{item.content}</p>
                </li>
              ))}
            </>
          }
        </div>
      )}
    </div>
  );
}

export default SingleCourse;