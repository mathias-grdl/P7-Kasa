import "./index.css";

function Profil({name, picture}) {
  return (
    <div className="Profil">
      <p>{name}</p>
      <div className="ProfilImg">
        <img
          src={picture}
          alt="Nathalie Jean"
        />
      </div>
    </div>
  );
}

export default Profil;
