import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dash">Dashboard</NavLink>
            <NavLink to="/guedes">Guides</NavLink>
        </nav>
      </div>
    )
  }
  
  export default NavBar;

