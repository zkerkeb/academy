import { combineReducers } from 'redux'

import theme from './theme'
import courses from './courses'
import lessons from './lessons'
import lesson from './lesson'

export default combineReducers({
  courses,
  lessons,
  theme,
  lesson
})
