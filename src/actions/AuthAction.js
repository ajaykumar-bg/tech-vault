import { LOGIN, LOGOUT } from '../constants/Constants'
import StorageService from '../services/StorageService'

export function login(user) {
    return {
        type: LOGIN, 
        user
    };
}

export function logout() {
    return {
        type: LOGOUT
    };
}

export function loginUser(user) {
    StorageService.setLoggedInUser(user);
    return dispatch => {
        dispatch(login(user));
  };
}

export function logoutUser() {
    StorageService.clearStorage();
    return dispatch => {
        dispatch(logout());
  };
}