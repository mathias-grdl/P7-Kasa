// import Accordion from "../../components/Accordion";
import Profil from "../../components/Profil";
// import Tags from "../../components/Tags";
import { useParams } from "react-router-dom";
import data from "./data.json";
import "./index.css";

function Housting() {
  const { id } = useParams();
  const housting = data.find((housting) => housting.id === id);

  return (
    <div className="housting">
      {/* <Slider/> */}
    <div>
      <div className="houstingTitle">
        <h1>{housting.title}</h1>
        <p>{housting.location}</p>
        {/* <Tags/> */}
      </div>

      <div>
        <Profil/>
        {/* <Stars/> */}
      </div>
    </div>
    </div>
  );
}

export default Housting;