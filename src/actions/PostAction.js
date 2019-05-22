import ApiConstants from '../constants/ApiConstants'

import { POSTS_FETCHED } from '../constants/Constants'
import { POSTS_SEARCHED } from '../constants/Constants'

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
        type: POSTS_FETCHED,
        posts
    }
}

export function searchPosts(value) {
    return {
        type: POSTS_SEARCHED, 
        value
    };
}

export function fetchPosts(search) {
    const { baseURL, POSTS_URL } = ApiConstants;
    let filter = {
        "where": {
            "title":"",
            "categoryType":"",
            "channel": ""
        },
        "limit": 5,
        "skip": 0,
        "order": "title ASC"
    };
    filter = {};
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

/*export function searchPosts() {
    const { baseURL, POSTS_URL } = ApiConstants;
    return dispatch => {
        fetch(`${baseURL}${POSTS_URL}`)
        .then(res => res.json())
        .then(data => dispatch(setPosts(data)));
    }
}*/