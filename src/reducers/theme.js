import { CHANGE_THEME } from '../actions/theme'

import { themeLight } from '../config/theme'

const initialState = {
  currentTheme: themeLight
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        currentTheme: action.payload
      }

    default:
      return state
  }
}
