import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  let [toggleMenu, setToggleMenu] = useState(false);
  console.log("this is the toggleMenu", toggleMenu);

  const revertToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="navigation-bar-container">
      <div className="logo-container">
        <Link to={"/"}>
          <figure>
            <img
              src={require('../../vishal.jpeg')}
              alt="vishal"
            ></img>
          </figure>
        </Link>
        <span>Vishal Goswami</span>
      </div>

      <div className="hamburg-container">
        {toggleMenu ? (
          <ImCross onClick={revertToggle}  className="cancle-dropdown"/>
        ) : (
          <GiHamburgerMenu onClick={revertToggle} />
        )}
      </div>

      <nav className="navigationbar" id={toggleMenu && "showmenu"}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive && "active"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/techstack"
              className={({ isActive }) => isActive && "active"}
            >
              TechStack
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive && "active"}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive && "active"}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <button id="resume-btn">
              <a
                href="./Vishal Resume.pdf"
                download="vishal goswami"
                id="resume-button"
              >
                Resume
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}