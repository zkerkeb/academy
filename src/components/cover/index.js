import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const url = process.env.REACT_APP_API_URL

const Cover = ({ data, onClick }) => {
  return (
    <Container>
      <CoverImage
        onClick={onClick}
        src={`${url}${data.picture.url}`}
      ></CoverImage>
      <span>{data.name}</span>
    </Container>
  )
}

const Container = styled.div`
  margin: 6px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CoverImage = styled.img`
  width: 320px;
  height: 400px;
  cursor: pointer;
`

Cover.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func
}

export default Cover
