import { combineReducers } from 'redux';

import artistPanelInfo from './artist_panel_reducer';
import albumPanelInfo from './album_panel_reducer';
import trackPanelInfo from './track_panel_reducer';

export default combineReducers({
    artistPanelInfo,
    albumPanelInfo,
    trackPanelInfo
});