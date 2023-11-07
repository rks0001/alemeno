import React from 'react';

import CourseCard from '../components/CourseCard';
import { useDispatch, useSelector } from 'react-redux';
import { addComplete } from '../redux/storeSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.store.singleCourse);

  const handleComplete = (course) => {
  
    const updatedCourse = { ...course, completeStatus: true };
    dispatch(addComplete(updatedCourse));
  };

  const completedCourse = useSelector((state) => state.store.completeCourse);

  return (
    <div className='p-10'>
      <div className='text-lg font-semibold pb-3'>Enrolled Courses</div>
      <div className='flex flex-wrap gap-3'>
      {enrolledCourses.length === 0 ? 'Add Courses' : enrolledCourses.map(course => 
    <CourseCard
    key={course.id}
    url={`/courses/${course.id}`}
    img={course.thumbnail}
    title={course.name}
    desc={course.description}
    instructor={course.instructor}
    duration={course.duration}
    location={course.location}
    btn='Completed'
    onclickfunc={() => handleComplete(course)} 
    progress='0/100'
    onclickprogress={() => handleComplete(course)} 
  />
  )}
      </div>
  

      


       
      
      <div className='text-lg font-semibold p-3'>Completed Courses</div>
      <div className='flex flex-wrap gap-3'>
        {completedCourse.map((course) => 
          <CourseCard
            key={course.id}
            url={`/courses/${course.id}`}
            img={course.thumbnail}
            title={course.name}
            desc={course.description}
            instructor={course.instructor}
            duration={course.duration}
            location={course.location}
            btn='Completed'
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
