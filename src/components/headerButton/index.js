import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { Label } from '../texts'

const HeaderButton = ({ label = 'ace', onClick, isSelected }) => {
  return (
    <ButtonContainer onClick={onClick} isSelected={isSelected}>
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
  border-bottom: ${props =>
    props.isSelected ? `2px solid ${props.theme.general.tertiary}` : 'none'};
`
HeaderButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool
}

export default HeaderButton
