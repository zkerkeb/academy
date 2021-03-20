import axios from 'axios'

export const DISPLAY_COURSES = 'DISPLAY_COURSES'
export const SET_FILTER = 'SET_FILTER'

export const displayCourses = payload => ({
  type: DISPLAY_COURSES,
  payload
})

export const setFilter = payload => ({
  type: SET_FILTER,
  payload
})

export const getCourses = coursesFilter => dispatch => {
  axios({
    method: 'GET',
    url: `${process.env.REACT_APP_API_URL}/courses`,
    params: {
      _sort: 'order:asc',
      category_eq: coursesFilter
    }
  })
    .then(res => {
      dispatch(displayCourses(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}
