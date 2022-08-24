import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (  
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <p className="navbar-brand" href="#">
            Frameworks Padawan
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/albums">
                  Albums
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts">
                  Posts
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/todos">
                  Todos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* THIS ONE IS A VALID COMMENT */}
    </div>
  );
};

export default Navbar;
