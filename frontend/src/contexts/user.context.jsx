/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [logState, setLogState] = useState(false);

  const toggle_log = () => {
    setLogState(!logState);
  };

  const login = async (email, password) => {
    try {
      const userData = {
        email,
        password,
      };
      console.log(JSON.stringify(userData));
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log("🚀 ~ login ~ data:", data);
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("userData", JSON.stringify(data));
      setUser(data);
      // Handle success (e.g., show a success message)
      alert("Logged in successfully!");
      toggle_log();
    } catch (error) {
      alert(`Failed to submit form: ${error.message}`);
    }
  };

  const signup = async (userData) => {
    try {
      console.log(JSON.stringify(userData));
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      alert("Registered successfully! Now login.");
    } catch (error) {
      alert(`Failed to submit form: ${error.message}`);
    }
  };
  const logout = () => {
    toggle_log();
    setUser({});
  };

  // useEffect(() => {
  //   fetchCompanies();
  // }, []);

  return (
    <UserContext.Provider
      value={{
        login,
        signup,
        logout,
        logState,
        toggle_log,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
