import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './PlayButton.scss';

export default function PlayButton({ mouseIsOver, clickHandler }) {
    return (
        <div className={cx("play-button", { "hidden": mouseIsOver === false })} onClick={() => clickHandler()}>
            <div className="arrow-right"></div>
        </div>
    )
}

PlayButton.propTypes = {
    mouseIsOver: PropTypes.bool,
    clickHandler: PropTypes.func.isRequired
}

PlayButton.defaultProps = {
    mouseIsOver: true
}
