import { LOGIN, LOGOUT } from '../constants/Constants'
import StorageService from '../services/StorageService'

const user = StorageService.getLoggedInUser();
const initialState = {
    user: user,
    isAuthenicated: user ? true : false 
};

export default function AuthReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                user: action.user,
                isAuthenicated: true
            };
        }
        case LOGOUT: {
            return {
                ...state,
                user: {},
                isAuthenicated: false
            };
        }
        default: return state;
    }
};