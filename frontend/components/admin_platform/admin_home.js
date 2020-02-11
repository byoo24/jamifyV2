import React from 'react';
import { Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { CustomRoute } from '../../util/route_util';
import EditAudio from './edit_audio';
import EditUser from './edit_user';

import { logout } from '../../actions/session_actions';

class AdminHome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const controls = [
            <Link key={0} className="control-link" to="/edit/users">Users</Link>,
            <Link key={1} className="control-link" to="/edit/genres">Genres</Link>,
            <Link key={2} className="control-link" to="/edit/audio">Audio</Link>
        ];



    return (
        <div className="admin-edit">
            <div className="control-list">
                <div className="control-list-wrap">
                    {controls}
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            </div>

            <Switch>
                <CustomRoute path="/edit/audio" component={EditAudio} />
                <CustomRoute path="/edit/users" component={EditUser} />
            </Switch>
        </div>
        
    );
    }
}





const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mdp)(AdminHome);