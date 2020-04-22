import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlayButton from '../../play-button/PlayButton';
import './FoundItem.scss'

export default function FoundItem({ foundItem, musicsOnSearch, pickArtist }) {
    const backGroundImage = {
        backgroundImage: `url(${foundItem.tinyImage})`,
        backgroundSize: "107px 106px",
        backgroundRepeat: "no-repeat",
        height: "87px",
        width: "92px",
        borderRadius: "43px",
    };

    const [mouseIsOver, setMouseIsOver] = useState(false);

    const setEventOnMouseMove = (event) => {
        setMouseIsOver(event.type === "mouseenter");
    };

    return (
        <div className="found-item-container">
            <div
                className="found-item"
                onMouseEnter={(e) => {
                    setEventOnMouseMove(e);
                }}
                onMouseLeave={(e) => {
                    setEventOnMouseMove(e);
                }}
            >
                <div style={backGroundImage} />
                <div className="name-and-play-button-container">
                    <p className="artist-name">{foundItem.name}</p>
                    <PlayButton mouseIsOver={mouseIsOver} clickHandler={() => pickArtist(foundItem)}/>
                </div>
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
    )
}

FoundItem.propTypes = {
    foundItem: PropTypes.object.isRequired,
    musicsOnSearch: PropTypes.array.isRequired,
    pickArtist: PropTypes.func.isRequired
}