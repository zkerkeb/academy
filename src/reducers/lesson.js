import { DISPLAY_LESSON, CLEAR_LESSON } from '../actions/lesson'

const initialState = {
  lessonContent: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_LESSON:
      return {
        ...state,
        lessonContent: action.payload
      }
    case CLEAR_LESSON:
      return {
        ...state,
        lessonContent: {}
      }
    default:
      return state
  }
}
