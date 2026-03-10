//loginpage

import React, { useState } from "react";
import LoginInput from "./components/login_input";
import AuthPage from "./components/auth_page";
import { useLogin } from "../../hooks/auth/useLogin";


export const LoginPage = () => {
  const { handleLogin, error } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <AuthPage
      type="Login"
      typeInput={
        <LoginInput
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={onSubmit}
          error={error}
        />
      }
    />
  );
};

export default LoginPage;
