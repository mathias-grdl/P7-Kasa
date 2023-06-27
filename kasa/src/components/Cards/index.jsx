import { useState, useEffect } from "react";
import "./index.css";
import Card from "../../components/Card";

// https://contactmentor.com/fetch-in-reactjs-example/?expand_article=1

function Cards() {
  // Stocker les données de l'API. La valeur initiale de useState est un tableau vide
  const [data, setData] = useState([]);

  // Fonction asynchrone pour récupérer les données
  const getData = async () => {
    // Effectue une requête pour récupérer le fichier JSON
    const response = await fetch(
      "data.json"
    ).then((response) => response.json()); //Extrait les données JSON de la réponse
    
    setData(response); // Met à jour l'état avec les données récupérées
  };

  // Execute getData() au chargement de la page.
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
