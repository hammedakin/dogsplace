import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const closeNav = (e) => {
  document.getElementById("mySidenav").style.width = "0";
};


const NavLinks = () => {
    return ( 

        <>

<ul class="navbar-nav ml-auto mr-auto text-center animated fadeInUp">


            <li class="nav-item" >
              <NavLink
        onClick={(e) => closeNav(e)}
              tag={Link} activeClassName="active1 " to="/home"  >
                HOME
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink
        onClick={(e) => closeNav(e)}
              tag={Link} activeClassName="active1" to="/about" >
                ABOUT
              </NavLink>
            </li>

            <li class="nav-item ">
              <NavLink
        onClick={(e) => closeNav(e)}
              tag={Link} activeClassName="active1" to="/store">
                DOGS
              </NavLink>
            </li>

          </ul>
          <ul class="navbar-nav text-center">
            <Link to="/contact"
        onClick={(e) => closeNav(e)}
        >
            <li>
              <button type="btn" class="btn shadow"
              >
                contact us
          </button>
            </li>
            </Link> 
          </ul>
        </>
     );
}
 
export default NavLinks;