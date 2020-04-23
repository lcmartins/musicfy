import React, { useEffect } from "react";
import { connect } from 'react-redux';
import "./PlayingArtistMenu.scss";
import { saveMainPlayerMenu } from '../../actions/artistAction';
import cx from "classnames";
import { usePlayingArtistMenu } from './usePlayingArtistMenu';

function PlayingArtistMenu(props) {
  const { menu, selectedItem } = usePlayingArtistMenu(props);


  return (
    <nav className="menu">
      <ul className="menu-container">
        {menu.map((item) => (
          <li key={item.name + "li"} onClick={() => selectedItem(item.name)}>
            <span key={item.name + "span"}>{item.name}</span>
            <div key={item.name + "div"} className="selection-marker">
              <i
                key={item.name + "i"}
                className={cx("marker", {
                  "marker--selected": item.isSelected === true,
                })}
              ></i>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default connect(null, { saveMainPlayerMenu })(PlayingArtistMenu);
