import { FETCH_POSTS, SEARCH_POSTS, SORT_POSTS } from '../constants/Constants'

const initialState = {
    postList: [],
    searchKey: '',
    sortKey: ''
  };
  

export default function PostReducer(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_POSTS: {
            return {
                ...state,
                postList: action.posts
            };
        }
        case SEARCH_POSTS: {
            return {
                ...state,
                searchValue: action.searchValue
            };
        }
        case SORT_POSTS: {
            return {
                ...state,
                sortKey: action.sortKey
            };
        }
        default: return state;
    }
};