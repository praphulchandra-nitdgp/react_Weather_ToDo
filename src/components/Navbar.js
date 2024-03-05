import React, { useState } from "react"
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">

        <div className="logo">
          <h2>
            <span>What</span>ToDo

          </h2>
        </div>

        <div className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
            <NavLink to="/">Weather</NavLink>
            </li>
            <li>
            <NavLink to="/TodoWrapper">To-do</NavLink>
            </li>
          </ul>
        </div>
        <div className="social-media">
           {/* toggle menu */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <FontAwesomeIcon icon={faBars} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;