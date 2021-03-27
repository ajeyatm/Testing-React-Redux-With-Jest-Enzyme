import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'
import checkProptypes from 'check-prop-types'

import { findByTestAttr, checkProps } from '../../../Utils'

const setUp = (props = {}) => {
	return shallow(<Headline {...props} />)
}

describe('Headline component', () => {
	describe('Checking PropTypes', () => {
		it('Should not throw any warnings', () => {
			const propsToBeChecked = {
				headline: 'Test headline',
				desc: 'Desc',
				tempArr: [
					{
						fName: 'ajeya',
						age: 26,
						online: true,
					},
				],
			}

			const propsErr = checkProps(Headline, propsToBeChecked)
			expect(propsErr).toBeUndefined()
		})
	})

	describe('With props', () => {
		let component
		beforeEach(() => {
			const props = {
				headline: 'Test Headline',
				desc: 'Test Description',
			}
			component = setUp(props)
		})
		it('Should render without errors', () => {
			const headlineComponent = findByTestAttr(component, 'headlineComponent')
			expect(headlineComponent.length).toBe(1)
		})

		it('Should render headline', () => {
			const headline = findByTestAttr(component, 'headline')
			expect(headline.length).toBe(1)
		})

		it('Should render description', () => {
			const desc = findByTestAttr(component, 'desc')
			expect(desc.length).toBe(1)
		})
	})

	describe('No props', () => {
		let component
		beforeEach(() => {
			component = setUp()
		})

		it('Should not render', () => {
			const headlineComponent = findByTestAttr(component, 'headlineComponent')
			expect(headlineComponent.length).toBe(0)
		})
	})
})
