import { DISPLAY_COURSES } from '../actions/courses'

const initialState = {
  coursesList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_COURSES:
      return {
        ...state,
        coursesList: action.payload
      }
    default:
      return state
  }
}
