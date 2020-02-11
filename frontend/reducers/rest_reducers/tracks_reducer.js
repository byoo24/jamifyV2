import { Map } from 'immutable';

import { 
    RECEIVE_TRACK,
    RECEIVE_TRACKS,
    REMOVE_TRACK
} from '../../actions/tracks_actions';



const tracksReducer = (state = Map({}), action) => {
    switch (action.type) {
        case RECEIVE_TRACK:
            return state.merge(action.track);
        case RECEIVE_TRACKS:
            return state.merge(action.tracks);
        default:
            return state;
    }
}


export default tracksReducer;