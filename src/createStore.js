import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

export const middlewares = [thunk]

// export const createStoreWithMiddlewares = applyMiddleware(...middlewares)(
// 	createStore
// )

const initialState = {}

export const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
)

// export const store = createStoreWithMiddlewares(rootReducer)
