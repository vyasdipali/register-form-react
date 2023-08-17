import React, { useState } from "react";
import "./Login.css";
import Sing from "./Sing";
import Orange from "../Icon/orange";
import NewBlack from "../Icon/NewBlack";
import Blue from "../Icon/Blue";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginCompleted, setLoginCompleted] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    const registerData =
      JSON.parse(window.localStorage.getItem("Register")) || [];

    const user = registerData.find(
      (userData) => userData.email === email && userData.password === password
    );

    if (user) {
      alert("Signup was successful ");
      console.log("Login successful");
      setLoginCompleted(true);
    } else {
      console.log("Login failed");
      alert("email password was not match please check  ");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {loginCompleted ? (
        <Sing />
      ) : (
        <div className="first-div">
          <div className="clr-div">
            <div>
              <div style={{ position: "absolute" }}>
                <div style={{ position: "absolute" }}>
                  <Orange />
                </div>
                <div>
                  <NewBlack />
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: "0px",
                    marginTop: "-22pc",
                  }}
                >
                  <Blue />
                </div>
              </div>
            </div>

            <div className="welcome-class">
              Welcome
              <div style={{ display: "flex", marginTop: "-16px" }}>Back</div>
            </div>
          </div>
          <div className="filed-div">
            <form onSubmit={handleLogin}>
              <div>
                <input
                  type="email"
                  className="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="sing-circle-class">
                <button type="submit" className="sing-login">
                  Signin
                </button>
                <div>
                  <i className="bi bi-arrow-right-circle-fill  login-btn-div"></i>
                </div>
              </div>
              <div className="last-div">
                <a href="./">Sign in </a>
                <a href="./">Forgot PassWord</a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
