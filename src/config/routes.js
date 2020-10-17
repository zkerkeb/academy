import React from 'react'

import Home from '../screens/home'
import Lessons from '../screens/lessons'
import Lesson from '../screens/lesson'

import Header from '../components/header'
import { createGlobalStyle } from 'styled-components'

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body {
    transition: background-color 1s ease;
    background-color: ${props => props.theme.general.primary};
  }
  html, body {
  overflow-x: hidden;
}
`
const Routes = () => {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/:idCourse/lessons' component={Lessons}></Route>
        <Route
          exact
          path='/:idCourse/lessons/:idLesson'
          component={Lesson}
        ></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
