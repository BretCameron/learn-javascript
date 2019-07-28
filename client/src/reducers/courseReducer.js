import { GET_COURSES, COURSES_LOADING, CREATE_COURSE } from '../actions/types';

const initialState = {
  courses: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
        loading: false
      }
    case CREATE_COURSE:
      return {
        ...state,
        courses: [action.payload, ...state.courses]
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