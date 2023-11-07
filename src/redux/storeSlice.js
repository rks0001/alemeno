import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: 'store',
  initialState: {
    likeStatus: false,
    enrollCourseStatus:false,
    completeCourse:[],
    singleCourse :[],
  },
  reducers: {
    addLike: (state) => {
      state.likeStatus = !state.likeStatus; 
    },
    addEnroll: (state) => {
      state.enrollCourseStatus = true; 
    },
    addEnrollStatus: (state, action) => {
      
      state.singleCourse.push(action.payload);
    },
    addComplete: (state, action) => {
  
      state.completeCourse.push(action.payload);
      state.singleCourse.pop();
    },
   
  },
});

export const { addLike ,addEnrollStatus,addComplete,addEnroll} = storeSlice.actions;
export default storeSlice.reducer;
