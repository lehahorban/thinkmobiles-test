import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home.jsx";
import RegisterPage from "../Page/RegisterPage/RegisterPage.jsx";
import LoginPage from "../Page/LoginPage/LoginPage.jsx";
import ClientForm from "../components/ClientForm/ClientForm.jsx";
import ClientProfile from "../components/ClientProfile/ClientProfile.jsx";
import EventForm from "../components/EventForm/EventForm.jsx";

const RoutesApp = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/client" element={<ClientForm />} />
      <Route path="/event/:clientId" element={<ClientProfile />} />
      <Route path="/event" element={<EventForm />} />
    </Routes>
  );
};

export default RoutesApp;
