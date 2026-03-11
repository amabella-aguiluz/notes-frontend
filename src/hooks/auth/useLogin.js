import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const useLogin = () => {
  const { login } = useAuth();   // from context
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // login function
  const handleLogin = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      await login(email, password);
      navigate("/notes");
    } catch (err) {
      setError(err.response?.data?.error);
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