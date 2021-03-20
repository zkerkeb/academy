import React, { useRef, useState } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useWindowWidth } from '@react-hook/window-size'
import { FaBars } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

import HeaderButton from '../headerButton'
import BurgerMenu from '../burgerMenu'

import { logoSmall } from '../../assets/images'
import { devices } from '../../config/devices'

import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ThemeButton from '../settingsButtons/themeButton'

import allTheActions from '../../actions'

const Header = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const history = useHistory()
  const [menuOpen, setMenuOpen] = useState(false)
  const windowWidth = useWindowWidth()
  const [animation, setAnimation] = useState('hidden')
  const coursesFilter = useSelector(state => state.courses.coursesFilter)
  let timer = useRef(null)
  const theme = useContext(ThemeContext)

  const handleClickMobile = (location, filter) => {
    if (filter) {
      dispatch(allTheActions.courses.setFilter(filter))
    }
    history.push(location)
    handleClose()
  }

  const handleClick = (location, filter) => {
    if (filter) {
      dispatch(allTheActions.courses.setFilter(filter))
    }
    history.push(location)
  }

  const handleOpen = () => {
    clearTimeout(timer.current)
    setAnimation('visible')
    setMenuOpen(true)
  }

  const handleClose = () => {
    setAnimation('hidden')
    timer.current = setTimeout(() => {
      setMenuOpen(false)
    }, 1000)
  }

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => history.push('/')}>
        <Logo src={theme.logo}></Logo>
      </LogoContainer>
      <ButtonContainer>
        <HeaderButton
          isSelected={coursesFilter === 'Cours'}
          onClick={() => handleClick('/', 'Cours')}
          label={t('menu.courses')}
        ></HeaderButton>
        <HeaderButton
          isSelected={coursesFilter === 'Projets'}
          onClick={() => handleClick('/', 'Projets')}
          label={t('menu.project')}
        ></HeaderButton>
        <HeaderButton
          isSelected={coursesFilter === 'Corrections'}
          onClick={() => handleClick('/', 'Corrections')}
          label={t('menu.corrections')}
        ></HeaderButton>
      </ButtonContainer>

      <ThemeContainer>
        <ThemeButton></ThemeButton>
      </ThemeContainer>
      <MenuBurger onClick={handleOpen}>
        <FaBars size={30} color={theme?.general?.menu}></FaBars>
      </MenuBurger>
      <BurgerMenu
        windowWidth={windowWidth}
        menuOpen={menuOpen}
        animation={animation}
        handleClickMobile={handleClickMobile}
        handleClose={handleClose}
      ></BurgerMenu>
    </HeaderContainer>
  )
}

const MenuBurger = styled.div`
  @media ${devices.laptop} {
    display: flex;
    position: absolute;
    top: 12px;
    right: 12px;
    width: 60px;
    height: 60px;
    z-index: 5;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  display: none;
`

const ButtonContainer = styled.div`
  margin-left: 12px;
  width: 100%;
  display: flex;
  @media ${devices.laptop} {
    display: none;
  }
`

const LogoContainer = styled.div`
  margin-left: 12px;
  cursor: pointer;
`

const Logo = styled.img`
  width: 60px;
  height: 60px;
`

const ThemeContainer = styled.div`
  padding: 12px 24px;
  margin-right: 12px;
`

const HeaderContainer = styled.div`
  transition: background-color 1s ease;
  padding: 12px;
  display: flex;
  cursor: pointer;
  width: 100%;
  background-color: ${props => props.theme.general.primary};
  box-shadow: 0px 0px 10px ${props => props.theme.general.headerShadow};
`

Header.propTypes = {}

export default Header
