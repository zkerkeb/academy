import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { CopyBlock, vs2015 } from 'react-code-blocks'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'

import renderHeading from '../components/renderHeading'
import allTheActions from '../actions'

import { devices } from '../config/devices'
import { StyledH1 } from '../components/texts'

const renderCode = ({ value, language }) => {
  return <CopyBlock text={value} theme={vs2015} language={language} wrapLines />
}

renderCode.propTypes = {
  value: PropTypes.string,
  language: PropTypes.string
}

const Lesson = ({ history }) => {
  const lesson = useSelector(state => state.lesson.lessonContent)
  const { idCourse, idLesson } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(allTheActions.lesson.getLesson({ idLesson }))
    return () => {
      dispatch(allTheActions.lesson.clearLesson())
    }
  }, [dispatch, idLesson])

  return (
    <Container>
      <LessonContainer>
        <TitleContainer>
          <StyledH1>{lesson?.title}</StyledH1>
        </TitleContainer>
        {lesson?.video_url ? (
          <VideoContainer>
            <ReactPlayer
              stopOnUnmount={false}
              pip={true}
              url={lesson?.video_url}
              width='100%'
              controls
            ></ReactPlayer>
          </VideoContainer>
        ) : null}
        {lesson?.content ? (
          <WriteContainer>
            <ReactMarkdown
              source={lesson?.content}
              renderers={{
                code: renderCode,
                paragraph: StyledP,
                heading: renderHeading,
                link: StyledA,
                listItem: StyledLi,
                image: Image
              }}
            ></ReactMarkdown>
          </WriteContainer>
        ) : null}
      </LessonContainer>
      {lesson?.nextLesson ? (
        <NextLesson
          onClick={() =>
            history.push(`/${idCourse}/lessons/${lesson?.nextLesson?.id}`)
          }
        >
          <NextText>Continuer vers: {lesson?.nextLesson.title}</NextText>
        </NextLesson>
      ) : (
        <NextLesson onClick={() => history.push(`/`)}>
          <NextText>Retourner a l'acceuil</NextText>
        </NextLesson>
      )}
    </Container>
  )
}

const VideoContainer = styled.div`
  @media ${devices.desktopL} {
    width: 800px;
  }
  @media ${devices.laptop} {
    width: 800px;
  }
  @media ${devices.tablet} {
    width: 100%;
  }
  @media ${devices.mobileL} {
    width: 100%;
  }
  @media ${devices.mobileS} {
    width: 100%;
  }
`
const Image = styled.img`
  width: 100%;
`

const NextText = styled.div`
  color: ${props => props.theme.text.common};
  font-weight: bold;
  padding: 12px;
`

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  text-align: center;
`

const NextLesson = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 12px;
  cursor: pointer;
  background-color: ${props => props.theme.general.secondary};
  text-align: center;
`

const StyledP = styled.span`
  color: ${props => props.theme.text.common};
  & code {
    color: ${props => props.theme.text.code};
    font-weight: bold;
  }
`

const StyledLi = styled.li`
  color: ${props => props.theme.text.common};
`

const StyledA = styled.a`
  color: ${props => props.theme.text.link};
  word-break: break-word;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const LessonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const WriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: ${props => props.theme.general.secondary};
  margin: 12px;
  border-radius: 12px;
  width: 100%;
`

Lesson.propTypes = {
  history: PropTypes.object
}

export default Lesson
