import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';


let middleware = [thunk];
// debugger
if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
}

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middleware)
    )
);


export default configureStore;