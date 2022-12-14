import { useState, useEffect } from "react";

export default function Joke() {
  const [joke, setJoke] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
        console.log(data);
      })
      .catch((err) => console.error("get joke error", err));
  }, []);

  return (
    <div className="joke-card">
      <div className="joke-container">
        <h1>{joke.setup}</h1>
        <button onClick={() => setShowAnswer((p) => !p)}>
          {showAnswer ? "hide response" : "show response"}
        </button>
        {showAnswer ? <h1>{joke.delivery}</h1> : null}
      </div>
    </div>
  );
}
