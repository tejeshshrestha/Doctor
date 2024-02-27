import { Navigate } from "react-router-dom";

const Logout = () => {
  window.localStorage.removeItem("token");
  return <Navigate to="/login" replace />;
};

export default Logout;
