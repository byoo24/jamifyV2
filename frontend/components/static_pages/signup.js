import React from 'react';


// container
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.signup(this.state);        
    }


    render() {
        const btnSubmitName = "SIGNUP";

        return (
            <form className="session-signup" onSubmit={this.handleSubmit}>
                <label htmlFor="session-username" className="sr-only">Username</label>
                <input type="text"
                    id="session-username"
                    placeholder="Username"
                    onChange={this.update('username')} />

                <label htmlFor="session-password" className="sr-only">Password</label>
                <input type="password"
                    placeholder="Password"
                    onChange={this.update('password')} />

                <div className="submit-row">
                    <label className="session-row-container">
                        <button className="session-submit">{ btnSubmitName }</button>
                    </label>
                </div>
            </form>
        );
    }
}







const mdp = (dispatch) => {
    return {
        signup: user => dispatch(signup(user))
    }
}


export default connect(null, mdp)(Signup);