import React from "react";
import "../style/_card.scss";

function Card() {
  // const cardDetails = [
  //     {
  //         name : "Argentine",
  //         image: "../assets/Argentine.jpg",
  //         description: "L'Argentine est un beau pays",
  //     },
  // ]
  return (
    <div className="card">
      <h2 className="name">Argentine</h2>
      <img className="img" src="../src/assets/Argentine.jpg" alt="" />
      <div className="card_description">
        <p>
          Du tropique du Capricorne aux 50es hurlants, des eaux profondes et
          noires de l’Atlantique aux lacs bleus de Patagonie, la nature
          argentine recèle une force singulière qui lui confère une dimension
          théâtrale. Beauté minérale des Andes, vertigineux fracas des chutes
          d’Iguazú, silence assourdissant des canaux de Patagonie et des
          centaines de kilomètres carrés de pampa vibrant sous le galop des
          gauchos... La nature s’exprime ici dans tout ce qu'elle a de plus
          sauvage.
        </p>
      </div>
    </div>
  );
}

export default Card;
