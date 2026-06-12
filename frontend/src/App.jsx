import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Resume from "./pages/Resume";
import Application from "./pages/Application";
import CreateApplication from "./pages/CreateApplication";
import { Routes, Route, Link } from 'react-router-dom'
import NotFound from "./pages/NotFound";

function App() {
  return(
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/applications" element={<Application/>} />
    <Route path="/create-application" element={<CreateApplication />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  )
}

export default App;
