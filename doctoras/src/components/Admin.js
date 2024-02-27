import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const nav = useNavigate();
  const [secret, setSecret] = useState("");
  const handleChange = (event) => {
    setSecret(event.target.value);
  };
  const handleAccess = () => {
    if (secret === "doctor") {
      window.localStorage.setItem("admin", true);
      nav("/doctor");
    }
  };
  return (
    <div>
      Secret{" "}
      <input
        name="admin"
        onChange={handleChange}
        value={secret}
        type="password"
      />
      <button onClick={handleAccess}>Get in</button>
    </div>
  );
};

export default Admin;
