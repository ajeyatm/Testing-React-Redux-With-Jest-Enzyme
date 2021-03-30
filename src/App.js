import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
		<div className='App'>
			<Header />
			<section className='main'>
				<Headline
					headline='Posts'
					desc='Click the button to list the posts'
					tempArr={tempArr}
				/>
				<SharedButton {...buttonConfig} />
				{posts &&
					posts.map((post) => (
						<ListItem key={post.id} title={post.title} desc={post.body} />
					))}
			</section>
		</div>
	)
}

export default App
