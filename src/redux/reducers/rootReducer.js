import { combineReducers } from 'redux';

import loginReducer from './loginReducer';
import spotifyUserReducer from './spotifyUserReducer';
import spotifyPlaylistReducer from './spotifyPlaylistReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    userProfile: spotifyUserReducer,
    userPlaylists: spotifyPlaylistReducer
});

export default rootReducer;
