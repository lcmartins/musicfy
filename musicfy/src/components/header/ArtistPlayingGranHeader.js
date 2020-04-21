import React from "react";
import { connect } from "react-redux";
import { saveSearchHistory } from "../../actions/artistAction";
import "./ArtistPlayingGranHeader.scss";
import PlayingArtistMenu from "../artist-menu/PlayingArtistMenu";
import ActionButtons from "../action-buttons/ActionButtons";
import UserTopBar from "../userTopBar/UserTopBar";
import { useArtistPlayingGranHeader } from './useArtistPlayingGranHeader';

function ArtistPlayingGranHeader(props) {
  useArtistPlayingGranHeader(props);
  console.log('PROPS HIS', props)
  const backGroundImage = {
    backgroundImage: `url(${props.artist.granHeaderImage})`,
  };

  return (
    <header className="current-playing-header" style={backGroundImage}>
      <section className="current-playing-header__container">
        <div className="actions-container">
          <UserTopBar id={1245454874414} />
          <article className="artist">
            <span>artist</span>
            <p>{props.artist.name || null}</p>
          </article>
          <div className="buttons-container">
            <ActionButtons />
            <div className="monthly-listeners">
              <span>
                monthly listeners
              </span>
              <span>312,334</span>
            </div>
          </div>
          <PlayingArtistMenu />
        </div>
      </section>
    </header>
  );
}

const mapStateToProps = (state) => {
  return { artist: state.artists.artist, searchText: state.artists.newSearchValue, searchHistory: state.artists.searchHistory};
};

export default connect(mapStateToProps, { saveSearchHistory })(
  ArtistPlayingGranHeader
);
