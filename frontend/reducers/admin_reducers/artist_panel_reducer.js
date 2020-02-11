import {
    OPEN_ARTISTS_PANEL,
    OPEN_ALBUMS_PANEL,
    OPEN_TRACKS_PANEL,
    CLOSE_ARTISTS_PANEL,
    CLOSE_ALL_PANELS
} from '../../actions/admin_actions/admin_actions';


const _nullState = {
    showArtistsPanel: false
}

const albumPanelReducer = (state = _nullState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case OPEN_ARTISTS_PANEL:
            const newState = {
                showArtistsPanel: true,
            }
            return Object.assign({}, state, newState);

        case OPEN_ALBUMS_PANEL:
        case OPEN_TRACKS_PANEL:
        case CLOSE_ARTISTS_PANEL:
        case CLOSE_ALL_PANELS:
            return _nullState;

        default:
            return state;
    }
}


export default albumPanelReducer;