import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (  
    <>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/des1">
                  Desafio 1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/des2">
                Desafio 2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/des3">
                  Desafio 3
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* THIS ONE IS A VALID COMMENT */}
    </>
  );
};

export default Navbar;
