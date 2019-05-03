import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">TIME APP</Link>
      

      <div className="navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
        </ul>

        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-success my-2 my-sm-0" type="submit">Search <i className="fab fa-search"></i></button>
        </form>
      </div>
    </nav>
  )
}
