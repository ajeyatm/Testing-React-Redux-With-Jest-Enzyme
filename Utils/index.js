import checkProptypes from 'check-prop-types'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../src/reducers'
import { middlewares } from '../src/createStore'

export const findByTestAttr = (component, attr) =>
	component.find(`[data-test='${attr}']`)

export const checkProps = (component, propsToBeChecked) =>
	checkProptypes(component.propTypes, propsToBeChecked, 'props', component.name)

export const testStore = (initialState) => {
	// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
	// return createStoreWithMiddleware(rootReducer, initialState)

	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middlewares)
	)

	return store
}
