/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
//import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/homePage";
import Footer from "./components/Footer";
import CompanyContextProvider from "./contexts/company.context";
import AuthPage from "./pages/AuthPage";
import UserContextProvider from "./contexts/user.context";
function App() {
  return (
    <div>
      <UserContextProvider>
        <Navbar />
        <CompanyContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage />} />
          </Routes>
        </CompanyContextProvider>
      </UserContextProvider>
      <Footer />
    </div>
  );
}

export default App;
