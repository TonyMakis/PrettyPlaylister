import {
    GET_SPOTIFY_USER_DATA_SAGA,
    GET_SPOTIFY_PLAYLISTS_SAGA,
    GET_SPOTIFY_TRACKS_SAGA,
    CLEAR_SPOTIFY_TRACKS
} from './actionTypes';

export const getSpotifyUserData = (token) => {
    return { type: GET_SPOTIFY_USER_DATA_SAGA, token };
}

export const getSpotifyPlaylists = (token) => {
    return { type: GET_SPOTIFY_PLAYLISTS_SAGA, token };
}

export const getSpotifyTracks = (playlistData) => {
    return { type: GET_SPOTIFY_TRACKS_SAGA, playlistData };
}

export const clearSpotifyTracks = () => {
    return { type: CLEAR_SPOTIFY_TRACKS }
}
