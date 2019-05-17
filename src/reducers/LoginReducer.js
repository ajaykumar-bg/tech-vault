import { LOGIN } from '../constants/Constants'

export default function LoginReducer(state = [], action = {}) {
    switch (action.type) {
        case LOGIN: {
            return action.skills;
        }
        default: return state;
    }
};