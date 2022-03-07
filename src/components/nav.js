import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <div>
      <nav className="nav-wrapper black">
        <Link to="/">
          <div className="brand-logo white-text">Watch List</div>
        </Link>
        <Link to="/add">
          <div className="btn-floating btn-large right green"><i className="material-icons">add</i></div>
        </Link>
        {/* <Link>
                <p>Previously Watched</p>
            </Link>
            <Link>
                <p>Add Movie</p>
            </Link> */}
      </nav>
    </div>
  );
}

export default Nav;
