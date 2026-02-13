// ./src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check local storage for user simulation/token
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setError(null);
      const data = await loginUser(email, password);
      // Backend returns { message, token }. We don't have the user object. 
      // We will construct a basic one or try to decode token if needed.
      // For now, we'll store the email as part of the user.
      const userObj = { email, token: data.token, name: 'User' }; 
      setUser(userObj);
      localStorage.setItem('user', JSON.stringify(userObj));
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const register = async (name, email, password) => {
    try {
      setError(null);
      await registerUser(name, email, password);
      // For now, after register, we can automatically login or ask user to login.
      // Let's automatically login.
      return await login(email, password);
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, error }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
