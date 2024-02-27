import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./components/Login";
import BookAppointment from "./components/BookAppointment";
import SignUp from "./components/SignUp";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logout from "./components/Logout";
import Protected from "./components/Protected";
import ViewAppointment from "./components/ViewAppointment";
import ViewDoctor from "./components/ViewDoctor";
import DoctorProtect from "./components/DoctorProtect";
import Admin from "./components/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <App />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/book",
    element: (
      <Protected>
        <BookAppointment />
      </Protected>
    ),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/view",
    element: <ViewAppointment />,
  },
  {
    path: "/doctor",
    element: (
      <DoctorProtect>
        <ViewDoctor />
      </DoctorProtect>
    ),
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
