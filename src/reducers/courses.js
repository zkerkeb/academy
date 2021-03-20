import { DISPLAY_COURSES, SET_FILTER } from '../actions/courses'

const initialState = {
  coursesList: [],
  coursesFilter: 'Cours'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_COURSES:
      return {
        ...state,
        coursesList: action.payload
      }
    case SET_FILTER:
      return {
        ...state,
        coursesFilter: action.payload
      }
    default:
      return state
  }
}
