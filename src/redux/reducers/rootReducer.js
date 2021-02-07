import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loginReducer from './loginReducer';
import spotifyUserReducer from './spotifyUserReducer';
import spotifyPlaylistReducer from './spotifyPlaylistReducer';
import spotifyTracksReducer from './spotifyTracksReducer';
import trackSelectionReducer from './trackSelectionReducer';
import clipboardCopyReducer from './clipboardCopyReducer';
import searchPlaylistReducer from './searchPlaylistsReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'login',
        'userProfile',
        'userPlaylists',
        'playlistTracks',
        'selectedTracks',
        'clipboardCopy',
        'search'
    ],
};

const rootReducer = combineReducers({
    login: loginReducer,
    userProfile: spotifyUserReducer,
    userPlaylists: spotifyPlaylistReducer,
    playlistTracks: spotifyTracksReducer,
    selectedTracks: trackSelectionReducer,
    clipboardCopy: clipboardCopyReducer,
    search: searchPlaylistReducer
});

export default persistReducer(persistConfig, rootReducer);
