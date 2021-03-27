import checkProptypes from 'check-prop-types'

export const findByTestAttr = (component, attr) =>
	component.find(`[data-test='${attr}']`)

export const checkProps = (component, propsToBeChecked) =>
	checkProptypes(component.propTypes, propsToBeChecked, 'props', component.name)
