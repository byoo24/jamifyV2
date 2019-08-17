import { combineReducers } from 'redux';
import mobileMenu from './navReducer';

const uiReducer = combineReducers({
    mobileMenu
});


export default uiReducer;