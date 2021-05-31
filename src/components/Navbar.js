import React from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/github-icon.svg"

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          Github
        </Link>
      </div>
    </nav>
  )
}
