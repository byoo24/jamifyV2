import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAlbums } from '../../../actions/albums_actions';
import { openTracksPanel } from '../../../actions/admin_actions/admin_actions';

const AlbumsPanel = (props) => {

    useEffect(() => {
        props.getAlbums(props.selectedArtistID);
    }, [])

    return (
        <ul>
            {props.albums.map(([album_id, album]) => (
                <li key={album_id} onClick={() => props.openTracksPanel(album_id)}>
                    {album.name}
                </li>
            ))}
        </ul>
    )
}



const msp = (state) => {
    const { selectedArtistID } = state.admin.albumPanelInfo;
    const albums = !state.albums.isEmpty() ? state.albums.toArray() : [];

    return {
        albums,
        selectedArtistID
    }
}


const mdp = (dispatch) => {
    return {
        getAlbums: (artist_id) => dispatch(getAlbums(artist_id)),
        openTracksPanel: (album_id) => dispatch(openTracksPanel(album_id))

    }
}

export default connect(msp, mdp)(AlbumsPanel);