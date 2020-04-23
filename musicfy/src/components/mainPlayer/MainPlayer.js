import React from "react";
import { connect } from "react-redux";
import { chooseArtist, saveRelated, saveSearchHistory } from "../../actions/artistAction";
import "./MainPlayer.scss";
import PlayingArtistMenu from "../artist-menu/PlayingArtistMenu";
import ActionButtons from "../action-buttons/ActionButtons";
import UserTopBar from "../userTopBar/UserTopBar";
import { useMainPlayer } from "./useMainPlayer";
import ArtistPopularMusic from "./artistPopularMusic/ArtisPopularMusic";
import RelatedArtists from "../related-artists/RelatedArtists";
import About from "../about/About";
import history from '../../history'
const OVERVIEW = 'overview';
const FANS_ALSO_LIKE = 'fans also like';
function MainPlayer(props) {
  const { musics, related } = useMainPlayer(props);
  const backGroundImage = {
    backgroundImage: `url(${props.artist.granHeaderImage})`,
  };

  const pickArtist = (artist) => {
    props.chooseArtist(artist);
    history.push("/nowPlaying");
  };

  function renderByMenu() {
    if (!props.selectedMenu) {
      return null;
    }
    console.log('MENU2: ', props.selectedMenu.name)
    switch (props.selectedMenu.name) {
      case OVERVIEW:
        return <ArtistPopularMusic musics={musics} />
      case FANS_ALSO_LIKE:
        return <RelatedArtists relatedAlbums={related} pickArtist={pickArtist} />
      default:
        return null;
    }
  }

  return (
    <React.Fragment>
      <header className="current-playing-header" style={backGroundImage}>
        <section className="current-playing-header__container">
          <div className="actions-container">
            <UserTopBar id={1245454874414} showSearchInput={false} />
            <article className="artist">
              <span>artist</span>
              <p>{props.artist.name || null}</p>
            </article>
            <div className="buttons-container">
              <ActionButtons />
              <div className="monthly-listeners">
                <span>monthly listeners</span>
                <span>312,334</span>
              </div>
            </div>
            <PlayingArtistMenu />
          </div>
        </section>
      </header>
      <section>
        {
          renderByMenu()
        }
      </section>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    artist: state.artists.artist,
    searchText: state.artists.newSearchValue,
    searchHistory: state.artists.searchHistory,
    selectedMenu: state.artists.mainPlayerMenu,
  };
};

export default connect(mapStateToProps, { chooseArtist, saveRelated, saveSearchHistory })(MainPlayer);
