import {
    OPEN_ARTISTS_PANEL,
    OPEN_ALBUMS_PANEL,
    OPEN_TRACKS_PANEL,
    CLOSE_ALBUMS_PANEL,
    CLOSE_ALL_PANELS
} from '../../actions/admin_actions/admin_actions';


const _nullState = {
    showAlbumsPanel: false,
    selectedArtistID: null
}

const albumPanelReducer = (state = _nullState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case OPEN_ALBUMS_PANEL:
            const newState = {
                showAlbumsPanel: true,
                selectedArtistID: action.selectedArtistID
            }
            return Object.assign({}, state, newState);

        case OPEN_ARTISTS_PANEL:
        case OPEN_TRACKS_PANEL:
        case CLOSE_ALBUMS_PANEL:
        case CLOSE_ALL_PANELS:
            return _nullState;

        default:
            return state;
    }
}


export default albumPanelReducer;