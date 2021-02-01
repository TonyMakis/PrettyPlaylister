import {
    SET_SELECTED_TRACKS,
    CLEAR_SELECTED_TRACKS
} from './actionTypes';

export const setSelectedTracks = (trackData) => {
    return { type: SET_SELECTED_TRACKS, trackData };
}

export const clearSelectedTracks = () => {
    return { type: CLEAR_SELECTED_TRACKS };
}
