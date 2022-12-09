import { Route, Switch } from "react-router-dom";

// import AboutPage from "../../About";
// import HomePage from "../Home";
import LogoutPage from "../Logout";
import Dashboard from "../../Dashboard";

// import WidgetDashboard from "../Widgits";
// import CounterWidget from "../../../widgets/Counter";
// import ColorChangerWidget from "../../widgets/ColorChanger";
// import ClockWidget from "../../widgets/Clock";
// import WeatherWidget from "../../../widgets/Weather";
// import SearchSwapi from "../../widgets/SwapiQuery";

function DefaultContainer() {
  return (
    <Switch>
      {/* <Route path="/home" component={HomePage} /> */}
      {/* <Route path="/about" component={AboutPage} /> */}
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/logout" component={LogoutPage} />
      {/* <Route path="/widgets" component={WidgetDashboard} /> */}
      {/* <Route path="/widget/ColorChanger" component={ColorChangerWidget} /> */}
      {/* <Route path="/widget/Counter" component={CounterWidget} /> */}
      {/* <Route path="/widget/Clock" component={ClockWidget} /> */}
      {/* <Route path="/widget/Weather" component={WeatherWidget} /> */}
      {/* <Route path="/widget/Swapi" component={SearchSwapi} /> */}
    </Switch>
  );
}

export default DefaultContainer;
