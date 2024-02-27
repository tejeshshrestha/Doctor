import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  const token = window.localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Protected;
