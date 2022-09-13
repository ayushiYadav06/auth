import React from "react";
import "./Login.css";
const Login = () => {
  const log = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mail = localStorage.getItem("email");
    const pass = localStorage.getItem("password");

    if (email == mail && password == pass) alert("successfully login");
    else alert("email and password does not match");
  };
  return (
    <div className="outerContainer">
      <h1>Login</h1>
      <form className="innerContainer">
        <label className="email">Email</label>
        <input type="email" placeholder="Enter your Email" id="mail" />
        <br />

        <label className="password">Password</label>
        <input
          type="password"
          id="pass"
          placeholder="Enter your Password"
          autoComplete="true"
        />
        <br />
        <button className="btn" onClick={log}>
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
