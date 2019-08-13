import React from 'react';

const Login = () => {

    return (
        <div className="login">
            <form className="loginForm">
                <label htmlFor="login-username">
                <input type="text"
                    placeholder="Username"
                />
                </label>

            </form>
        </div>
    )
}


export default Login;