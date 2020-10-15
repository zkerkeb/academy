import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { devices } from '../../config/devices'

const ButtonCategory = ({ onClick, label, description }) => {
  return (
    <Category onClick={onClick}>
      <IllustrationContainer>
        <Illustration src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Progressive_Web_Apps_Logo.svg/1200px-Progressive_Web_Apps_Logo.svg.png'></Illustration>
      </IllustrationContainer>
      <LabelContainer>
        <Label>{label}</Label>
      </LabelContainer>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
    </Category>
  )
}

const DescriptionContainer = styled.div`
  padding: 12px;
`

const Label = styled.span`
  color: white;
  font-weight: bold;
`

const Description = styled.span`
  color: white;
`

const LabelContainer = styled.div`
  padding: 12px;
`

const IllustrationContainer = styled.div`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin: 0px 12px;
  padding: 12px 0px;
  background-color: ${props => props.theme.general.illustration};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Illustration = styled.img`
  @media ${devices.mobileS} {
    width: 100%;
  }
  @media ${devices.mobileL} {
    width: 100%;
  }
  @media ${devices.tablet} {
    width: 200px;
  }
  @media ${devices.laptop} {
    width: 400px;
  }
  @media ${devices.desktopL} {
    width: 400px;
  }
`

const Category = styled.div`
  box-sizing: border-box;

  display: flex;
  cursor: pointer;
  max-width: 460px;
  min-width: 200px;
  width: 100%;
  margin: 6px 0px;
  align-items: center;
  border-radius: 12px;
  background-color: ${props => props.theme.general.tertiary};
  flex-direction: column;
`

ButtonCategory.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string
}

export default ButtonCategory
