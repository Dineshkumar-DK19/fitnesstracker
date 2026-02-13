// ./src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Restore user on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // LOGIN
  const login = async (email, password) => {
    try {
      setError(null);

      const data = await loginUser(email, password);

      // Temporary: extract name from email
      const extractedName = email.split("@")[0];
      const formattedName =
        extractedName.charAt(0).toUpperCase() + extractedName.slice(1);

      const userObj = {
        email,
        name: formattedName,
        token: data.token,
      };

      setUser(userObj);
      localStorage.setItem("user", JSON.stringify(userObj));

      return true;
    } catch (err) {
      setError(err.message || "Login failed");
      return false;
    }
  };

  // REGISTER (NO AUTO LOGIN)
  const register = async (name, email, password) => {
    try {
      setError(null);

      await registerUser(name, email, password);

      return true; // Only create account
    } catch (err) {
      setError(err.message || "Registration failed");
      return false;
    }
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, loading, error }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
