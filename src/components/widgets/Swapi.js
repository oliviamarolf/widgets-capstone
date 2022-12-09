import { useState, useEffect } from "react";

export default function Swapi() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPeople(data.results);
      })
      .catch((err) => {
        console.error("Get people error: ", err);
      });
  }, []);

  return (
    <div>
      <h1>Swapi</h1>
      <h2>{people}</h2>
    </div>
  );
}
