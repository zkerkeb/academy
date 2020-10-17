import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

import allTheActions from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { themeDark, themeLight } from '../../config/theme'

const ThemeButton = () => {
  const themeName = useSelector(state => state?.theme?.currentTheme?.name)
  const dispatch = useDispatch()
  return (
    <>
      {themeName === 'dark' ? (
        <FaSun
          size={32}
          color='#ffffff'
          onClick={() => dispatch(allTheActions.theme.changeTheme(themeLight))}
        ></FaSun>
      ) : (
        <FaMoon
          size={32}
          color='#222222'
          onClick={() => dispatch(allTheActions.theme.changeTheme(themeDark))}
        ></FaMoon>
      )}
    </>
  )
}

ThemeButton.propTypes = {}

export default ThemeButton
