import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const url = process.env.REACT_APP_API_URL

const Shot = ({ shot }) => {
  return (
    <ShotContainer>
      <ShotPicture src={`${url}${shot.picture.url}`}></ShotPicture>
    </ShotContainer>
  )
}
const ShotContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`

const ShotPicture = styled.img`
  display: flex;
  width: 100%;
`

Shot.propTypes = {
  shot: PropTypes.object
}

export default Shot
