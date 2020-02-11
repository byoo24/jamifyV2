import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createArtist } from '../../../actions/artists_actions';

const ArtistForm = (props) => {
    const [newArtistForm, setNewArtistForm] = useState({
        name: ""
    });

    const updateForm = (field) => {
        return e => setNewArtistForm({
            ...newArtistForm,
            [field]: e.target.value
        });
    }

    return (
        <form className="artist-creator">
            <label htmlFor="artist-creator-name" className="sr-only">Username</label>
            <input type="text"
                id="artist-creator-name"
                placeholder="Artist's Name"
                onChange={updateForm("name")} />

            <div className="submit-row">
                <label className="session-row-container">
                    <button className="session-submit">Submit</button>
                </label>
            </div>
        </form>
    )
}

const mdp = (dispatch) => {
    return {
        createArtist: (artist) => dispatch(createArtist(artist))
    }
}

export default connect(null, mdp)(ArtistForm);