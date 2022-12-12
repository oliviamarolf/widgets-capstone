import { useState, useEffect } from "react";

export default function Swapi() {
  const [starships, setStarships] = useState([]);
  const [shipId, setShipId] = useState("");
  const [shipData, setShipData] = useState([]);

  const options = starships.map((ship) => {
    return (
      <option key={ship.uid} value={ship.uid}>
        {ship.name}
      </option>
    );
  });

  useEffect(() => {
    fetch("https://swapi.tech/api/starships/")
      .then((res) => res.json())
      .then((data) => {
        setStarships(data.results);
      })
      .catch((err) => {
        console.error("Get starshiips error: ", err);
      });
  }, []);

  useEffect(() => {
    if (shipId) {
      fetch(`https://swapi.tech/api/starships/${shipId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("shipData", data);
          setShipData(data.result.properties);
        })
        .catch((err) => {
          console.error("Get ship error: ", err);
        });
    }
  }, [shipId]);

  return (
    <div className="swapi-card">
      <div className="swapi-container">
        <div>
          <h1>Choose a starship</h1>
          <select onChange={(e) => setShipId(e.target.value)}>{options}</select>
        </div>
        <div className="swapi-results">
          <div>
            <h3>Model:</h3>
            <p>{shipData.model}</p>
          </div>

          <div>
            <h3>Starship Class:</h3>
            <p>{shipData.starship_class}</p>
          </div>

          <div>
            <h3>Manufacturer:</h3>
            <p>{shipData.manufacturer}</p>
          </div>

          <div>
            <h3>Cost in credits:</h3>
            <p>{shipData.cost_in_credits}</p>
          </div>

          <div>
            <h3>Max Atmosphering Speed:</h3>
            <p>{shipData.max_atmosphering_speed}</p>
          </div>

          <div>
            <h3>Hyperdrive Rating:</h3>
            <p>{shipData.hyperdrive_rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
