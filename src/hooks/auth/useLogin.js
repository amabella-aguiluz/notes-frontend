
// src/hooks/auth/useAuth.js
import { useState, useEffect, useCallback } from "react";
import { login } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // check token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  // login function
  const handleLogin = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      await login(email, password); // calls API and stores token
      setIsAuthenticated(true);
      navigate("/notes");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  // logout function
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  }, [navigate]);

  return { isAuthenticated, loading, error, handleLogin, logout };
};