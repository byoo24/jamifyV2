import { combineReducers } from 'redux';
import session from './sessionReducer';
import users from './usersReducer';

const RootReducer = combineReducers({
    users,
    session
});


export default RootReducer;