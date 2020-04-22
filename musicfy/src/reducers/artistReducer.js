import { DID_SEARCH, FOUND_ON_SEARCH, NEW_ARTIST, NEW_SEARCH_VALUE, SAVE_RELATED, SAVE_MUSICS_ON_SEARCH } from '../types/artistTypes';

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
        case FOUND_ON_SEARCH:
            return { ...state, artistFoundOnSearch: action.payload }
        case NEW_ARTIST:
            const stateCopy = { ...state };
            stateCopy.newSearchValue = undefined;
            stateCopy.artistFoundOnSearch = undefined;
            stateCopy.musicsOnSearch = [];
            stateCopy.artist = action.payload;
            const searchHistory = [...state.searchHistory];
            if (!searchHistory.find(artist => artist.name === action.payload.name)) {
                searchHistory.unshift(action.payload);
            }
            stateCopy.searchHistory = searchHistory;
            return stateCopy;
        case NEW_SEARCH_VALUE:
            return { ...state, newSearchValue: action.payload };
        case SAVE_RELATED:
            return { ...state, relatedAlbums: action.payload };
        case SAVE_MUSICS_ON_SEARCH:
            return { ...state, musicsOnSearch: action.payload }
        default:
            return state;
    }
}