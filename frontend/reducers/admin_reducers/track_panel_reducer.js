import {
    OPEN_ARTISTS_PANEL,
    OPEN_ALBUMS_PANEL,
    OPEN_TRACKS_PANEL,
    CLOSE_TRACKS_PANEL,
    CLOSE_ALL_PANELS
} from '../../actions/admin_actions/admin_actions';


const _nullState = {
    showTracksPanel: false,
    selectedAlbumID: null
}

const trackPanelReducer = (state = _nullState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case OPEN_TRACKS_PANEL:
            const newState = {
                showTracksPanel: true,
                selectedAlbumID: action.selectedAlbumID
            }
            return Object.assign({}, state, newState);

        case OPEN_ARTISTS_PANEL:
        case OPEN_ALBUMS_PANEL:
        case CLOSE_TRACKS_PANEL:
        case CLOSE_ALL_PANELS:
            return _nullState;

        default:
            return state;
    }
}


export default trackPanelReducer;