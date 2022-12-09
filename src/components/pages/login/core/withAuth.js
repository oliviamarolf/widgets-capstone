import { useContext } from "react";
import { Redirect } from "react-router-dom";

import { UserContext } from "../UserProvider";

function withAuth(authorizedRoles) {
  return ({ children, withRedirect }) => {
    const { user, authIsLoading } = useContext(UserContext);

    if (authIsLoading) return <div>...logging in</div>;
    if (authorizedRoles.includes(user?.role)) {
      return children;
    } else {
      return withRedirect ? <Redirect to="/login" /> : null;
    }
  };
}

export default withAuth;
