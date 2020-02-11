import { combineReducers } from 'redux';

import session from './session/session_reducer';
import users from './session/users_reducer';
import albums from './rest_reducers/albums_reducer';
import artists from './rest_reducers/artists_reducer';
import tracks from './rest_reducers/tracks_reducer';
import admin from './admin_reducers/admin_reducer';

export default combineReducers({
    session,
    users,
    albums,
    artists,
    tracks,
    admin
});