// src/pages/auth/ForgotPassword.jsx
import { useState } from "react";
import { forgotPassword } from "../../services/auth.service"; 
import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthPage from "./components/auth_page"; // adjust path if needed
import { AuthButton, StyledLink, StyledTextField } from "./components/components";


export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); 
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      await forgotPassword(email);
      setStatus("Check your email for the reset link.");
    } catch (err) {
      setStatus(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const form = (
    <>
      <form onSubmit={handleSubmit} className="authForm">
        <StyledTextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <p>
        <StyledLink component={RouterLink} to="/login">Go back</StyledLink>
      </p>
        <AuthButton type="submit" variant="contained" disabled={loading} fullWidth>
          {loading ? "Sending..." : "Send Reset Link"}
        </AuthButton>
      </form>
      {status && <Typography style={{ marginTop: "1rem" }}>{status}</Typography>}
    </>
  );

  return <AuthPage type="Forgot Password" typeInput={form} />;
};

export default ForgotPassword;