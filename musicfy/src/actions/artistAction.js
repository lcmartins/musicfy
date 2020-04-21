import { DID_SEARCH, NEW_ARTIST, NEW_SEARCH_VALUE } from '../types/artistTypes';

export const chooseArtist = (artist) => {
    return {
        type: NEW_ARTIST,
        payload: artist
    }
}

export const doNewSearch = (text) => {
    return {
        type: NEW_SEARCH_VALUE,
        payload: text
    }
} 

export const saveSearchHistory = (artist) => {
    return {
        type: DID_SEARCH,
        payload: artist
    }
}