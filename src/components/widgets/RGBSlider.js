//TODO: Refactor with inline functions

import { useState } from "react";

export default function RGBSlider() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  let styles = {
    height: 80,
    width: 200,
    background: "rgb(" + red + "," + green + "," + blue + ")",
  };

  let labelStyle = {
    color: "rgb(" + red + "," + green + "," + blue + ")",
    fontSize: 20,
  };

  return (
    <div className="rgb-card">
      <div className="rgb-container">
        <div style={styles} className="rgb-box"></div>

        <div className="sliders">
          <input
            min="0"
            max="255"
            type="range"
            value={red}
            onChange={(e) => setRed(e.target.value)}
          />
          <input
            min="0"
            max="255"
            type="range"
            value={green}
            onChange={(e) => setGreen(e.target.value)}
          />
          <input
            min="0"
            max="255"
            type="range"
            value={blue}
            onChange={(e) => setBlue(e.target.value)}
          />
        </div>
        <div>
          <label style={labelStyle}>
            rgb ({red}, {green}, {blue})
          </label>
        </div>
      </div>
    </div>
  );
}
