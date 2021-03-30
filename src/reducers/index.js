import { combineReducers } from 'redux'
import getPostsReducer from './posts/reducer'
// import success from './SuccessReducer'

export default combineReducers({
	posts: getPostsReducer,
})
