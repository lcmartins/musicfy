import {
  DID_SEARCH,
  FOUND_ON_SEARCH,
  NEW_ARTIST,
  NEW_SEARCH_VALUE,
  SAVE_RELATED,
  SAVE_MUSICS_ON_SEARCH,
} from "../types/artistTypes";

export const chooseArtist = (artist) => {
  return {
    type: NEW_ARTIST,
    payload: artist,
  };
};

export const doNewSearch = (text) => {
  return {
    type: NEW_SEARCH_VALUE,
    payload: text,
  };
};

export const saveSearchHistory = (artist) => {
  return {
    type: DID_SEARCH,
    payload: artist,
  };
};

export const saveFoundOnSearch = (artist) => {
  return {
    type: FOUND_ON_SEARCH,
    payload: artist,
  };
};

export const saveMusicsOnSearch = (musics) => {
  return {
    type: SAVE_MUSICS_ON_SEARCH,
    payload: musics,
  };
};

export const saveRelated = (albuns) => {
  return {
    type: SAVE_RELATED,
    payload: albuns,
  };
};
