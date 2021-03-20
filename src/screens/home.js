import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ButtonCategory from '../components/buttonCategory'

import { useSelector, useDispatch } from 'react-redux'

import allTheActions from '../actions'

const Home = ({ history }) => {
  const courses = useSelector(state => state.courses)
  const { coursesList, coursesFilter } = courses
  console.log('Home -> coursesList', coursesList)
  const [coursesDisplayer, setCoursesDisplayer] = useState(coursesList)
  console.log('Home -> coursesDisplayer', coursesDisplayer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allTheActions.courses.getCourses(coursesFilter))
  }, [dispatch, coursesFilter])

  useEffect(() => {
    setCoursesDisplayer(coursesList)
  }, [coursesList])

  return (
    <Container>
      <CategoryContainer>
        {coursesDisplayer[0] ? (
          coursesDisplayer.map(course => (
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
  width: 90%;
  padding: 12px 0px;
  max-width: 1200px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

Home.propTypes = {
  history: PropTypes.object
}

export default Home
