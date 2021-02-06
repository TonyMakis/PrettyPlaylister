import {
    SET_CLIP_COPY_DATA,
    CLEAR_CLIP_COPY_DATA
} from './actionTypes';

export const setClipCopyData = (copyData) => {
    return { type: SET_CLIP_COPY_DATA, copyData };
}

export const clearClipCopyData = () => {
    return { type: CLEAR_CLIP_COPY_DATA };
}