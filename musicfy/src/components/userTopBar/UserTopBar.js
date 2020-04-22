import React from "react";
import { connect } from "react-redux";
import { doNewSearch } from "../../actions/artistAction";
import PropTypes from "prop-types";
import cx from "classnames";
import { ReactComponent as UsrSVG } from "./user-circle.svg";
import "./UserTopBar.scss";
import history from "../../history";

function UserTopBar(props) {
  const { showSearchInput } = props;

  function handleSearchTextChange(event) {
    const newValue = event.target.value;
    if (newValue.length < 3) {
      return;
    }
    props.doNewSearch(newValue);
  }

  function openRecentSearch() {
    history.push("/search");
  }

  return (
    <div className="bar-container">
      <input maxLength={20}
        className={cx("bar-container__search", {
          "bar-container__search--hidden": showSearchInput === false,
        })}
        onFocus={() => openRecentSearch()}
        onChange={(e) => handleSearchTextChange(e)}
      />
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

UserTopBar.propTypes = {
  showSearchInput: PropTypes.bool,
};

UserTopBar.defaultProps = {
  showSearchInput: true,
};

export default connect(null, { doNewSearch })(UserTopBar);
