import { useState } from "react";

export default function Weather() {
  const [data, setData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    fetch(
      `http://api.weatherapi.com/v1/astronomy.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${e.target.zip.value}&dt=${e.target.date.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.astronomy.astro);
      })
      .catch((err) => {
        console.error("Get data error: ", err);
      });
  }

  return (
    <div className="weather-container">
      <div className="weather-card">
        <div className="weather-form">
          <form onSubmit={handleSubmit}>
            <input type="text" name="zip" placeholder="enter zipcode" />
            <input type="date" name="date" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="weather-data">
          <div>
            <h1>sunrise:</h1>
            <p>{data.sunrise}</p>
          </div>

          <div>
            <h1>sunset:</h1>
            <p>{data.sunset}</p>
          </div>

          <div>
            <h1>moonrise:</h1>
            <p>{data.moonrise}</p>
          </div>

          <div>
            <h1>moonset:</h1>
            <p>{data.moonset}</p>
          </div>

          <div>
            <h1>moon-phase:</h1>
            <p>{data.moon_phase}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
