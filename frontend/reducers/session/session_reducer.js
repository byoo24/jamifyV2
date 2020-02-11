import { Map } from 'immutable';
import { 
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER 
} from '../../actions/session_actions';


const _nullSession = Map({});


const sessionReducer = (state = _nullSession, action) => {
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return state.merge({"current_user": action.user});
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}


export default sessionReducer;