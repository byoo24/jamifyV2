import { Map } from 'immutable';

import { RECEIVE_USERS } from '../../actions/users_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';


const usersReducer = (state = Map({}), action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return state.merge(action.user);
        case RECEIVE_USERS:
            return state.merge(action.users);
        default:
            return state;
    }
}


export default usersReducer;