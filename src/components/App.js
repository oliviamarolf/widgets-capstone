import { Route } from "react-router-dom";

import LoginContainer from "./pages/login/auth/LoginContainer";
import DefaultContainer from "./pages/login/auth/DefaultContainer";
import { StandardUser } from "./pages/login/helpers/UserRoles";

function App() {
  return (
    <div className="app-container">
      <Route path="/" component={LoginContainer} />
      <StandardUser withRedirect>
        <Route component={DefaultContainer} />
      </StandardUser>
    </div>
  );
}

export default App;
