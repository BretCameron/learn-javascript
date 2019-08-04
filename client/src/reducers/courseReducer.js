import { GET_COURSE, GET_COURSES, COURSES_LOADING, CREATE_COURSE, UPDATE_COURSE, DELETE_COURSE } from '../actions/types';

const initialState = {
  course: {},
  courses: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COURSE:
      return {
        ...state,
        course: action.payload,
        loading: false
      }
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
        loading: false
      }
    case CREATE_COURSE:
      return {
        ...state,
        courses: [action.payload, ...state.courses],
        course: action.payload
      }
    case UPDATE_COURSE:
      return {
        ...state,
        course: action.payload
      }
    case DELETE_COURSE:
      return {
        courses: state.courses.filter(course => course._id !== action.payload)
      }
    case COURSES_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}