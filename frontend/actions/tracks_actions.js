import * as RestAPIUtil from '../util/rest_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';


export const receiveTracks = ({ tracks }) => {
    return {
        type: RECEIVE_TRACKS,
        tracks
    }
}

export const receiveTrack = ({ track }) => {
    return {
        type: RECEIVE_TRACK,
        track
    }
}

export const removeTrack = ({ track }) => {
    return {
        type: REMOVE_TRACK,
        id: track.id
    }
}





export const getTracks = () => dispatch => {
    RestAPIUtil.getTracks().then(
        payload => dispatch(receiveTracks(payload))
    )
}

export const getTrack = (track_id) => dispatch => {
    RestAPIUtil.getTrack(track_id).then(
        payload => dispatch(receiveTrack(payload))
    )
}

export const createTrack = (track) => dispatch => {
    RestAPIUtil.postTrack(track).then(
        payload => dispatch(receiveTrack(payload))
    )
}

export const updateTrack = (track_id, track) => dispatch => {
    RestAPIUtil.putTrack(track_id, track).then(
        payload => dispatch(receiveTrack(payload))
    )
}

export const deleteTrack = (track_id) => dispatch => {
    RestAPIUtil.deleteTrack(track_id).then(
        payload => dispatch(removeTrack(payload))
    )
}