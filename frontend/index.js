import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Map } from 'immutable';

import App from './components/app';


if (process.env.NODE_ENV !== 'production') {
    console.log('Entered development mode');
}


document.addEventListener('DOMContentLoaded', () => {
    
    let preloadedState = {};
    
    if (window.current_user) {
        preloadedState.session = Map({"current_user": window.current_user});

        delete window.current_user;
    }
    
    const store = configureStore(preloadedState);
    
    ReactDOM.render(
        <App store={ store } />,
        document.getElementById('root')
    );
})