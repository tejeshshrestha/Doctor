import { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [signup, setSignup] = useState({});
  const nav = useNavigate();
  const handleChange = (event) => {
    setSignup({
      ...signup,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    console.log("hi");
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/signup", signup)
      .then((response) => {
        console.log(response.data);
        nav("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div class="main3">
      <div class="navbar">
        <div class="'icon">
          <h2 class="logo">Doctor AS</h2>
        </div>
        <div class="content">
          <h1>
            Welcome To <br />
            <span>Hamro Doctor</span>
          </h1>
          <p class="par">
            We have first class health centers with highly qualified
            professionals.
            <br />
            Updated equipment, DIGITAL APP, and 24/7 customer service.
            <br />
            Don't neglect your health!
          </p>

          <button class="cn">
            <a href="#">JOIN US</a>
          </button>
        </div>
      </div>

      <div class="form">
        <div class="signuph2">
          <h2>Signup Here</h2>
        </div>
        <input
          type="name"
          name="name"
          placeholder="Enter Full Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Here"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <button class="btn" onClick={handleClick}>
          Submit
        </button>

        <p class="terms">
          By clicking the Sign-Up button, you agree to our
          <br />
          <a href="#">Terms and Condition</a> and{" "}
          <a href="#">Policy and Privacy</a>
        </p>
        <div class="account">
          <p>
            Already have an account?<Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
