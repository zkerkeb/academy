import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ButtonCategory from '../components/buttonCategory'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import allTheActions from '../actions'

const Lessons = ({ history }) => {
  const lessons = useSelector(state => state.lessons.lessonsList)
  const { idCourse } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allTheActions.lessons.getLessons({ idCourse }))
    return () => {
      dispatch(allTheActions.lessons.clearLessons())
    }
  }, [dispatch, idCourse])

  return (
    <LessonsContainer>
      <LessonButtonContainer>
        {lessons[0] ? (
          lessons.map(lesson => (
            <ButtonCategory
              key={lesson.id}
              onClick={() => {
                history.push(`/${idCourse}/lessons/${lesson.id}`)
              }}
              label={lesson.title}
              cover={lesson.cover?.url}
            ></ButtonCategory>
          ))
        ) : (
          <span>Pas de leçons disponible</span>
        )}
      </LessonButtonContainer>
    </LessonsContainer>
  )
}

const LessonButtonContainer = styled.div`
  max-width: 1200px;
  width: 90%;

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const LessonsContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 100%;
`

Lessons.propTypes = {
  history: PropTypes.object
}

export default Lessons
