import { combineReducers } from 'redux';
import session from './sessionReducer';
import users from './usersReducer';
import ui from './ui/uiReducer';

const RootReducer = combineReducers({
    users,
    session,
    ui
});


export default RootReducer;