import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
    openArtistsPanel
} from '../../actions/admin_actions/admin_actions';


import ArtistForm from './forms/artist_form';
// import AlbumForm from './forms/artist_form';
import ArtistsPanel from './panels/artists_panel';
import AlbumsPanel from './panels/albums_panel';

const EditAudio = (props) => {    
    let audioForm = null;
    let audioPanel = null;

    useEffect(() => {
        props.openArtistsPanel();
    }, []);

    if (props.showArtistsPanel) {
        audioForm = <ArtistForm />
        audioPanel = <ArtistsPanel />;
    } else if (props.showAlbumsPanel) {
        audioPanel = <AlbumsPanel />;
    }

    return (
        <div>
            { audioForm }
            { audioPanel }
        </div>
    );
}





const msp = (state) => {
    const { showArtistsPanel } = state.admin.artistPanelInfo;
    const { showAlbumsPanel, selectedArtistID } = state.admin.albumPanelInfo;
    const { showTracksPanel, selectedAlbumID } = state.admin.trackPanelInfo;

    return {
        showArtistsPanel,
        showAlbumsPanel,
        showTracksPanel,
        selectedArtistID,
        selectedAlbumID
    }
}


const mdp = (dispatch) => {
    return {
        openArtistsPanel: () => dispatch(openArtistsPanel()),
    }
}


export default connect(msp, mdp)(EditAudio);