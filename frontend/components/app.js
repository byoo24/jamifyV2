import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Signup from './static_pages/signup';
import Login from './static_pages/login';

import AdminHome from './admin_platform/admin_home';

export default ({store}) => {

    return (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
}


const App = () => {

    return (
        <Switch>
            <AuthRoute path="/signup" component={Signup} />
            <AuthRoute path="/login" component={Login} />
            <ProtectedRoute path="/edit" component={AdminHome} />
        </Switch>
    )
}



