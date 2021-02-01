import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loginReducer from './loginReducer';
import spotifyUserReducer from './spotifyUserReducer';
import spotifyPlaylistReducer from './spotifyPlaylistReducer';
import spotifyTracksReducer from './spotifyTracksReducer';
import trackSelectionReducer from './trackSelectionReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'login',
        'userProfile',
        'userPlaylists',
        'playlistTracks',
        'selectedTracks'
    ],
};

const rootReducer = combineReducers({
    login: loginReducer,
    userProfile: spotifyUserReducer,
    userPlaylists: spotifyPlaylistReducer,
    playlistTracks: spotifyTracksReducer,
    selectedTracks: trackSelectionReducer
});

export default persistReducer(persistConfig, rootReducer);
