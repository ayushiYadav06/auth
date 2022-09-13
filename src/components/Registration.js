import React, { useState } from "react";
import Login from "./Login";
import "./Registration.css";
const initialValue = {
  name: "",
  email: "",
  password: "",
};
function Registration() {
  const [formData, setFormData] = useState(initialValue);
  function handleData() {
    if (isEmailExist()) {
      alert("email already exist !");
      return;
    }
    const usersList = JSON.parse(localStorage.getItem("USERS_LIST")) || {};

    localStorage.setItem(
      "USERS_LIST",
      JSON.stringify({
        ...usersList,
        [formData.email.toLowerCase()]: {
          fullName: formData.fullName,
          password: formData.password,
        },
      })
    );
  }
  const inputChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((pre) => {
      return { ...pre, [name]: [value] };
    });
  };
  const isEmailExist = () => {
    const usersList = JSON.parse(localStorage.getItem("USERS_LIST")) || {};
    if (usersList[formData.email.toLowerCase()]) return true;
    return false;
  };

  return (
    <div className="form">
      <h1>Registration Form</h1>
      <form className="innerform">
        <label className="fullname">Full Name</label>
        <input
          type="text"
          placeholder="Enter your fullName"
          name="fullName"
          id="name"
          onChange={inputChangeHandler}
        />
        <br />

        <label className="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email"
          onChange={inputChangeHandler}
        />
        <br />

        <label className="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
          autoComplete="true"
          onChange={inputChangeHandler}
        />
        <br />

        <button type="submit" className="btn" onClick={handleData}>
          {" "}
          register{" "}
        </button>
      </form>
      <a href="Login.js">login page </a>
    </div>
  );
}
export default Registration;
