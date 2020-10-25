import { DISPLAY_LESSONS, CLEAR_LESSONS } from '../actions/lessons'

const initialState = {
  lessonsList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_LESSONS:
      return {
        ...state,
        lessonsList: action.payload
      }
    case CLEAR_LESSONS:
      return {
        ...state,
        lessonsList: []
      }
    default:
      return state
  }
}
