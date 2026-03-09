import { Navigate } from "react-router-dom";
import { useLogin } from "../hooks/auth/useLogin";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useLogin();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
