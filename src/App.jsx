import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/ChiSiamo";
import DoveSiamo from "./pages/DoveSiamo";
import Formazione from "./pages/Formazione";
import Servizi from "./components/Servizi";
import ServizioCivile from "./components/componentsServizi/ServizioCivile";
import ProtezioneCivile from "./components/componentsServizi/ProtezioneCivile";
import Soccorso from "./components/componentsServizi/Soccorso";
import Solidarietà from "./components/componentsServizi/Solidarietà";
import Login from "./components/componentsLogin/Login";
import SignIn from "./components/componentsLogin/SignIn";
import Profile from "./components/componentsLogin/Profile";
import PrivacyPolicyPage from "./components/componentsLogin/PrivactPolicy"; // Correzione del nome file se necessario
import LoginProfile from "./components/LoginProfile";

function App() {
  return (
    <BrowserRouter>
      <div className="dflex flex-column h-100">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<AboutPage />} />
          <Route path="/dove-siamo" element={<DoveSiamo />} />
          <Route path="/formazione" element={<Formazione />} />
          <Route path="/servizi" element={<Soccorso />} />
          <Route
            path="/servizi/protezione-civile"
            element={<ProtezioneCivile />}
          />
          <Route path="/servizi/servizio-civile" element={<ServizioCivile />} />
          <Route path="/servizi/soccorso" element={<Soccorso />} />
          <Route path="/servizi/solidarietà" element={<Solidarietà />} />

          {/* Nuove rotte per i componenti di login e profilo */}
          <Route path="/loginprofile" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>

        <CustomFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
