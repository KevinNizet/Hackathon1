import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <NavLink to="/">
            <h2>Accueil</h2>
          </NavLink>
          <a href="#TodoList"> To-Do Liste</a>
          {/*  //faire une ancre vers un endroit précis de la page pour la todoList */}
          <NavLink to="/recappage">
            <h2>Récapitulatif</h2>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
