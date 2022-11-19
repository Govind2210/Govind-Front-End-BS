import React from "react";
import { Link } from "react-router-dom";


export const NavBar = () => {
  return (
    <div id="spaceXNavBar">
      <nav>
        <div class="topnav">
          <Link class="active" to="/">Home</Link>
          <Link to="/cores">Cores</Link>
          <Link to="/ships">Ships</Link>
          <input type="text" placeholder="Search.."/>
        </div>
      </nav>
    </div>
  );
};
