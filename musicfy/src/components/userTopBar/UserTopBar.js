import React from "react";
import { connect } from 'react-redux';
import { doNewSearch } from '../../actions/artistAction';

import { ReactComponent as UsrSVG } from "./user-circle.svg";
import "./UserTopBar.scss";
import history from "../../history";

function UserTopBar(props) {

  function handleSearchTextChange(event) {
    const newValue = event.target.value;
    if(newValue.length < 3) {
      return;
    }
    props.doNewSearch(newValue);
  }

  function openRecentSearch() {
    history.push("/search")
  }

  return (
    <div className="bar-container">
      <input className="bar-container__search" onFocus={()=> openRecentSearch()} onChange={(e) => handleSearchTextChange(e)} />
      <div className="profile-header">
        <button className="black--border-white upgrade">upgrade</button>
        <div className="profile">
          <UsrSVG />
          <span>{props.id}</span>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { doNewSearch })(UserTopBar);