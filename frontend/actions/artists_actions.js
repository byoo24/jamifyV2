import * as RestAPIUtil from '../util/rest_api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const REMOVE_ARTIST = 'REMOVE_ARTIST';


export const receiveArtists = ({ artists }) => {
    return {
        type: RECEIVE_ARTISTS,
        artists
    }
}

export const receiveArtist = ({ artist }) => {
    return {
        type: RECEIVE_ARTIST,
        artist
    }
}

export const removeArtist = ({ artist }) => {
    return {
        type: REMOVE_ARTIST,
        id: artist.id
    }
}





export const getAllArtists = () => dispatch => {
    RestAPIUtil.getArtists().then(
        payload => dispatch(receiveArtists(payload))
    )
}

export const getArtist = (artist_id) => dispatch => {
    RestAPIUtil.getArtist(artist_id).then(
        payload => dispatch(receiveArtist(payload))
    )
}

export const createArtist = (artist) => dispatch => {
    RestAPIUtil.postArtist(artist).then(
        payload => dispatch(receiveArtist(payload))
    )
}

export const updateArtist = (artist_id, artist) => dispatch => {
    RestAPIUtil.putArtist(artist_id, artist).then(
        payload => dispatch(receiveArtist(payload))
    )
}

export const deleteArtist = (artist_id) => dispatch => {
    RestAPIUtil.deleteArtist(artist_id).then(
        payload => dispatch(removeArtist(payload))
    )
}