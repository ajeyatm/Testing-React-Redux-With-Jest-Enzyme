import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

export const middlewares = [thunk]

export const createStoreWithMiddlewares = composeWithDevTools(
	applyMiddleware(...middlewares)
)(createStore)

// const store = createStore(
// 	reducer,
// 	initialState,
// 	composeWithDevTools(applyMiddleware(...middleware))
//   )

export const store = createStoreWithMiddlewares(rootReducer)
