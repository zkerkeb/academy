import { DISPLAY_LESSON } from '../actions/lesson'

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
    default:
      return state
  }
}
