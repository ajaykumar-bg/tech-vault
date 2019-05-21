import { POSTS_FETCHED } from '../constants/Constants'

export default function PostReducer(state = [], action = {}) {
    switch (action.type) {
        case POSTS_FETCHED: {
            return action.posts;
        }
        default: return state;
    }
};