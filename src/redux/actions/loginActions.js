import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes';

export const logUserIn = (loginData) => {
    return { type: USER_LOGGED_IN, loginData };
}

export const logUserOut = () => {
    return { type: USER_LOGGED_OUT }
}
