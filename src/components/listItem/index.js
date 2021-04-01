import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ title, desc }) => {
	if (!title) return null
	return (
		<div data-test='list-item' data-testid='list-item'>
			<h2 data-test='title'>{title}</h2>
			<div data-test='desc'>{desc}</div>
		</div>
	)
}

ListItem.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
}

export default ListItem
