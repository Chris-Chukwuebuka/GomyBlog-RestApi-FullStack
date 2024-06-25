import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, user }) => {
  if (!user) {
    return <Navigate to={"/get-started/signin"} replace />;
  }

  return children;
};

export default ProtectedRoutes;
