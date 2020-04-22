import React from "react";
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

function SearchResult(props) {
    const { chooseArtist, foundItem, musicsOnSearch, relatedAlbums, searchHistory } = props;
    useSearchResult(props);
    console.log('RELATED: ', relatedAlbums);
    const pickArtist = (artist) => {
        chooseArtist(artist);
        history.push("/nowPlaying");
    };

    function renderSearchHistory() {
        if (foundItem === undefined) {
            return (
                <ul className="searchResult">
                    {searchHistory.map((artist) => {
                        const backGroundImage = {
                            backgroundImage: `url(${artist.tinyImage})`,
                            backgroundSize: "60px 60px",
                            backgroundRepeat: "no-repeat",
                            height: "40px",
                            width: "40px",
                            borderRadius: "20px",
                        };
                        return (
                            <li onClick={() => pickArtist(artist)}>
                                <div style={backGroundImage}></div>
                                <article>
                                    <span>{artist.name}</span>
                                    <span>{artist.type}</span>
                                </article>
                            </li>
                        );
                    })}
                </ul>
            );
        }

        const backGroundImage = {
            backgroundImage: `url(${foundItem.tinyImage})`,
            backgroundSize: "107px 106px",
            backgroundRepeat: "no-repeat",
            height: "87px",
            width: "92px",
            borderRadius: "43px",
        };

        return (
            <div className="found-item-container">
                <div className="found-item" onClick={() => pickArtist(foundItem)}>
                    <div style={backGroundImage} />
                    <p className="found-item__name">{foundItem.name}</p>
                    <div className="found-item__type">{foundItem.type}</div>
                </div>
                {musicsOnSearch ? (
                    <ul className="music-search-list">
                        {musicsOnSearch.map((album) => {
                            const backgroundMusicImage = {
                                ...backGroundImage,
                                backgroundSize: "55px 50px",
                                height: "50px",
                                width: "55px",
                                borderRadius: "0px",
                                backgroundImage: `url(${album.cover})`,
                            };
                            return (
                                <li className="music-item">
                                    <div style={backgroundMusicImage}></div>
                                    <div className="description-container">
                                        <span>{album.music}</span>
                                        <span>{album.artist}</span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                ) : null}
            </div>
        );
    }

    function renderTitle() {
        if (foundItem) {
            return <h1>Best result</h1>;
        }

        if (searchHistory.length) {
            return <h1>Recent searchs</h1>;
        }

        return <h1>Seus generos favoritos</h1>;
    }

    function renderRelated() {
        if (relatedAlbums && relatedAlbums.length) {
            return <React.Fragment>
                <div>
                    <ul className="related-artist">

                        {relatedAlbums.map(related => {
                            const backgroundMusicImage = {
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: "90px 90px",
                                height: "90px",
                                width: "90px",
                                borderRadius: "0px",
                                backgroundImage: `url(${related.tinyImage})`,
                            };
                            return (
                                <li className="music-item">
                                    <div style={backgroundMusicImage}></div>
                                    <div className="description-container">
                                        <span>{related.name}</span>
                                        <span>{related.from}</span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </React.Fragment>
        }
        return null;
    }
    return (
        <div className="container-search-result">
            <UserTopBar id={1245454874414} />
            {renderTitle()}
            {renderSearchHistory()}
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
