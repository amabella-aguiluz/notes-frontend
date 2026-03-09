// src/pages/auth/ForgotPassword.jsx
import { useState } from "react";
import { forgotPassword } from "../../services/auth.service"; 
import { TextField, Button, Typography } from "@mui/material";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // success or error message
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      await forgotPassword(email); // backend generates token & sends email
      setStatus("Check your email for the reset link.");
    } catch (err) {
      setStatus(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <Typography variant="h5">Forgot Password</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" disabled={loading} fullWidth>
          {loading ? "Sending..." : "Send Reset Link"}
        </Button>
      </form>
      {status && <Typography style={{ marginTop: "1rem" }}>{status}</Typography>}
    </div>
  );
};

export default ForgotPassword;