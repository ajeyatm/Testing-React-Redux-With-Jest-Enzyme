import React, { useState } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import './app.scss'
import Header from './components/header'
import Headline from './components/headline'
import SharedButton from './components/button'

import { fetchPosts } from './actions'
import ListItem from './components/listItem'

const tempArr = [
	{
		fName: 'ajeya',
		age: 26,
		online: true,
	},
]

const initialState = {
	hideBtn: false,
}

{
	/*
	class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			...initialState,
		}
		this.fetch = this.fetch.bind(this)
	}

	fetch() {
		this.props.fetchPosts()
		this.exampleMethod_updatesState()
	}

	exampleMethod_updatesState() {
		const { hideBtn } = this.state
		this.setState({
			hideBtn: !hideBtn,
		})
	}

	exampleMethod_returnsAValue(number) {
		return number + 1
	}

	render() {
		const { posts } = this.props
		const { hideBtn } = this.state

		const configButton = {
			buttonText: 'Get posts',
			emitEvent: this.fetch,
		}

		return (
			<div className='App' data-test='appComponent'>
				<Header />
				<section className='main'>
					<Headline
						header='Posts'
						desc='Click the button to render posts!'
						tempArr={tempArr}
					/>

					{!hideBtn && <SharedButton {...configButton} />}

					{posts.length > 0 && (
						<div>
							{posts.map((post, index) => {
								const { title, body } = post
								const configListItem = {
									title,
									desc: body,
								}
								return <ListItem key={index} {...configListItem} />
							})}
						</div>
					)}
				</section>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
	}
}

export default connect(mapStateToProps, { fetchPosts })(App)
*/
}

function App() {
	const dispatch = useDispatch()
	const posts = useSelector((state) => state.posts)

	const buttonConfig = {
		buttonText: 'Get Posts',
		emitEvent: () => {
			// e.preventDefault()
			dispatch(fetchPosts())
		},
	}
	// console.log(posts)
	return (
		<div className='App' data-testid='appComponent'>
			<Header />
			<section className='main'>
				<Headline
					headline='Posts'
					desc='Click the button to list the posts'
					tempArr={tempArr}
				/>
				<SharedButton {...buttonConfig} />
				<div data-testid='posts'>
					{posts &&
						posts.map((post, index) => (
							<ListItem key={index} title={post.title} desc={post.body} />
						))}
				</div>
			</section>
		</div>
	)
}

export default App
