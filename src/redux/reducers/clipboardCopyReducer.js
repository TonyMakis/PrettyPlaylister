import {
    SET_CLIP_COPY_DATA,
    CLEAR_CLIP_COPY_DATA
} from '../actions/actionTypes';

export const INITIAL_STATE = { clipCopyData: null };

export default function clipboardCopyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CLIP_COPY_DATA:
      return {
        ...state,
        clipCopyData: action.copyData,
      };
    case CLEAR_CLIP_COPY_DATA:
      return {
        ...INITIAL_STATE
      }
    default:
        return state;
  }
};
