import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { devices } from '../../config/devices'

import { MenuText } from '../texts'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const BurgerMenu = ({
  windowWidth,
  menuOpen,
  animation,
  handleClose,
  handleClickMobile
}) => {
  const { t } = useTranslation()
  const theme = useContext(ThemeContext)

  return (
    <Menu
      width={windowWidth}
      isVisible={menuOpen}
      variants={{
        hidden: { x: windowWidth },
        visible: { x: 0 }
      }}
      animate={animation}
    >
      <MenuHidden onClick={handleClose}></MenuHidden>
      <MenuVisible>
        <CrossContainer>
          <CrossClickable>
            <FaTimes
              onClick={handleClose}
              color={theme.general.menu}
              size={30}
            ></FaTimes>
          </CrossClickable>
        </CrossContainer>
        <MenuContent>
          <MenuLateralButton onClick={() => handleClickMobile(`/`, 'Cours')}>
            <MenuText>{t('menu.courses')}</MenuText>
          </MenuLateralButton>
          <MenuLateralButton onClick={() => handleClickMobile(`/`, 'Projets')}>
            <MenuText>{t('menu.project')}</MenuText>
          </MenuLateralButton>
          <MenuLateralButton
            onClick={() => handleClickMobile(`/`, 'Corrections')}
          >
            <MenuText>{t('menu.corrections')}</MenuText>
          </MenuLateralButton>
        </MenuContent>
      </MenuVisible>
    </Menu>
  )
}

const MenuLateralButton = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 12px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CrossClickable = styled.div`
  padding-right: 12px;
  padding-top: 12px;
`

const CrossContainer = styled.div`
  display: flex;
  width: 230px;
  align-items: flex-end;
  justify-content: flex-end;
`

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
`

const Menu = styled(motion.div)`
  @media ${devices.laptop} {
    display: ${props => (props.isVisible ? 'flex' : 'none')};
    position: fixed;
    flex-direction: row;
    width: ${props => `${props.width}px`};
    height: 100vh;
    top: 0px;
    right: 0px;
    z-index: 10;
    background-color: transparent;
  }
  display: none;
`

const MenuVisible = styled.div`
  width: 230px;
  background-color: ${props => props.theme.general.primary};
  height: 100vh;
  box-shadow: 1px 1px 169px #000000;
`
const MenuHidden = styled.div`
  display: flex;
  flex: 1;
`

BurgerMenu.propTypes = {
  windowWidth: PropTypes.number,
  menuOpen: PropTypes.bool,
  animation: PropTypes.string,
  handleClose: PropTypes.func,
  handleClickMobile: PropTypes.func,
  handleLangChange: PropTypes.func
}

export default BurgerMenu
