import Carrousel from "../../components/Carousel";

const data = [
  {
    title: "Description",
    content: "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied).",
  },
  {
    title: "Équipements",
    content: "Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres", 
  }
];

function Housting() {
    return (
      <div>
        <Carrousel data={data}/>
      </div>
    );
  }
  
  export default Housting;
  