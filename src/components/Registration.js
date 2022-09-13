import React, { useState } from "react";
import { isEmailExist, signUp } from "../services/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const initialValue = {
  email: "",
  password: "",
};
function Registration() {

  const [formData, setFormData] = useState(initialValue);
  let navigate = useNavigate();
  function handleData() {
    if (isEmailExist(formData.email)) {
      alert("email already exist !");
      return;
    }
    signUp(formData)
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
        <h1 className="primary-heading">Registration Form</h1>
        <label className="fullname">Full Name</label>
        <input
          type="text"
          placeholder="Enter your fullName"
          name="fullName"
          id="name"
          onChange={inputChangeHandler}
        />

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

          Register
        </button>
        <div className="redirect-div"> Already Have an account? <Link to="/">Login Here</Link></div>
      </form>
    </div>
  );
}
export default Registration;
