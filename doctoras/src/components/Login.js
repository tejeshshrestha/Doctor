import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [login, setLogin] = useState({});
  const nav = useNavigate();
  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/login", login)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("userId", response.data.id);
        console.log(window.localStorage.getItem("userId"));
        nav("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="main">
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

        <button class="cn">JOIN US</button>
      </div>

      <div class="form">
        <h2>Login Here</h2>
        <input
          type="email"
          name="email"
          placeholder="Enter Email Here"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password Here"
          onChange={handleChange}
        />
        <button class="btn" onClick={handleLogin}>
          Login
        </button>

        <p class="link">
          Don't have an account
          <br />
          <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
