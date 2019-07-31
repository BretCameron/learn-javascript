import axios from 'axios';
import { GET_COURSE, GET_COURSES, COURSES_LOADING, CREATE_COURSE, UPDATE_COURSE, DELETE_COURSE } from './types';

export const getCourses = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/courses')
    .then(res =>
      dispatch({
        type: GET_COURSES,
        payload: res.data
      })
    )
    .catch(err => console.log(err))
}

export const getCourseById = (courseId) => dispatch => {
  dispatch(setItemsLoading());
  axios.get(`/courses/${courseId}`)
    .then(res =>
      dispatch({
        type: GET_COURSE,
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

export const updateCourse = (courseId, course) => dispatch => {
  axios.put(`/courses/edit/${courseId}`, course)
    .then(res =>
      dispatch({
        type: UPDATE_COURSE,
        payload: res.data
      })
    )
}

export const deleteCourse = (courseId) => dispatch => {
  axios.delete(`/courses/delete/${courseId}`)
    .then(res =>
      dispatch({
        type: DELETE_COURSE,
        payload: courseId
      })
    )
}