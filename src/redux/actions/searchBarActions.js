import {
    SET_SEARCH_BAR_TEXT
} from './actionTypes';

export const setSearchTerm = (searchData) => {
    return { type: SET_SEARCH_BAR_TEXT, searchData };
}
