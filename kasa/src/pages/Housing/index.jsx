// import Accordion from "../../components/Accordion";
import Profil from "../../components/Profil";
import Slider from "../../components/Slider";
// import Tags from "../../components/Tags";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import "./index.css";

function Housting() {
  const { id } = useParams();
  const housting = data.find((housting) => housting.id === id);

  return (
    <div className="housting">
      <Slider pictures={housting.cover} />
    <div className="houstingInfo">
      <div className="houstingTitle">
        <h1>{housting.title}</h1>
        <p>{housting.location}</p>
        {/* <Tags/> */}
      </div>

      <div>
        <Profil name={housting.host.name} picture={housting.host.picture}/>
        {/* <Stars/> */}
      </div>
    </div>
    {/* <Accordion /> */}
    </div>
  );
}

export default Housting;