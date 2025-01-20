import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // react router navigation

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // store user in localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // remove user from storage
    localStorage.removeItem("access_token"); // remove token
    navigate("/login"); // redirect to login page
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
