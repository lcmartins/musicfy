import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
import './About.scss';

function About({ artist }) {
    console.log('ARTIST: ', artist);
    return (
        <React.Fragment>
            <div className="artist-about">{artist.about}</div>
        </React.Fragment>
    )
}

export default About;

About.propTypes = {
    artist: PropTypes.bool.isRequired
}