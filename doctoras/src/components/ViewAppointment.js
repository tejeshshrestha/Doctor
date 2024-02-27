import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ViewAppointment.css";

const ViewAppointment = () => {
  const [views, setViews] = useState([]);
  const badStatus = () => {
    return <div className="bad-status">Not Accepted</div>;
  };
  const goodStatus = () => {
    return <div className="good-status">Accepted</div>;
  };
  useEffect(() => {
    const userId = window.localStorage.getItem("userId");
    console.log(userId);
    axios
      .get(`http://localhost:4000/api/signup/${userId}`)
      .then((response) => {
        setViews(response.data.appointments);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="main2">
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
        <table className="table-container">
          <thead>
            <tr>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
              <th>Problem</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {views.map((view) => {
              const dateObj = new Date(view.date);

              // Check if dateObj is a valid Date object before calling toDateString()
              const formattedDate =
                dateObj instanceof Date && !isNaN(dateObj)
                  ? dateObj.toDateString()
                  : "Invalid Date";
              return (
                <tr key={view._id}>
                  <td>{view.phone}</td>
                  <td>{formattedDate}</td>
                  <td>{view.time}</td>
                  <td>{view.problem}</td>
                  <td>{view.status === false ? badStatus() : goodStatus()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAppointment;
