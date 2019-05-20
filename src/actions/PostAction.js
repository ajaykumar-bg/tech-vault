import ApiConstants from '../constants/ApiConstants'

import { POSTS_FETCHED } from '../constants/Constants'

export function setPosts(posts=[]) {
    return {
        type: POSTS_FETCHED,
        posts
    }
}

export function fetchPosts() {
    const { baseURL, POSTS_URL } = ApiConstants;
    return dispatch => {
        fetch(`${baseURL}${POSTS_URL}`)
        .then(res => res.json())
        .then(data => dispatch(setPosts(data)));
    }
}