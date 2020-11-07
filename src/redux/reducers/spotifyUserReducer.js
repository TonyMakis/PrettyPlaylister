import {
    GET_SPOTIFY_USER_DATA,
    USER_LOGGED_OUT
} from '../actions/actionTypes';

export const INITIAL_STATE = {
    userId: '',
    country: '',
    displayName: '',
    email: '',
    numFollowers: 0,
    profileImgUrl: '',
    productType: ''
};

export default function spotifyUserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SPOTIFY_USER_DATA:
        return {
            ...state,
            userId: action.payload.id,
            country: action.payload.country,
            displayName: action.payload.display_name,
            email: action.payload.email,
            numFollowers: action.payload.followers.total,
            profileImgUrl: action.payload.images[0].url,
            productType: action.payload.product
        };
    case USER_LOGGED_OUT:
        return {
            ...INITIAL_STATE
        };
    default:
        return state;
  }
};
