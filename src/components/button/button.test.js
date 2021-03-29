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

	describe('Render', () => {
		let wrapper
		beforeEach(() => {
			const props = {
				buttonText: 'Get Posts',
				emitEvent: () => {},
			}
			wrapper = shallow(<SharedButton {...props} />)
		})

		it('Should render a button', () => {
			const button = findByTestAttr(wrapper, 'shared-button')
			expect(button.length).toBe(1)
		})
	})
})
