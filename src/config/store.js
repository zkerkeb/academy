import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import reducers from '../reducers'

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['theme']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
persistor.purge()
