import * as RestAPIUtil from '../util/rest_api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';


export const receiveAlbums = ({ albums }) => {
    return {
        type: RECEIVE_ALBUMS,
        albums
    }
}

export const receiveAlbum = ({ album }) => {
    return {
        type: RECEIVE_ALBUM,
        album
    }
}

export const removeAlbum = ({ album }) => {
    return {
        type: REMOVE_ALBUM,
        id: album.id
    }
}


export const getAllAlbums = () => dispatch => {
    RestAPIUtil.getAllAlbums().then(
        payload => dispatch(receiveAlbums(payload))
    )
}

export const getAlbums = (artist_id) => dispatch => {
    RestAPIUtil.getAlbums(artist_id).then(
        payload => dispatch(receiveAlbums(payload))
    )
}

export const getAlbum = (album_id) => dispatch => {
    RestAPIUtil.getAlbum(album_id).then(
        payload => dispatch(receiveAlbum(payload))
    )
}

export const createAlbum = (album) => dispatch => {
    RestAPIUtil.postAlbum(album).then(
        payload => dispatch(receiveAlbum(payload))
    )
}

export const updateAlbum = (album_id, album) => dispatch => {
    RestAPIUtil.putAlbum(album_id, album).then(
        payload => dispatch(receiveAlbum(payload))
    )
}

export const deleteAlbum = (album_id) => dispatch => {
    RestAPIUtil.deleteAlbum(album_id).then(
        payload => dispatch(removeAlbum(payload))
    )
}