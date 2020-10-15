import axios from 'axios'

export const DISPLAY_COURSES = 'DISPLAY_COURSES'

export const displayCourses = payload => ({
  type: DISPLAY_COURSES,
  payload
})

export const getCourses = () => dispatch => {
  axios({
    method: 'GET',
    url: `${process.env.REACT_APP_API_URL}/courses`,
    params: {
      _sort: 'order:asc'
    }
  })
    .then(res => {
      dispatch(displayCourses(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}
