import { POSTS_FETCHED } from '../constants/Constants'

export default function LoginReducer(state = [], action = {}) {
    switch (action.type) {
        case POSTS_FETCHED: {
            return action.posts;
        }
        default: return state;
    }
};