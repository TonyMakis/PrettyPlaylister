import {
    GET_SPOTIFY_USER_DATA_SAGA,
    GET_SPOTIFY_PLAYLISTS_SAGA,
    GET_SPOTIFY_TRACKS_SAGA
} from './actionTypes';

export const getSpotifyUserData = (token) => {
    return { type: GET_SPOTIFY_USER_DATA_SAGA, token };
}

export const getSpotifyPlaylists = (token) => {
    return { type: GET_SPOTIFY_PLAYLISTS_SAGA, token };
}

export const getSpotifyTracks = (token, playlistIds) => {
    return { 
        type: GET_SPOTIFY_TRACKS_SAGA,
        data: {
            token,
            playlistIds
        }
    }
}
