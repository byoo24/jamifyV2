import { Map } from 'immutable';

import {
    RECEIVE_ALBUM,
    RECEIVE_ALBUMS,
    REMOVE_ALBUM
} from '../../actions/albums_actions';



const albumsReducer = (state = Map({}), action) => {
    switch (action.type) {
        case RECEIVE_ALBUM:
            return state.merge(action.album);
        case RECEIVE_ALBUMS:
            return state.merge(action.albums);
        default:
            return state;
    }
}


export default albumsReducer;