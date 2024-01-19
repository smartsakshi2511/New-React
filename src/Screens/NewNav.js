// import React from "react";
//  import { Link } from "react-router-dom";

// const NewNav = () => {
//   return (
//     <div>
//       <nav className="main-nav">
//         <div className="logo">
//            <h2>
//             <span>S</span>urucu
//             <span>C</span>v
//            </h2>
//         </div>
//         <div className="menu-link">
//           <ul>
//             <li>
//               <Link to="/">
//               Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/findjob">
//               Find Job 
//               </Link>
//             </li>
//             <li >
//               <Link to="/finddriver">
//               Find Driver
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact">
//                Contact Us
//               </Link>
//             </li>
//           </ul>

//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NewNav;
// Navbar.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
  // Add your custom CSS for styling

  const Navbar = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    const [isButtonHovered, setButtonHovered] = useState(false);
  
    const toggleNav = () => {
      setNavOpen(!isNavOpen);
    };
  
    const handleButtonHover = () => {
      setButtonHovered(!isButtonHovered);
    }

  return (
    <nav className="navbar navbar-expand-lg   ">
      <div className="container">
        <a className="navbar-brand" href="/">
          Your Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                Find JOb
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
               Find Driver
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <button
                className={`btn btn-outline-primary ${isButtonHovered ? 'animated-button' : ''}`}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHover}
              >
                {isButtonHovered ? 'Log out' : 'Login'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


