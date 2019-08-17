import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/sessionActions';




const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e, user) => {
        e.preventDefault();
        props.login(user);
    }

    return (
        <div className="login" onSubmit={(e) => handleSubmit(e, {username, password})}>
            <form className="loginForm">
                <label htmlFor="username">
                    <input type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        value={username}
                    />
                </label>

                <label htmlFor="password">
                    <input type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        value={password}
                    />
                </label>

                <label className="submit">
                    <input type="submit" value="submit" />
                </label>

            </form>

            
        </div>
    )
}




const mdp = (dispatch) => {
    return {
        login: (user) => dispatch(login(user))
    }
}


export default connect(null, mdp)(Login);



