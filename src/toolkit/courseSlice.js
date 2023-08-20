import { createSlice } from '@reduxjs/toolkit'
import { courseServ } from '../services/courseServ';
import { SUCCESS } from '../utils/constant';

const initialState = {
  courseByCategory: []
}

const courseSlice = createSlice({
  name: "courseSlice",
  initialState,
  reducers: {
    getApiCourseByCategory: (state, action) => {
      state.courseByCategory = action.payload
    }
  }
});

export const {getApiCourseByCategory} = courseSlice.actions

export default courseSlice.reducer

export const fetchCourseByCategory = (course) => {
    return async dispatch => {
        try{
            const result = await courseServ.getCourseByCategory(course) 
            if(result.status === SUCCESS) {
              dispatch(getApiCourseByCategory(result.data))
            }
        }catch(err) {
            console.log(err)
        }
    }
}