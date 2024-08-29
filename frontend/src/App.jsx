/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
//import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import CompanyContextProvider from "./contexts/company.context";
import AuthPage from "./pages/AuthPage";
import UserContextProvider from "./contexts/user.context";
import ProductContextProvider from "./contexts/product.context";
import CompanyPage from "./pages/CompanyPage";
function App() {
  return (
    <div>
      <UserContextProvider>
        <Navbar />

        <CompanyContextProvider>
          <ProductContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/business/:companyId" element={<CompanyPage />} />
            </Routes>
          </ProductContextProvider>
        </CompanyContextProvider>
      </UserContextProvider>
      <Footer />
    </div>
  );
}

export default App;
