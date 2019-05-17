import {combineReducers} from 'redux'

import LoginReducer from './LoginReducer'
import PostReducer from './PostReducer'

export default combineReducers({
    LoginReducer,
    PostReducer
})