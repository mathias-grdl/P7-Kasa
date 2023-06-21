import { useState, useEffect } from "react";
import "./index.css";
import Card from "../../components/Card";

function Cards() {
  // La valeur initiale est un tableau vide
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        //Mise à jour de la valeur
        setData(myJson);
      });
  };
  // Execute getData(); , et n'a aucune variable 
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="cards">
      {data && data.length > 0 && data.map((dataCard, i) => 
        <Card card={dataCard} key={i} />
      )}
    </div>
  );
}

export default Cards;
