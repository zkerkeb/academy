import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ButtonCategory from '../components/buttonCategory'

import { useSelector, useDispatch } from 'react-redux'

import allTheActions from '../actions'

const Home = ({ history }) => {
  const courses = useSelector(state => state.courses)
  const { coursesList } = courses
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allTheActions.courses.getCourses())
  }, [dispatch])

  return (
    <Container>
      <CategoryContainer>
        {coursesList[0] ? (
          coursesList.map(course => (
            <ButtonCategory
              key={course.id}
              cover={course?.cover?.url}
              label={course.title}
              description={course.description}
              onClick={() => history.push(`/${course.id}/lessons`)}
            ></ButtonCategory>
          ))
        ) : (
          <span>Pas de cours disponible</span>
        )}
      </CategoryContainer>
      {/* {shots.map(shot => (
        <Shot key={shot.id} shot={shot}></Shot>
      ))} */}
    </Container>
  )
}
const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
  width: 100%;
`

Home.propTypes = {
  history: PropTypes.object
}

export default Home
