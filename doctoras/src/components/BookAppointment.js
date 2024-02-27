import "./BookAppointment.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BookAppointment = () => {
  const [appointment, setAppointment] = useState({
    phone: "",
    date: "",
    time: "",
    problem: "",
  });
  const handleChange = (event) => {
    setAppointment({
      ...appointment,
      [event.target.name]: event.target.value,
    });
  };

  const handleAppointment = (event) => {
    event.preventDefault();
    const token = window.localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post("http://localhost:4000/api/appointment", appointment, config)
      .then((response) => {
        setAppointment({
          phone: "",
          date: "",
          time: "",
          problem: "",
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="main1">
      <div className="navbar">
        <div className="'icon">
          <h2 className="logo">Doctor AS</h2>
        </div>

        <div className="menu">
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
        <div>
          <h2 className="booking">
            <u>New Booking!!</u>
          </h2>
        </div>

        <form className="appointment-form">
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              onChange={handleChange}
              value={appointment.phone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              name="date"
              id="date"
              onChange={handleChange}
              value={appointment.date}
            />
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              name="time"
              id="time"
              onChange={handleChange}
              value={appointment.time}
            />
          </div>
          <div className="form-group">
            <label htmlFor="problem">Problem:</label>
            <textarea
              name="problem"
              id="problem"
              onChange={handleChange}
              value={appointment.problem}
            ></textarea>
          </div>

          <button type="submit" onClick={handleAppointment}>
            <span>Book Appointment</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
