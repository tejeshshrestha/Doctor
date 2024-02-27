import { Navigate } from "react-router-dom";

const DoctorProtect = ({ children }) => {
  const token = window.localStorage.getItem("admin");
  if (!token) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};

export default DoctorProtect;
