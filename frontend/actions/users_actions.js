import * as RestAPIUtil from '../util/rest_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';


export const receiveUsers = ({ users }) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const receiveUser = ({ user }) => {
    return {
        type: RECEIVE_USER,
        user
    }
}





export const getUsers = () => dispatch => {
    RestAPIUtil.getUsers().then(
        payload => dispatch(receiveUsers(payload))
    )
}

export const getUser = (user_id) => dispatch => {
    RestAPIUtil.getUser(user_id).then(
        payload => dispatch(receiveUser(payload))
    )
}

