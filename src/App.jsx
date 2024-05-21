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

import CorsoBLSD from "../src/components/volontariPage/CorsoBlsd/";
import CorsoPBLSD from "./components/volontariPage/CorsoPblsd";
import CorsoPTC from "./components/volontariPage/CorsoPtc/";

import AreaEmergenza from "../src/components/AreaEmergenza";
import AreaProtezioneCivile from "./components/AreaProtezioneCivile";
import PianoEmComunale from "./components/volontariPage/PianoEmComunale";
import ComunicazioneRadio from "./components/volontariPage/ComunicazioniRadio";
import CheckListMezzo from "./components/volontariPage/CeckListMezzo";
import CeckList from "./components/CheckList"; // Adjust the path as necessary

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
          <Route
            path="/area-protezione-civile/piano-di-emergenza"
            element={<PianoEmComunale />}
          />
          <Route
            path="/area-protezione-civile/comunicazioni-radio"
            element={<ComunicazioneRadio />}
          />
          <Route
            path="/area-protezione-civile"
            element={<AreaProtezioneCivile />}
          />
          <Route
            path="/checklist/check-list-mezzo"
            element={<CheckListMezzo />}
          />

          <Route path="/check-list" element={<CeckList />} />
        </Routes>
        <CustomFooter />
      </AppInitializer>
    </Router>
  );
}

export default App;
