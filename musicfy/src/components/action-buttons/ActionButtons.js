import React from "react";
import './ActionButtons.scss'
function ActionButtons() {
  return (
    <div className="actions__buttons">
      <button className="pause">pause</button>
      <button className="black--border-white following">follow</button>
      <button className="black--border-white more-actions">...</button>
    </div>
  );
}

export default ActionButtons;