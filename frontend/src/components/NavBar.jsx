import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li className="NavBar_li">
            <NavLink to="/">
              <h2 className="NavBar_title">Accueil</h2>
            </NavLink>
            {/*  //faire une ancre vers un endroit précis de la page pour la todoList */}
            <NavLink to="/todolist">
              <h2 className="NavBar_title">To-Do List</h2>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
