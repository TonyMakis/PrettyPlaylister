import {
    GET_SPOTIFY_PLAYLISTS,
    USER_LOGGED_OUT
} from '../actions/actionTypes';

export const INITIAL_STATE = {
    loadingPlaylists: true,
    totalPlaylists: 0,
    playlists: []
};

export default function spotifyPlaylistReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SPOTIFY_PLAYLISTS:
        return {
            ...state,
            loadingPlaylists: false,
            totalPlaylists: action.payload.total,
            playlists: action.payload.playlists
        };
    case USER_LOGGED_OUT:
        return {
            ...INITIAL_STATE
        };
    default:
        return state;
  }
};
