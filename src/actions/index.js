import axios from 'axios'
import { types } from './types'

export const fetchPosts = () => async (dispatch) => {
	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
	try {
		const { data } = await axios.get(url)
		dispatch({
			type: types.GET_POSTS,
			payload: data,
		})
	} catch (err) {
		console.log(err.message)
	}
}
