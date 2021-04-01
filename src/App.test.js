import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { findByTestAttr, testStore } from '../Utils'

const setUp = (initialState = {}) => {
	const store = testStore(initialState)
	const wrapper = render(
		<Provider store={store}>
			<App />
		</Provider>
	)
	return wrapper
}

describe('App Component', () => {
	afterAll(cleanup)
	let wrapper
	beforeEach(() => {
		const initialState = {
			posts: [
				{
					title: 'Example title 1',
					body: 'Some text',
				},
				{
					title: 'Example title 2',
					body: 'Some text',
				},
				{
					title: 'Example title 3',
					body: 'Some text',
				},
			],
		}
		wrapper = setUp(initialState)
	})

	it('Should render without errors', () => {
		expect(wrapper.getByTestId('headline').textContent).toBe('Posts')
	})

	it('Should render the posts', () => {
		expect(wrapper.getByTestId('posts').textContent).toBe(
			'Example title 1Some textExample title 2Some textExample title 3Some text'
		)
	})

	// it('exampleMethod_updatesState Method should update state as expected', () => {
	// 	const classInstance = wrapper.instance()
	// 	classInstance.exampleMethod_updatesState()
	// 	const newState = classInstance.state.hideBtn
	// 	expect(newState).toBe(true)
	// })

	// it('exampleMethod_returnsAValue Method should return value as expected', () => {
	// 	const classInstance = wrapper.instance()
	// 	const newValue = classInstance.exampleMethod_returnsAValue(6)
	// 	expect(newValue).toBe(7)
	// })
})
