import AJAX from './ajax_util';


// USERS
export const getUsers = () => {
    return AJAX.get('api/users');
}

export const getUser = (user_id) => {
    return AJAX.get(`api/users/${user_id}`);
}

export const deleteUser = (user_id) => {
    return AJAX.delete(`api/users/${user_id}`);
}



// ARTISTS
export const getArtists = () => {
    return AJAX.get('/api/artists');
}

export const getArtist = (artist_id) => {
    return AJAX.get(`/api/artists/${artist_id}`);
}

export const postArtist = (data) => {
    return AJAX.post('/api/artists', data);
}

export const putArtist = (artist_id, data) => {
    return AJAX.put(`/api/artists/${artist_id}`, data);
}

export const deleteArtist = (artist_id) => {
    return AJAX.delete(`/api/artists/${artist_id}`);
}



// ALBUMS
export const getAllAlbums = () => {
    return AJAX.get('/api/albums');
}

export const getAlbums = (artist_id) => {
    return AJAX.get(`/api/artists/${artist_id}/albums`);
}

export const getAlbum = (album_id) => {
    return AJAX.get(`/api/albums/${album_id}`);
}

export const postAlbum = () => {
    return AJAX.post('/api/albums');
}

export const putAlbum = (album_id, data) => {
    return AJAX.put(`/api/albums/${album_id}`, data);
}

export const deleteAlbum = (album_id) => {
    return AJAX.delete(`/api/albums/${album_id}`);
}



// TRACKS
export const getTracks = () => {
    return AJAX.get('/api/tracks');
}

export const getTrack = (track_id) => {
    return AJAX.get(`/api/tracks/${track_id}`);
}

export const postTrack = () => {
    return AJAX.post('/api/tracks');
}

export const putTrack = (track_id, data) => {
    return AJAX.put(`/api/tracks/${track_id}`, data);
}

export const deleteTrack = (track_id) => {
    return AJAX.delete(`/api/tracks/${track_id}`);
}