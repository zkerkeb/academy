import { DISPLAY_LESSONS } from '../actions/lessons'

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
    default:
      return state
  }
}
