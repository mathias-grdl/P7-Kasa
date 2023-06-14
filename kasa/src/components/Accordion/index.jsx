import "./index.css";
import { useState } from "react";
import React from "react";


function Carrousel({data}) {
  // index is a state variable and setIndex is the setter function.
  const [index, setIndex] = useState(false);

  const toggle = (i) => {
    // Si la valeur actuelle de index est égale à i, cela signifie que l'élément i est déjà ouvert
    if (index === i) {
      return setIndex(false);
    }
    // si la valeur actuelle de index est différente de i, cela signifie que l'élément i n'est pas ouvert, donc nous mettons à jour l'état index à i pour ouvrir
    setIndex(i);
  };

  return (
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
              <span>{index === i ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-sharp fa-solid fa-chevron-down"></i>}</span>
            </div>
            {/* Si index est égal à i, ajoutez la classe "show"  */}
            <div className={index === i ? "content show" : "content"}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
  );
}

export default Carrousel;


