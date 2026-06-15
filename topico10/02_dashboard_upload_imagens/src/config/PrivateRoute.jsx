/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";

export default function PrivateRoute({ children }){
  const { isLogged } = useAuthContext();
  return isLogged ? children : <Navigate to="/login" />;
};