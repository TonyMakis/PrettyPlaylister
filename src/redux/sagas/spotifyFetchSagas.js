import { all, put, takeEvery } from 'redux-saga/effects';

import {
    GET_SPOTIFY_USER_DATA,
    GET_SPOTIFY_PLAYLISTS,
    GET_SPOTIFY_TRACKS,
    GET_SPOTIFY_USER_DATA_SAGA,
    GET_SPOTIFY_PLAYLISTS_SAGA,
    GET_SPOTIFY_TRACKS_SAGA
} from '../actions/actionTypes';

import {
    getAllTracks,
    organizePlaylistsPayload,
    organizeTracksPayload
} from './sagaDataHelpers';

export function* getSpotifyUserDataSaga(action) {
    const url = 'https://api.spotify.com/v1/me';
    const setHeaders = { headers: { Authorization: `Bearer ${action.token}` } };
    let payload = yield fetch(url, setHeaders);
    payload = yield payload.json();
    yield put({ type: GET_SPOTIFY_USER_DATA, payload });
}

export function* getSpotifyPlaylistsSaga(action) {
    const url = 'https://api.spotify.com/v1/me/playlists?offset=0&limit=50';
    const setHeaders = { headers: { Authorization: `Bearer ${action.token}` } };
    let res = yield fetch(url, setHeaders);
    res = yield res.json();
    const payload = yield organizePlaylistsPayload(res);
    yield put({ type: GET_SPOTIFY_PLAYLISTS, payload });
}

export function* getSpotifyTracksSaga(action) {
    const res = yield getAllTracks(
        action.playlistData.token,
        action.playlistData.playlistId
    );
    const payload = yield organizeTracksPayload(res);
    yield put({ type: GET_SPOTIFY_TRACKS, payload });
}

export function* watchGetSpotifyUserDataSaga() {
    yield takeEvery(GET_SPOTIFY_USER_DATA_SAGA, getSpotifyUserDataSaga);
}

export function* watchGetSpotifyPlaylistsSaga() {
    yield takeEvery(GET_SPOTIFY_PLAYLISTS_SAGA, getSpotifyPlaylistsSaga);
}

export function* watchGetSpotifyTracksSaga() {
    yield takeEvery(GET_SPOTIFY_TRACKS_SAGA, getSpotifyTracksSaga);
}

export default function* rootSaga() {
    yield all([
        watchGetSpotifyUserDataSaga(),
        watchGetSpotifyPlaylistsSaga(),
        watchGetSpotifyTracksSaga()
    ]);
}
