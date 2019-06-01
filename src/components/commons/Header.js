import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F1582A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      <React.Fragment> | </React.Fragment>
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      <React.Fragment> | </React.Fragment>
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
    </nav>
  );
};

export default Header;
