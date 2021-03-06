import React, { useEffect, useState } from 'react'
import Routes from './config/routes'
import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'

import { store, persistor } from './config/store'
import { themeLight, themeDark } from './config/theme'
import { PersistGate } from 'redux-persist/integration/react'

import './config/translations'

function App() {
  const [currentTheme, setCurrentTheme] = useState(themeDark)
  useEffect(() => {
    store.subscribe(() => {
      setCurrentTheme(store.getState().theme.currentTheme)
    })
  })
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={currentTheme}>
          <Routes></Routes>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
