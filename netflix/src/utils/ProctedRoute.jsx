import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.user.user);
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;