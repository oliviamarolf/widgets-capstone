import { Route, Switch } from "react-router-dom";
import LoginPage from "../LoginPage";

function LoginContainer() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}

export default LoginContainer;
