import "./form.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { Link } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div class="main2">
      <div class="navbar">
        <div class="'icon">
          <h2 class="logo">Doctor AS</h2>
        </div>

        <div class="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/book">Book Appointment</Link>
            </li>
            <li>
              <Link to="/view">VIEW APPOINTMENT</Link>
            </li>
            <li>
              <a href="#">CANCEL BOOKING</a>
            </li>
            <li>
              <a href="#">FEEDBACK</a>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="content">
        <h1>
          Your Health is
          <br />
          <span>Our Priority</span>
        </h1>
        <p class="par">
          We have first class health centers with highly qualified
          professionals.
          <br />
          Updated equipment, DIGITAL APP, and 24/7 customer service.
          <br />
          Don't neglect your health!
        </p>
        <Link to="/book">
          <button class="cn">Book Appointment</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
