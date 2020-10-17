import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Label } from '../texts'

const HeaderButton = ({ label = 'ace', onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      {<Label>{label}</Label>}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.div`
  cursor: pointer;
  width: 100px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.general.tertiary};
`
HeaderButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default HeaderButton
