import React, { useState } from "react";
import { signIn } from "../services/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const initialValue = {
  fullName: "",
  email: "",
  password: "",
};
const Login = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState(initialValue);
  function handleData() {
    signIn(formData);
    navigate(`/dashboard`);
  }

  const inputChangeHandler = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  return (
    <div className="form-container">
      <form>
        <h1 className="primary-heading">Login Form</h1>

        <label className="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email"
          onChange={inputChangeHandler}
        />

        <label className="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
          autoComplete="false"
          onChange={inputChangeHandler}
        />

        <button type="button" className="btn" onClick={handleData}>
          Login
        </button>
        <div className="redirect-div">
          {" "}
          Don't have an account <Link to="/registration">Register</Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
