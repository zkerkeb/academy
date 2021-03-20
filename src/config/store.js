import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer, createMigrate } from 'redux-persist'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import reducers from '../reducers'
import migrations from './migrations'

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whiteList: ['theme'],
  migrate: createMigrate(migrations, { debug: true })
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
