import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/ChiSiamo";
import DoveSiamo from "./pages/DoveSiamo";
import Formazione from "./pages/Formazione";
import ProtezioneCivile from "./components/componentsServizi/ProtezioneCivile";
import Soccorso from "./components/componentsServizi/Soccorso";
import Solidarietà from "./components/componentsServizi/Solidarietà";
import Login from "./components/componentsLogin/Login";
import SignIn from "./components/componentsLogin/SignIn";
import Profile from "./components/componentsLogin/Profile";
import PrivacyPolicyPage from "./components/componentsLogin/PrivactPolicy";
import ServizioCivile from "./components/componentsServizi/ServizioCivile";
import AppInitializer from "./components/AppInitializer";
import CorsoBLSD from "../src/components/volontariPage/CorsoBLSD";
import CorsoPBLSD from "../src/components/volontariPage/CorsoPBLSD";
import CorsoPTC from "../src/components/volontariPage/CorsoPTC/";
import AreaEmergenza from "./components/AreaEmergenza";

function App() {
  return (
    <Router>
      <AppInitializer>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<AboutPage />} />
          <Route path="/dove-siamo" element={<DoveSiamo />} />
          <Route path="/formazione" element={<Formazione />} />
          <Route
            path="/servizi/protezione-civile"
            element={<ProtezioneCivile />}
          />
          <Route path="/servizi/soccorso" element={<Soccorso />} />
          <Route path="/servizi/servizio-civile" element={<ServizioCivile />} />
          <Route path="/servizi/solidarieta" element={<Solidarietà />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/emergenza/blsd" element={<CorsoBLSD />} />
          <Route path="/emergenza/pblsd" element={<CorsoPBLSD />} />
          <Route path="/emergenza/ptc" element={<CorsoPTC />} />
          <Route path="/emergenza" element={<AreaEmergenza />} />
        </Routes>
        <CustomFooter />
      </AppInitializer>
    </Router>
  );
}

export default App;
