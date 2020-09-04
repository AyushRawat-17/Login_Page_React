import React from "react";

const navigationContent = ["ABOUT", "COURSES", "TEACHER", "FAQ'S", "CONTACTS"];

function setNavigationContent(values) {
  return (
    <li>
      <a href="https://github.com/">{values}</a>
    </li>
  );
}

function setButtonContent(buttonValues) {
  return <a href="https://github.com/">{buttonValues}</a>;
}

function Navbar() {
  return (
    <div>
      <div className="navigation-bar">
        <div className="navbar-button">
          <button>
            <i class="fas fa-bars"></i>
          </button>
          <div class="dropdown-content">
            {navigationContent.map(setButtonContent)}
          </div>
        </div>
        <h1 className="logo">BRL</h1>
        <ul className="navigation-list">
          {navigationContent.map(setNavigationContent)}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
