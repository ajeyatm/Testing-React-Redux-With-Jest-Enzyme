import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './headline.scss'

class Headline extends Component {
	render() {
		const { headline, desc } = this.props

		if (!headline) return null

		return (
			<div data-test='headlineComponent' className='headline-wrapper'>
				<h1 data-test='headline'>{headline}</h1>
				<p data-test='desc'>{desc && desc}</p>
			</div>
		)
	}
}

Headline.propTypes = {
	headline: PropTypes.string,
	desc: PropTypes.string,
	tempArr: PropTypes.arrayOf(
		PropTypes.shape({
			fName: PropTypes.string,
			age: PropTypes.number,
			online: PropTypes.bool,
		})
	),
}

export default Headline
