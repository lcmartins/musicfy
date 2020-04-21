import { DID_SEARCH, NEW_ARTIST, NEW_SEARCH_VALUE } from '../types/artistTypes';

const INITIAL_STATE = { artist: {}, searchHistory: [] };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DID_SEARCH:
            const currentSearchHistory = [...state.searchHistory];
            if (!currentSearchHistory.find(artist => artist.name === action.payload.name)) {
                currentSearchHistory.unshift(action.payload);
                return { ...state, searchHistory: currentSearchHistory }
            }
            return state;
        case NEW_ARTIST:
            return { ...state, artist: action.payload };
        case NEW_SEARCH_VALUE:
            return { ...state, newSearchValue: action.payload };
        default:
            return state;
    }
}