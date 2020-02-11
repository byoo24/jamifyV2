import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';


const mapStateToProps = state => {
    return {
        loggedIn: state.session.has("current_user"),
    }
};


// AuthRoute
const Auth = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/browse" /> : <Component {...props} />
        )} />
);


// ProtectedRoute
const Protected = ({ component: Component, path, loggedIn }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
        )} />
);


// CustomRoute
export const CustomRoute = ({ component: Component, path, ...rest }) => (
    <Route
        path={path}
        render={props => (
            <Component {...props} {...rest} />
        )} />
);


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));