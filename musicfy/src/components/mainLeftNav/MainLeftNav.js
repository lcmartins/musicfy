import React from "react";
import "./MainLeftNav.scss";
import { ReactComponent as HomeSVG } from "./home-heart.svg";
import { ReactComponent as BrowseSVG } from "./browse-music.svg";
import { ReactComponent as RadioSVG } from "./radio.svg";

export default function MainLeftNav() {
  return (
    <nav className="menu-container">
      <ul>
        <li>
          <div className="item-content-container">
            <div>
              <HomeSVG />
            </div>
            <p>home</p>
          </div>
        </li>
        <li>
          <div className="item-content-container">
            <div>
              <BrowseSVG />
            </div>
            <p>browse</p>
          </div>
        </li>
        <li>
          <div className="item-content-container">
            <div>
              <RadioSVG />
            </div>
            <p>radio</p>
          </div>
        </li>
      </ul>
    </nav>
  );
}
