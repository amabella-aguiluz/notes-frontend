import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const useLogin = () => {
  const { user, login, logout: contextLogout } = useAuth();   // from context
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
  }, [login, navigate]);

  const logout = useCallback(() => {
    contextLogout(); 
    navigate("/login");
  }, [contextLogout, navigate]);

  return { loading, error, handleLogin, logout };
};