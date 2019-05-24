import ApiConstants from '../constants/ApiConstants'
import postData from '../constants/postsData'

import { FETCH_POSTS, SEARCH_POSTS, SORT_POSTS } from '../constants/Constants'

function handleResponse(response) {
    if(response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function setPosts(posts=[]) {
    return {
        type: FETCH_POSTS,
        posts
    }
}

export function searchPosts(searchKey) {
    return {
        type: SEARCH_POSTS, 
        searchKey
    };
}

export function sortPosts(sortKey) {
    return {
        type: SORT_POSTS, 
        sortKey
    };
}

export function sortPostFn(sortKey) {
    return dispatch => {
        dispatch(sortPosts(sortKey));
  };
}

export function searchPostFn(searchKey) {
    return dispatch => {
        dispatch(searchPosts(searchKey));
  };
}

export function fetchPosts(search, sortKey) {
    const { baseURL, POSTS_URL } = ApiConstants;
    /*let filter = {
        "where": {
            "title":"",
            "categoryType":"",
            "channel": ""
        },
        "limit": 5,
        "skip": 0,
        "order": "title ASC"
    };*/
    const filter = {
        searchKey: search,
        order: sortKey
    };
    const filterStr = JSON.stringify(filter);
    return dispatch => {
        return fetch(`${baseURL}${POSTS_URL}?filter=${filterStr}`, {
            method: 'get',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
        .then(data => dispatch(setPosts(data)))
    }
}