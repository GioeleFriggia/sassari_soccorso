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
import ProfileLogin from "./components/ProfileLogin";
import LoginPage from "../src/components/componentsPofileLogin/LoginPage";
import SignInPage from "../src/components/componentsPofileLogin/SingnInPage";
import ProfilePage from "../src/components/componentsPofileLogin/ProfilePage";
import PolicyPrivacy from "../src/components/componentsPofileLogin/PolicyPrivacy";

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
          <Route path="/servizi" element={<Servizi />} />
          <Route
            path="/servizi/protezione-civile"
            element={<ProtezioneCivile />}
          />
          <Route path="/servizi/servizio-civile" element={<ServizioCivile />} />
          <Route path="/servizi/soccorso" element={<Soccorso />} />
          <Route path="/servizi/solidarietà" element={<Solidarietà />} />
          <Route path="/profile-login" element={<ProfileLogin />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="privacy-policy" element={<PolicyPrivacy />} />
          </Route>
        </Routes>
        <CustomFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
