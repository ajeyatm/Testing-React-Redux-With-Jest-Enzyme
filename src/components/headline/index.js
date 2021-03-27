import React, { Component } from 'react'

export default class Headline extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { headline, desc } = this.props

		if (!headline) return null

		return (
			<div data-test='headlineComponent'>
				<h1 data-test='headline'>{headline}</h1>
				<p data-test='desc'>{desc && desc}</p>
			</div>
		)
	}
}
