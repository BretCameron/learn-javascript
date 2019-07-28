import axios from 'axios';
import { GET_COURSES, COURSES_LOADING, CREATE_COURSE } from './types';

export const getCourses = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('lessons/courses')
    .then(res =>
      dispatch({
        type: GET_COURSES,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

export const setItemsLoading = () => {
  return {
    type: COURSES_LOADING
  }
}

export const createCourse = (course) => dispatch => {
  axios.post('create', course)
    .then(res =>
      dispatch({
        type: CREATE_COURSE,
        payload: res.data
      })
    )
}