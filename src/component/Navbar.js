import React from "react";

function Navbar(){
    return (
        <div className="navigation-bar">
        <h1 className="logo">BRL</h1>
        <ul className="navigation-list">
          <li>
            <a href="https://github.com/">ABOUT</a>
          </li>
          <li>
            <a href="https://github.com/">COURSES</a>
          </li>
          <li>
            <a href="https://github.com/">TEACHER</a>
          </li>
          <li>
            <a href="https://github.com/">FAQ'S</a>
          </li>
          <li>
            <a href="https://github.com/">CONTACTS</a>
          </li>
        </ul>
      </div>
    );
}

export default Navbar;