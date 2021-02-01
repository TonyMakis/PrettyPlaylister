import {
    GET_SPOTIFY_TRACKS,
    CLEAR_SPOTIFY_TRACKS,
    USER_LOGGED_OUT
} from '../actions/actionTypes';

export const INITIAL_STATE = {
    loadingTracks: true,
    tracks: []
};

export default function spotifyTracksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SPOTIFY_TRACKS:
        return {
            ...state,
            loadingTracks: false,
            tracks: action.payload.items
        };
    case CLEAR_SPOTIFY_TRACKS:
        return {
            ...INITIAL_STATE
        }
    case USER_LOGGED_OUT:
        return {
            ...INITIAL_STATE
        };
    default:
        return state;
  }
};
