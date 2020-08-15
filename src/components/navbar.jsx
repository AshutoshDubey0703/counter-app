import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        Navbar{" "}
        <span className="badge bage-pill bage-secondary">
          {props.totalCounter}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
