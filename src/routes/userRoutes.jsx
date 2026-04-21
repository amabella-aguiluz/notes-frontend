// userRoutes.jsx
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import ForgotPassword from "../pages/auth/forgotPassword";
import ResetPassword from "../pages/auth/newPassword";

const UserRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage key="login" />}
      />
      <Route
        path="/register"
        element={<RegisterPage key="register" />}
      />
      <Route
      path="/reset-password"
      element={<ResetPassword />} />
      <Route
      path="/forgot-password"
      element={<ForgotPassword />} />
    </Routes>
    
  );
};

export default UserRoutes;
