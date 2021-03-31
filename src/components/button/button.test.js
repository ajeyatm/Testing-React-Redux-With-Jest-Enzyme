import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../../../Utils'
import SharedButton from './index'

describe('SharedButton Component', () => {
	describe('Checking PropTypes', () => {
		it('Should not throw any warnings', () => {
			const propsToBeChecked = {
				buttonText: 'Get Posts',
				emitEvent: () => {},
			}

			const propsErr = checkProps(SharedButton, propsToBeChecked)

			expect(propsErr).toBeUndefined()
		})
	})

	describe('Renders', () => {
		let wrapper
		let mockFunc
		beforeEach(() => {
			mockFunc = jest.fn()
			const props = {
				buttonText: 'Example Button Text',
				emitEvent: mockFunc,
			}
			wrapper = shallow(<SharedButton {...props} />)
		})

		it('Should Render a button', () => {
			const button = findByTestAttr(wrapper, 'shared-button')
			expect(button.length).toBe(1)
		})

		it('Should emit callback on click event', () => {
			const button = findByTestAttr(wrapper, 'shared-button')
			button.simulate('click')

			const callback = mockFunc.mock.calls.length
			expect(callback).toBe(1)
		})
	})
})
