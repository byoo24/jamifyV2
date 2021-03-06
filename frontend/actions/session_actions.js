import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


export const receiveCurrentUser = ({user}) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}





export const login = user => dispatch => {
    SessionAPIUtil.login(user).then(
        payload => dispatch(receiveCurrentUser(payload))
    )    
}

export const signup = user => dispatch => {
    SessionAPIUtil.signup(user).then(
        payload => dispatch(receiveCurrentUser(payload))
    )
}

export const logout = () => dispatch => {
    SessionAPIUtil.logout().then(
        () => dispatch(logoutCurrentUser())
    )
}