import React from 'react'
import PropTypes from 'prop-types'

import './button.scss'

const SharedButton = ({ buttonText, emitEvent }) => {
	const submitHandler = () => {
		// e.preventDefault()
		if (emitEvent) emitEvent()
	}
	return (
		<div>
			<button
				data-test='shared-button'
				onClick={submitHandler}
				className='button'
			>
				{buttonText}
			</button>
		</div>
	)
}

SharedButton.propTypes = {
	buttonText: PropTypes.string,
	emitEvent: PropTypes.func,
}

// SharedButton.defaultProps = {
// 	buttonText: 'Get Posts',
// 	emitEvent: () => {
// 		console.log('hi')
// 	},
// }

export default SharedButton
