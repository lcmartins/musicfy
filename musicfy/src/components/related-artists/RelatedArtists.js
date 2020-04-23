import React, { useState } from "react";
import PropTypes from "prop-types";
import "./RelatedArtists.scss";
import cx from "classnames";
import PlayButton from "../play-button/PlayButton";

export default function RelatedArtists({ relatedAlbums, pickArtist }) {
  const [mouseIsOver, setMouseIsOver] = useState({ isOver: false, key: "" });
  const setEventOnMouseMove = (event, key) => {
    if (event.type === "mouseenter") {
      setMouseIsOver({ isOver: event.type === "mouseenter", key });
      return;
    }
    setMouseIsOver({ isOver: false, key });
  };

  return (
    <React.Fragment>
      <div>
        <h3>related</h3>
        <ul className="related-artist">
          {relatedAlbums.map((related) => {
            const backgroundMusicImage = {
              backgroundRepeat: "no-repeat",
              backgroundSize: "90px 90px",
              height: "90px",
              width: "90px",
              borderRadius: "0px",
              backgroundImage: `url(${related.tinyImage})`,
            };
            return (
              <li
                className="music-item"
                onMouseEnter={(event) =>
                  setEventOnMouseMove(event, related.name)
                }
                onMouseLeave={(event) =>
                  setEventOnMouseMove(event, related.name)
                }
              >
                <div style={backgroundMusicImage}></div>
                <div className="description-container">
                  <span
                    className={cx({
                      "span-over":
                        mouseIsOver.key === related.name &&
                        mouseIsOver.isOver === true,
                    })}
                  >
                    {related.name}
                  </span>
                  <div className="playbutton-container">
                    <span
                      className={cx({
                        "span-over":
                          mouseIsOver.key === related.name &&
                          mouseIsOver.isOver === true,
                      })}
                    >
                      {related.from}
                    </span>
                    <PlayButton
                      mouseIsOver={
                        mouseIsOver.key === related.name &&
                        mouseIsOver.isOver === true
                      }
                      clickHandler={() => {
                        pickArtist(related);
                      }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}

RelatedArtists.propTypes = {
  relatedAlbums: PropTypes.array.isRequired,
  pickArtist: PropTypes.func.isRequired,
};
