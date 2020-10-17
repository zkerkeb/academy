import React from 'react'
import Proptypes from 'prop-types'
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6
} from '../texts'

const renderHeading = ({ children, level }) => {
  const titleText = children[0]?.props?.value
  switch (level) {
    case 1:
      return <StyledH1>{titleText}</StyledH1>
    case 2:
      return <StyledH2>{titleText}</StyledH2>
    case 3:
      return <StyledH3>{titleText}</StyledH3>
    case 4:
      return <StyledH4>{titleText}</StyledH4>
    case 5:
      return <StyledH5>{titleText}</StyledH5>
    case 6:
      return <StyledH6>{titleText}</StyledH6>

    default:
      return null
  }
}

renderHeading.proptypes = {
  level: Proptypes.number,
  children: Proptypes.array
}

export default renderHeading
