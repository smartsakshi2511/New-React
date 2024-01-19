import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
export default function NavBar()  {

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand fs-1 fst-italic fst-bold" to="/">
            Surucu 
            </Link>
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
              <ul className="navbar-nav  ">
                <li className="nav-item">
                  <Link className="nav-link active"   to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/findjob">
                     Find Job 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/finddriver">
                    Find Driver
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/createcv">
                     Create CV 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/contact">
                   Contact
                  </Link>
                </li>
                
                <li className="nav-item .text-right" >
                 <Link className="nav-link text-right active " type="button" to="/login">
                    Login
                  </Link> 
                 
                </li>
                <li className="nav-item">
                  <Link className="nav-link active"  to="/signup">
                   Sign Up 
                  </Link>
                </li>

                 
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
