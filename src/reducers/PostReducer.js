import { POSTS_FETCHED, POSTS_SEARCHED } from '../constants/Constants'

const initialState = {
    postList: [],
    searchValue: ''
  };
  

export default function PostReducer(state = initialState, action = {}) {
    switch (action.type) {
        case POSTS_FETCHED: {
            return {
                ...state,
                postList: action.posts
            };
        }
        // case POSTS_SEARCHED: {
        //     return {
        //         ...state,
        //         searchValue: action.searchValue,
        //         postList: action.posts
        //     };
        // }
        default: return state;
    }
};