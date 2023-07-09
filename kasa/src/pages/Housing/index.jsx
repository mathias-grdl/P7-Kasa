import Accordion from "../../components/Accordion";
import Profil from "../../components/Profil";
import Rating from "../../components/Rating";
import Slider from "../../components/Slider";
import Tags from "../../components/Tags";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

function Housing() {
  // Stocker les données de l'API. La valeur initiale de useState est un tableau vide
  const [data, setData] = useState(null);

  // Fonction asynchrone pour récupérer les données
  const getData = async () => {
    try {
      // Effectue une requête pour récupérer le fichier JSON
      const response = await fetch("http://localhost:3000/data.json");

      if (!response.ok) {
        //.ok est une propriété booléenne de l'objet Response
        throw new Error("Erreur lors de la récupération des données.");
      }

      const jsonData = await response.json(); //Extrait les données JSON de la réponse

      setData(jsonData); // Met à jour l'état avec les données récupérées
    } catch (error) {
      console.error(error);
    }
  };

  // Execute getData() au chargement de la page.
  useEffect(() => {
    getData();
  }, []);

  // console.log(data);
  const { id } = useParams();
  const housing = data && data.find((housing) => housing.id === id);

  console.log(housing);

  if (!housing) {
    return <p>Chargement en cours...</p>;
  }

  const dataDescription = [
    {
      title: "Description",
      content: housing.description,
    },
  ];

  const dataEquipments = [
    {
      title: "Équipements",
      content: housing.equipments,
    },
  ];

  return (
    <div className="housing">
      <Slider slides={housing.pictures} />
      <div className="housingInfo">
        <div className="housingTitle">
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
          <Tags tags={housing.tags} />
        </div>

        <div className="housingProfil">
          <Profil name={housing.host.name} picture={housing.host.picture} />
          <Rating rating={housing.rating} />
        </div>
      </div>
      <div className="housingAccordionContainer">
        <div className="housingAccordion">
          <Accordion data={dataDescription} />
        </div>
        <div className="housingAccordion">
          <Accordion data={dataEquipments} />
        </div>
      </div>
    </div>
  );
}

export default Housing;
