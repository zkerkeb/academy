import React from 'react'

import { AiOutlineSetting } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { useContext } from 'react'

const ToSettings = () => {
  const history = useHistory()
  const theme = useContext(ThemeContext)
  console.log('themeContext', theme)

  return (
    <AiOutlineSetting
      size={32}
      color={theme.secondary}
      onClick={() => history.push('/settings')}
    />
  )
}

ToSettings.propTypes = {}

export default ToSettings
