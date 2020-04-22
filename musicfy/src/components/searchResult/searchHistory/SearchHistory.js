import React from 'react';
import PropTypes from 'prop-types';

export default function SearchHistory({ pickArtist, searchHistory }) {
    return (
        <ul className="searchResult">
            {searchHistory.map((artist) => {
                const backGroundImage = {
                    backgroundImage: `url(${artist.tinyImage})`,
                    backgroundSize: "60px 60px",
                    backgroundRepeat: "no-repeat",
                    height: "40px",
                    width: "40px",
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
    )
}

SearchHistory.propTypes = {
    pickArtist: PropTypes.func.isRequired,
    searchHistory: PropTypes.array.isRequired
}