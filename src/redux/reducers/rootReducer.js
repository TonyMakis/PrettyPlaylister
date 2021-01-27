import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loginReducer from './loginReducer';
import spotifyUserReducer from './spotifyUserReducer';
import spotifyPlaylistReducer from './spotifyPlaylistReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login', 'userProfile', 'userPlaylists'],
};

const rootReducer = combineReducers({
    login: loginReducer,
    userProfile: spotifyUserReducer,
    userPlaylists: spotifyPlaylistReducer
});

export default persistReducer(persistConfig, rootReducer);
