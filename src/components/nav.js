import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <div >
      <nav className="nav-fixed black ">
        <Link to="/movies">
          <div className="brand-logo white-text">Watch List</div>
        </Link>
        <Link to="/add">
          <div id="myMovies" className="btn-floating btn-large right white">
            add
          </div>
        </Link>
        {/* <Link>
          <div className="right" >Previously Watched</div>
        </Link> */}
      </nav>
    </div>
  );
}

export default Nav;
