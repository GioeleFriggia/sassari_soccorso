import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/ChiSiamo";
import DoveSiamo from "./pages/DoveSiamo";
import Formazione from "./pages/Formazione"; // Importa il componente per la pagina "Chi siamo"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="dflex flex-column h-100">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<AboutPage />} />{" "}
          <Route path="/dove-siamo" element={<DoveSiamo />} />{" "}
          <Route path="/formazione" element={<Formazione />} />{" "}
        </Routes>
        <CustomFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
