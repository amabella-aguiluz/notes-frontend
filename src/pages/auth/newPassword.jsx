// src/pages/auth/ResetPassword.jsx
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/auth.service";
import { Typography } from "@mui/material";
import { AuthButton, StyledTextField } from "../../components/components";
import AuthPage from "./components/auth_page"; // adjust path if needed

export const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setStatus("Invalid reset link.");
      return;
    }

    setLoading(true);
    setStatus("");
    try {
      await resetPassword({ token, newPassword });
      setStatus("Password reset successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setStatus(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const form = (
    <>
      <form onSubmit={handleSubmit} className="authForm">
        <StyledTextField
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <AuthButton type="submit" variant="contained" disabled={loading} fullWidth>
          {loading ? "Resetting..." : "Reset Password"}
        </AuthButton>
      </form>
      {status && <Typography style={{ marginTop: "1rem" }}>{status}</Typography>}
    </>
  );

  return <AuthPage type="Reset Password" typeInput={form} />;
};

export default ResetPassword;