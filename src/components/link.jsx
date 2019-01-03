import React from "react";
import "./common.less";

import { NavLink } from "react-router-dom";
class LinkTo extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="activeRoute">
            home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/layout" activeClassName="activeRoute">
            layout
          </NavLink>
        </li>
      </ul>
    );
  }
}
export default LinkTo;
