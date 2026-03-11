import React from "react";
import { AuthButton, StyledLink, StyledTextField } from "./components";
import { Link as RouterLink } from "react-router-dom";

export const RegisterInput = ({ email, setEmail, password, setPassword, passwordConfirm, setPasswordConfirm, onSubmit, error }) => {
  return (
    <form onSubmit={onSubmit} className="authForm">
      <StyledTextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledTextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledTextField
        label="Re-enter Password"
        type="password"
        variant="outlined"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <AuthButton type="submit" variant="contained">
        Register
      </AuthButton>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        Already have an account? <StyledLink component={RouterLink} to="/login">Login here</StyledLink>
      </p>
    </form>
  );
};

export default RegisterInput;