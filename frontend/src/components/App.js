import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';

import Home from './static/Home';
import Login from './session/Login';
import Register from './session/Register';
import Dashboard from './dashboard/Dashboard';


export const App = (props) => {
    
    return (
        <>
        <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
        </Switch>
        </>
    );
}





export default App;
