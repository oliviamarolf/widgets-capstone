import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

//<FontAwesomeIcon icon={faCircleChevronRight} />

export default function WidgetsDashboard() {
  return (
    <div className="widget-dashboard">
      <div className="widget-container">
        <div className="widget-card">
          <Link to="/widget/counter">
            <FontAwesomeIcon icon={faCircleChevronRight} className="arrow" />
          </Link>
          <div className="description">
            <h1>Counter</h1>
            <p>Click a counter to increment and decrement a number.</p>
          </div>
        </div>
        <div className="widget-card">
          <Link to="/widget/rgb">
            <FontAwesomeIcon icon={faCircleChevronRight} className="arrow" />
          </Link>
          <div className="description">
            <h1>RGB</h1>
            <p>
              Use sliders to adjust each red green and blue value to make a
              color.
            </p>
          </div>
        </div>
        <div className="widget-card">
          <Link to="/widget/swapi">
            <FontAwesomeIcon icon={faCircleChevronRight} className="arrow" />
          </Link>
          <div className="description">
            <h1>Starships</h1>
            <p>View information on ships from swapi.</p>
          </div>
        </div>
        <div className="widget-card">
          <Link to="/widget/weather">
            <FontAwesomeIcon icon={faCircleChevronRight} className="arrow" />
          </Link>
          <div className="description">
            <h1>Phases</h1>
            <p>View astrological information about the sun and moon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
