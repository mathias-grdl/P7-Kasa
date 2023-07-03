// import Accordion from "../../components/Accordion";
import Profil from "../../components/Profil";
import Rating from "../../components/Rating";
import Slider from "../../components/Slider";
import Tags from "../../components/Tags";
import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import data from "../../data/data.json";
import "./index.css";

function Housing() {

  // // Stocker les données de l'API. La valeur initiale de useState est un tableau vide
  // const [data, setData] = useState([]);

  // // Fonction asynchrone pour récupérer les données
  // const getData = async () => {
  //   // Effectue une requête pour récupérer le fichier JSON
  //   const response = await fetch(
  //     "data.json"
  //   ).then((response) => response.json()); //Extrait les données JSON de la réponse
    
  //   setData(response); // Met à jour l'état avec les données récupérées
  // };

  // // Execute getData() au chargement de la page.
  // useEffect(() => {
  //   getData();
  // }, []);

  const { id } = useParams();
  const housing = data.find((housing) => housing.id === id);

  return (
    <div className="housing">
      <Slider slides={housing.pictures} />
      <div className="houstingInfo">
        <div className="houstingTitle">
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
          <Tags tags={housing.tags} />
        </div>

        <div>
          <Profil name={housing.host.name} picture={housing.host.picture} />
          <Rating rating={housing.rating}/>
        </div>
      </div>
      {/* <Accordion /> */}
    </div>
  );
}

export default Housing;