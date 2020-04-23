import React, { useState } from "react";
import { connect } from "react-redux";
import "./SearchResult.scss";
import {
  chooseArtist,
  saveRelated,
  saveFoundOnSearch,
  saveMusicsOnSearch,
} from "../../actions/artistAction";
import history from "../../history";
import UserTopBar from "../userTopBar/UserTopBar";
import { useSearchResult } from "./useSearchResult";
import RelatedArtists from "../related-artists/RelatedArtists";
import FoundItem from "./foundItem/FoundItem";
import SearchHistory from "./searchHistory/SearchHistory";

function SearchResult(props) {
  useSearchResult(props);
  const {
    chooseArtist,
    foundItem,
    musicsOnSearch,
    relatedAlbums,
    searchHistory,
  } = props;

  const pickArtist = (artist) => {
    chooseArtist(artist);
    history.push("/nowPlaying");
  };

  function renderItemOrHistory() {
    if (foundItem === undefined) {
      return (
        <SearchHistory pickArtist={pickArtist} searchHistory={searchHistory} />
      );
    }
    return (
      <FoundItem
        foundItem={foundItem}
        musicsOnSearch={musicsOnSearch}
        pickArtist={pickArtist}
      />
    );
  }

  function renderTitles() {
    if (foundItem) {
      return (
        <div className="header-section">
          <h1>Best result</h1>
          <h2>Musics</h2>
        </div>
      );
    }
    if (searchHistory.length) {
      return <h1>Recent searchs</h1>;
    }
    return (
      <React.Fragment>
        <h1>Favorite genres is under construction but search is available!</h1>
        <img className="under-construction" src="https://abrilsuperinteressante.files.wordpress.com/2018/04/o-heavy-metal-nc3a3o-existiria-se-nc3a3o-fosse-a-mc3basica-c3a1rabe.png?w=1024" />
      </React.Fragment>
    );
  }

  function renderRelated() {
    if (relatedAlbums && relatedAlbums.length) {
      return (
        <RelatedArtists relatedAlbums={relatedAlbums} pickArtist={pickArtist} />
      );
    }
    return null;
  }

  return (
    <div className="container-search-result">
      <UserTopBar id={1245454874414} />
      {renderTitles()}
      {renderItemOrHistory()}
      {renderRelated()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    relatedAlbums: state.artists.relatedAlbums,
    searchHistory: state.artists.searchHistory,
    searchText: state.artists.newSearchValue,
    foundItem: state.artists.artistFoundOnSearch,
    musicsOnSearch: state.artists.musicsOnSearch,
  };
};

export default connect(mapStateToProps, {
  chooseArtist,
  saveRelated,
  saveFoundOnSearch,
  saveMusicsOnSearch,
})(SearchResult);
