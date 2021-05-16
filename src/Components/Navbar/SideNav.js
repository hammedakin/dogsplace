import React from "react";
import { Link} from 'react-router-dom';

import NavLinks from "./NavLinks";

const SideNav = () => {
  const closeNav = (e) => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
      <>
      <nav class="">
 <div id="mySidenav" class="sidenav">
      <a
        href="javascript:void(0)"
        class="closebtn white-text"
        onClick={(e) => closeNav(e)}
      >
        {" "}
        &times;{" "}
      </a>

      <NavLinks />

<hr style={{ backgroundColor: "whitesmoke"}} class="m-3" />

<div class="col-md-3 mx-auto text-center">
                <h5 class=" mt-3 mb-4">Ready to get started?</h5>
            <Link to="/store"
        onClick={(e) => closeNav(e)}
        >
            <button class="btn btn1"> BUY A DOG </button>
            </Link>
               
              </div>
    </div>
      </nav>

      
   

      </>
  );
};

export default SideNav;
