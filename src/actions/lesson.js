import axios from 'axios'

export const DISPLAY_LESSON = 'DISPLAY_LESSON'
export const CLEAR_LESSON = 'CLEAR_LESSON'

export const displayLesson = payload => ({
  type: DISPLAY_LESSON,
  payload
})

export const clearLesson = () => ({
  type: CLEAR_LESSON
})

export const getLesson = ({ idLesson }) => dispatch => {
  axios({
    method: 'GET',
    url: `${process.env.REACT_APP_API_URL}/lessons/${idLesson}`,
    params: {}
  })
    .then(res => {
      dispatch(displayLesson(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}
