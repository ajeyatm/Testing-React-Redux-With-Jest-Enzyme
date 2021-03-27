import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'
import { findByTestAttr } from '../../../Utils'

const setUp = (props = {}) => {
	return shallow(<Headline {...props} />)
}

describe('Headline component', () => {
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
