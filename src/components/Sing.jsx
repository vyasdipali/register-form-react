import React, { useState } from "react";
import "./Sing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./Login";
import P2blue from "../Icon/P2blue";
import P2black from "../Icon/P2black";
import { Link } from "react-router-dom";
import "./Login";
const Sing = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationCompleted, setRegistrationCompleted] = useState(false);

  const handleRegistration = (event) => {
    event.preventDefault();

    const registerData =
      JSON.parse(window.localStorage.getItem("Register")) || [];

    const isEmailRegistered = registerData.some(
      (userData) => userData.email === email
    );

    if (isEmailRegistered) {
      console.log("Email is already registered");
      alert("Email is already registered");

      return;
    }

    registerData.push({
      name: name,
      email: email,
      password: password,s
    });

    window.localStorage.setItem("Register", JSON.stringify(registerData));

    console.log("User registered successfully:", registerData);

    setName("");
    setEmail("");
    setPassword("");
    setRegistrationCompleted(true);
  };

  return (
    <div>
      <div>
        {registrationCompleted ? (
          <Login />
        ) : (
          <>
            <div className="sing-first-div">
              <div className="sing-clr">
                <div>
                  <div style={{ position: "absolute" }}>
                    <P2black />
                  </div>
                  <div style={{ position: "absolute" }}>
                    <P2blue />
                  </div>
                </div>
              </div>
              <div className="sing-create-div">
                Create
                <div style={{ display: "flex", marginTop: "-10px" }}>
                  Account
                </div>
              </div>
              <div className="form-sing-div">
                <div className="sing-filed-div">
                  <form onSubmit={handleRegistration}>
                    <div style={{}}>
                      <div>
                        <input
                          type="text"
                          className="name"
                          placeholder="Name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          id="email"
                          className="email"
                          placeholder="Email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          id="password"
                          placeholder="Password"
                          className="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="sing-circle">
                      <button type="submit" className="sing-in">
                        Sign Up
                      </button>
                      <div>
                        <i className="bi bi-arrow-right-circle-fill sign-btn-div"></i>
                      </div>
                    </div>
                    <div className="last-div-sign">
                      <Link to="./Login">Sign in</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sing;
