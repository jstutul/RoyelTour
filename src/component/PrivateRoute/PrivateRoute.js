import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const PrivateRoute = (props) => {
  const location = useLocation();
  const { user } = useAuth();
  console.log(user);
  return user?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ form: location }} />
  );
};

export default PrivateRoute;
