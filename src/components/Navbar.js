import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/github-icon.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            alt="Logo"
            width="30"
            height="40"
            className="d-inline-block align-text-top"
          />
          <p>Github</p>
        </Link>
      </div>
    </nav>
  );
}
