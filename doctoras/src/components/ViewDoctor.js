import axios from "axios";
import { useEffect, useState } from "react";
import "./ViewDoctor.css";
import { useNavigate } from "react-router-dom";

const ViewDoctor = () => {
  const nav = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault();
    window.localStorage.removeItem("admin");
    nav("/admin");
  };
  const [appointments, setAppointments] = useState([]);
  const [effect, setEffect] = useState(null);

  const handleClick = (id, status) => {
    const send = {
      status: !status,
    };
    axios
      .put(`http://localhost:4000/api/appointment/${id}`, send)
      .then((response) => {
        setEffect(response);
      })
      .catch((error) => console.log(error));
  };
  const badStatus = () => {
    return <div className="bad-status">Not Accepted</div>;
  };
  const goodStatus = () => {
    return <div className="good-status">Accepted</div>;
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/appointment")
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => console.log(error));
  }, [effect]);
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Problem</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => {
            return (
              <tr>
                <td>{appointment.signup.email}</td>
                <td>{appointment.signup.name}</td>
                <td>{appointment.problem}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>
                  {appointment.status === false ? badStatus() : goodStatus()}
                  <button
                    onClick={() =>
                      handleClick(appointment._id, appointment.status)
                    }
                  >
                    Change
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewDoctor;
