import { OPEN_NAV_MOBILE, CLOSE_NAV_MOBILE } from '../../actions/uiActions';

const initialState = {
    open: false
};


const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_NAV_MOBILE:
            return { open: true };
        case CLOSE_NAV_MOBILE:
            return { open: false };
        default:
            return state;
    }
}


export default navReducer;