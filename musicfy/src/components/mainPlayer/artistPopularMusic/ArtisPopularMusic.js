import React from 'react';
import PropTypes from 'prop-types';
import PlayButton from '../../play-button/PlayButton';
import './ArtistPopularMusic.scss';

export default function ArtistPopularMusic({ musics }) {

    return (<React.Fragment><h1>Populars</h1>
        {musics ? <ul className="artist-popular-music">
            {musics.map((music) => {
                const backGroundImage = {
                    backgroundImage: `url(${music.cover})`,
                    backgroundSize: "60px 60px",
                    backgroundRepeat: "no-repeat",
                    height: "40px",
                    width: "40px",
                };
                return (
                    <li>
                        <PlayButton mouseIsOver={true} />
                        <div style={backGroundImage}></div>
                        <div class="music-name"><span>{music.name}</span><span>{music.duration}</span></div>
                    </li>
                );
            })}
        </ul> : null}
    </React.Fragment>);
}

ArtistPopularMusic.propTypes = {
    musics: PropTypes.array.isRequired
}