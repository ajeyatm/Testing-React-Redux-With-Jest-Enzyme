import React from 'react'
import { shallow } from 'enzyme'
import ListItem from './index'
import { findByTestAttr, checkProps } from '../../../Utils'

describe('ListItem Component', () => {
	describe('Checking propTypes', () => {
		it('Should not throw any errors ', () => {
			const propsToBeChecked = {
				title: 'test title',
				description: 'test description',
			}
			const propErr = checkProps(ListItem, propsToBeChecked)
			expect(propErr).toBeUndefined()
		})
	})

	describe('Render Component', () => {
		let wrapper
		beforeEach(() => {
			const props = {
				title: 'test title',
				description: 'test description',
			}
			wrapper = shallow(<ListItem {...props} />)
		})

		it('Should render without errors', () => {
			const componentWrapper = findByTestAttr(wrapper, 'list-item')
			expect(componentWrapper.length).toBe(1)
		})
		it('Should render a title', () => {
			const titleWrapper = findByTestAttr(wrapper, 'title')
			expect(titleWrapper.length).toBe(1)
		})

		it('Should render a description', () => {
			const descWrapper = findByTestAttr(wrapper, 'desc')
			expect(descWrapper.length).toBe(1)
		})
	})

	describe('Should NOT render', () => {
		let wrapper
		beforeEach(() => {
			const props = {
				desc: 'Some text',
			}
			wrapper = shallow(<ListItem {...props} />)
		})

		it('Component is not rendered', () => {
			const component = findByTestAttr(wrapper, 'list-item')
			expect(component.length).toBe(0)
		})
	})
})
