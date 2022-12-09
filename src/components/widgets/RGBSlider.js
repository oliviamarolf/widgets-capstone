//TODO: Refactor with inline functions

import { useState } from "react";

export default function RGBSlider() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  let styles = {
    marginLeft: "40%",
    height: 100,
    width: 200,
    background: "rgb(" + red + "," + green + "," + blue + ")",
  };

  function updateRed(e) {
    setRed(e.target.value);
  }

  function updateGreen(e) {
    setGreen(e.target.value);
  }

  function updateBlue(e) {
    setBlue(e.target.value);
  }

  return (
    <div>
      <div style={styles}></div>
      <input
        id="red"
        min="0"
        max="255"
        type="range"
        value={red}
        onChange={updateRed}
      />
      <input
        id="green"
        min="0"
        max="255"
        type="range"
        value={green}
        onChange={updateGreen}
      />
      <input
        id="blue"
        min="0"
        max="255"
        type="range"
        value={blue}
        onChange={updateBlue}
      />
      <div>
        <label>
          rgb({red},{green},{blue})
        </label>
      </div>
    </div>
  );
}
