import { types } from '../../actions/types'
import postsReducer from './reducer'

describe('Posts Reducers', () => {
	it('Should return default state', () => {
		const newState = postsReducer(undefined, {})
		expect(newState).toEqual([])
	})

	it('Should return new state if action type matched', () => {
		const posts = [{ title: 'one' }, { title: 'two' }, { title: 'three' }]

		const newState = postsReducer(undefined, {
			type: types.GET_POSTS,
			payload: posts,
		})
		expect(newState).toEqual(posts)
	})
})
