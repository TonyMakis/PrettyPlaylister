import {
    SET_SEARCH_BAR_TEXT
} from '../actions/actionTypes';

export const INITIAL_STATE = { searchTerm: "" };

export default function searchPlaylistsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SEARCH_BAR_TEXT:
      return {
        ...state,
        searchTerm: action.searchData,
      };
    default:
        return state;
  }
};
