import React from "react";
import "./PlayingArtistMenu.scss";
import cx from "classnames";
import { usePlayingArtistMenu } from './usePlayingArtistMenu';

export default function PlayingArtistMenu() {
  const { menu, selectedItem } = usePlayingArtistMenu();
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
