import React from "react";
import { Navigate } from "react-router-dom";

// ProtectedRoute will render the component if the user is logged in, otherwise redirect to login
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />; // Redirect to login if no token
  }

  return children; // Render the protected component (Home) if logged in
};

export default ProtectedRoute;
