// ./src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const register = async (fullName, username, email, password) => {
    setError(null);

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const usernameExists = users.find(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );

    if (usernameExists) {
      setError("Username already taken");
      return false;
    }

    users.push({ fullName, username, email, password });

    localStorage.setItem("users", JSON.stringify(users));

    return true;
  };

  const login = async (username, password) => {
    setError(null);

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (u) =>
        u.username.toLowerCase() === username.toLowerCase() &&
        u.password === password
    );

    if (!existingUser) {
      setError("Invalid username or password");
      return false;
    }

    const userObj = {
      username: existingUser.username,
      fullName: existingUser.fullName,
    };

    setUser(userObj);
    localStorage.setItem("user", JSON.stringify(userObj));

    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
