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

export function loginUser(googleResponse) {
    const user = {
        name: googleResponse.w3.ig,
        provider: "google",
        email: googleResponse.w3.U3,
        provider_id: googleResponse.El,
        token: googleResponse.Zi.access_token,
        provider_pic: googleResponse.w3.Paa
      };
    StorageService.setLoggedInUser(user);
    return dispatch => {
        dispatch(login(user));
  };
}

export function logoutUser() {
    // StorageService.clearStorage();
    return dispatch => {
        dispatch(logout());
  };
}