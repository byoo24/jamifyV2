import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/sessionApiUtil';
import { logout } from './actions/sessionActions';

import './scss/style.scss';

import Root from './components/Root';

// Testing
import axios from 'axios';
import {login} from './actions/sessionActions';



document.addEventListener('DOMContentLoaded', () => {
    let store;

    if (localStorage.jwtToken) {
        // If a returning user has a session token stored in localStorage
        setAuthToken(localStorage.jwtToken);

        // Decode the token to obtain the user's info
        const decodedUser = jwt_decode(localStorage.jwtToken);
        

        // Create a preconfigured state to add to our store
        let preloadedState = {
            session: {
                isAuthenticated: true,
            },
            users: {
                [decodedUser.id]: decodedUser
            }
        };

        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;

        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        }

    } else {
        store = configureStore({});
    }

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);


    window.store = store;
})






// Testing
window.axios = axios;
window.login = login;
window.logout = logout;