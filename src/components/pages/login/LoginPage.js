import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "./UserProvider";

export default function LoginPage() {
  const history = useHistory();
  const { setUser, setAuthIsLoading } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setAuthIsLoading(true);
    setErrorMsg("");

    fetch("https://devpipeline-mock-api.onrender.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Logged In") {
          setUser(data.user);
          setAuthIsLoading(false);
          history.push("/about");
        }
      })
      .catch((err) => {
        setAuthIsLoading(false);
        setErrorMsg("Invalid login credentials.");
        console.error("Login Error: ", err);
      });
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>LOGIN</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <input type="submit" required value="login" />
          </div>
          {errorMsg}
        </form>
      </div>
    </div>
  );
}
