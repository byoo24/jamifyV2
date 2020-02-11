import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAllArtists } from '../../../actions/artists_actions';
import { openAlbumsPanel } from '../../../actions/admin_actions/admin_actions';

const ArtistsPanel = (props) => {

    useEffect(() => {
        props.getAllArtists();
    }, []);

    return (
        <ul>
            {props.artists.map(([artist_id, artist]) => (
                <li key={artist_id} onClick={() => props.openAlbumsPanel(artist_id)}>
                    {artist.name}
                </li>
            ))}
        </ul>
    )
}




const msp = (state) => {
    const artists = !state.artists.isEmpty() ? state.artists.toArray() : [];

    return {
        artists
    }
}


const mdp = (dispatch) => {
    return {
        getAllArtists: () => dispatch(getAllArtists()),
        openAlbumsPanel: (artist_id) => dispatch(openAlbumsPanel(artist_id))

    }
}

export default connect(msp, mdp)(ArtistsPanel);