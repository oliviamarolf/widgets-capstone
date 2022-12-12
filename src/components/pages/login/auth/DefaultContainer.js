import { Route, Switch } from "react-router-dom";

import LogoutPage from "../Logout";
import About from "../../About";
import WidgetsDashboard from "../../WidgetsDashboard";
import Counter from "../../../widgets/Counter";
import RGBSlider from "../../../widgets/RGBSlider";
import Swapi from "../../../widgets/Swapi";
import Weather from "../../../widgets/Weather";

function DefaultContainer() {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/logout" component={LogoutPage} />
      <Route path="/widgets" component={WidgetsDashboard} />
      <Route path="/widget/counter" component={Counter} />
      <Route path="/widget/rgb" component={RGBSlider} />
      <Route path="/widget/swapi" component={Swapi} />
      <Route path="/widget/weather" component={Weather} />
    </Switch>
  );
}

export default DefaultContainer;
