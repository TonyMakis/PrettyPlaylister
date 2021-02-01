import {
    CLEAR_SELECTED_TRACKS,
    SET_SELECTED_TRACKS
} from '../actions/actionTypes';

export const INITIAL_STATE = { tracksSelected: [] };

export default function trackSelectionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SELECTED_TRACKS:
      return {
        ...state,
        tracksSelected: action.trackData,
      };
    case CLEAR_SELECTED_TRACKS:
      return {
        ...INITIAL_STATE
      }
    default:
        return state;
  }
};
