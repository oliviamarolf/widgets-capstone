import { useState, useRef } from "react";

export default function Weather() {
  const [data, setData] = useState({});
  const zipRef = useRef(null);
  const dateRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(
      `http://api.weatherapi.com/v1/astronomy.json?key=add29ccb8e5a4fac86214649221212&q=${zipRef.current.value}&dt=${dateRef.current.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.astronomy.astro);
        console.log(data);
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
            <input
              type="text"
              name="zip"
              ref={zipRef}
              placeholder="enter zipcode"
            />
            <input type="date" name="date" ref={dateRef} />
            <button type="submit">Submit</button>
          </form>
        </div>
        {/* {!data ? ( */}
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
        {/* ) : null} */}
      </div>
    </div>
  );
}
