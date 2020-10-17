import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import { devices } from '../../config/devices'
import { defaultImage } from '../../assets/images'

import { Label, Description } from '../texts'

const ButtonCategory = ({
  onClick,
  label,
  description,
  image = defaultImage
}) => {
  return (
    <Category onClick={onClick}>
      <IllustrationContainer>
        <Illustration src={image}></Illustration>
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

// const Label = styled.span`
//   color: white;
//   font-weight: bold;
// `

// const Description = styled.span`
//   color: white;
// `

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
  width: 100%;
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
