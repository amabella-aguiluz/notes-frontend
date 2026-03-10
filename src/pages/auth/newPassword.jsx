// src/pages/auth/ResetPassword.jsx
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/auth.service";
import { TextField, Button, Typography } from "@mui/material";

export const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token"); // get token from URL
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

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <Typography variant="h5">Reset Password</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" disabled={loading} fullWidth>
          {loading ? "Resetting..." : "Reset Password"}
        </Button>
      </form>
      {status && <Typography style={{ marginTop: "1rem" }}>{status}</Typography>}
    </div>
  );
};

export default ResetPassword;