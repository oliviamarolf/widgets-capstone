import { Route } from "react-router-dom";

import "./styles/App.scss";
import LoginContainer from "./pages/login/auth/LoginContainer";
import DefaultContainer from "./pages/login/auth/DefaultContainer";
import { StandardUser } from "./pages/login/helpers/UserRoles";
import Navbar from "./navigation/Navbar";

function App() {
  return (
    <div className="app-container">
      <StandardUser>
        <Navbar />
      </StandardUser>
      <Route path="/" component={LoginContainer} />
      <StandardUser withRedirect>
        <Route component={DefaultContainer} />
      </StandardUser>
    </div>
  );
}

export default App;
