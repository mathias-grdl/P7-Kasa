import { useState, useEffect } from "react";
import "./index.css";
import Tag from "../../components/Tag";

function Tags() {
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
    <div className="tags">
      {data && data.length > 0 && data.map((dataTags, i) => 
        <Tag tags={dataTags} key={i} />
      )}
    </div>
  );
}

export default Tags;
