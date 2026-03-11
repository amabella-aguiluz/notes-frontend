//login_input.jsx
import React from "react";
import { AuthButton, StyledLink, StyledTextField } from "./components";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

export const LoginInput = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  error,
}) => {
  return (
    <form onSubmit={onSubmit} className="authForm">
      <StyledTextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <StyledTextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>
        <StyledLink component={RouterLink} to="/forgot-password">Forgot password?</StyledLink>
      </p>

      <AuthButton type="submit" variant="contained">
        Login
      </AuthButton>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        Dont have an account yet? <StyledLink component={RouterLink} to="/register">Register here</StyledLink>
      </p>
    </form>
  );
};


export default LoginInput;
