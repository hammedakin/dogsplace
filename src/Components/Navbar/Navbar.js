import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import NavLinks from "./NavLinks";
import SideNav from './SideNav'

const Navbar = () => {
  
  // Open Navbar 
  const openNav = (e) => {
    document.getElementById("mySidenav").style.width = "100vw";
  };

  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light fixed-top"
        id="navbar main"
      >
        <div class="container" id="logo">
          <Link to="/home" className="navbar-brand">
            <h5> BRIGHT'S </h5>
          </Link>

          <a
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              class="navbar-toggler-icon toggler"
              onClick={(e) => openNav(e)}
            >
              <box-icon
                class="box-icon"
                size="2rem"
                color=" #FC4746"
                name="menu"
                type="logo"
              ></box-icon>
            </span>
          </a>

          <div class="collapse navbar-collapse" id="basicExampleNav">
            <NavLinks />
          </div>
        </div>
      </nav>

      <SideNav/>

  
    </>
  );
};

export default Navbar;
