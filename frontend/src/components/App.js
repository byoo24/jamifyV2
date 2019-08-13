import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';

import Home from './static/Home';
import Login from './static/Login';
import Register from './static/Register';
import Dashboard from './Dashboard';


export const App = (props) => {
    const { loggedIn } = props;    
    
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <AuthRoute exact path="/login" loggedIn={loggedIn} component={Login} />
                <AuthRoute exact path="/register" loggedIn={loggedIn} component={Register} />
                <ProtectedRoute path="/dashboard" loggedIn={loggedIn} component={Dashboard} />
            </Switch>
        </>
    );
}

// export default App;

const msp = (state) => {
    console.log(state);
    return {
        loggedIn: !!state.session.user
    }
};


export default connect(msp)(App);
