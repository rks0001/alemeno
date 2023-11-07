import React, { useState } from 'react';

import courseModel from '../utils/allcourses';
import CourseCard from '../components/CourseCard';
import {AiOutlineSearch} from 'react-icons/ai'
const Courses = () => {
  const [search, setSearch] = useState('');
  
  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  // Filter coursesdata based on the search term
  const filteredCourses = courseModel.filter(course => 
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='p-10'>
      <div className='flex items-center h-full'>
        <input
        
          value={search}
          onChange={handleChange}
          type='text'
          placeholder='Search'
          className='border-2 border-gray-600 p-2 rounded-l-lg'
        />
        <div className='bg-gray-400 w-max p-2 border-2 border-gray-600 rounded-r-lg'><AiOutlineSearch color='black' size={24}/></div>
      </div>
      <div className='flex flex-wrap gap-4 py-4'>
      {filteredCourses.map(course => (<CourseCard key={course.id} url={`/courses/${course.id}`} img={course.thumbnail} title={course.name} desc={course.description} instructor={course.instructor} duration={course.duration} location={course.location} />))}
      </div>
    </div>
  );
}

export default Courses;
