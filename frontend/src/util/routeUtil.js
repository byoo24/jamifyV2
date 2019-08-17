import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to="/dashboard" />
        )
    )} />
);


export const Protected = ({ component: Component, loggedIn, ...rest }) => (
    <Route 
        {...rest}
        render={props => loggedIn ? (
            <Component {...props} loggedIn={loggedIn} />
        ) : (
            <Redirect to="/login" />
        )} 
    />
);




const msp = (state) => {
    return {
        loggedIn: state.session.isAuthenticated
    }
};

export const AuthRoute = connect(msp)(Auth);
export const ProtectedRoute = connect(msp)(Protected);