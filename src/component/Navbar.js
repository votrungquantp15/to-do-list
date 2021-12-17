import React, { useContext } from "react";
import { ThemeContexts } from "../context/ThemeContext";

const Navbar = () => {
  const theme = useContext(ThemeContexts);
  console.log(theme);
  return (
    <div className="navbar">
      <h1>My hooks App</h1>
      <ul>
        <li>Home </li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Navbar;
