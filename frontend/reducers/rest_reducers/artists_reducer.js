import { Map } from 'immutable';

import {
    RECEIVE_ARTIST,
    RECEIVE_ARTISTS,
    REMOVE_ARTIST
} from '../../actions/artists_actions';



const artistsReducer = (state = Map({}), action) => {
    switch (action.type) {
        case RECEIVE_ARTIST:
            return state.merge(action.artist);
        case RECEIVE_ARTISTS:
            return state.merge(action.artists);
        default:
            return state;
    }
}


export default artistsReducer;