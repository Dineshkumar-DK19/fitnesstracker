// ./src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Restore user from localStorage
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

      // Get stored registered users
      const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

      // Find correct user by email
      const existingUser = users.find((u) => u.email === email);

      const userObj = {
        email,
        name: existingUser?.name || "User",
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

  // REGISTER
  const register = async (name, email, password) => {
    try {
      setError(null);

      await registerUser(name, email, password);

      // Save registered user locally
      const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

      users.push({ name, email });

      localStorage.setItem("registeredUsers", JSON.stringify(users));

      return true;
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
