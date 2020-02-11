import React, { useState, useEffect } from 'react';

import { getUsers } from '../../actions/users_actions';
import { connect } from 'react-redux';

const EditUser = (props) => {
    const { users } = props;

    useEffect(() => {
        props.getUsers();
    }, []);


    return (
        <div>
            <h1>Users</h1>
            <ul>
                { users.map(([user_id, user]) => (
                    <li key={user_id}>
                        {user.username}
                    </li>
                ))}
            </ul>
        </div>
    )
}






const msp = (state) => {
    const users = !state.users.isEmpty() ? state.users.toArray() : [];

    return {
        users
    }
}

const mdp = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers())
    }
}


export default connect(msp, mdp)(EditUser);