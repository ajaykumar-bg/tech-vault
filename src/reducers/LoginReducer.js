import { LOGIN } from '../constants/Constants'

export default function LoginReducer(state = [], action = {}) {
    switch (action.type) {
        case LOGIN: {
            return action.user;
        }
        default: return state;
    }
};