import axios from 'axios'

export const DISPLAY_LESSONS = 'DISPLAY_LESSONS'

export const displayLessons = payload => ({
  type: DISPLAY_LESSONS,
  payload
})

export const getLessons = ({ idCourse }) => dispatch => {
  axios({
    method: 'GET',
    url: `${process.env.REACT_APP_API_URL}/lessons`,
    params: {
      _sort: 'order:asc',
      course_eq: idCourse
    }
  })
    .then(res => {
      dispatch(displayLessons(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}
