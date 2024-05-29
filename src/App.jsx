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
import CorsoBlsd from "./components/volontariPage/CorsoBlsd";
import CorsoPblsd from "./components/volontariPage/CorsoPblsd";
import CorsoPtc from "./components/volontariPage/CorsoPtc";
import AreaEmergenza from "./components/AreaEmergenza";
import AreaProtezioneCivile from "./components/AreaProtezioneCivile";
import PianoEmComunale from "./components/volontariPage/PianoEmComunale";
import ComunicazioneRadio from "./components/volontariPage/ComunicazioniRadio";
import CheckListMezzo from "./components/volontariPage/CeckListMezzo";
import CeckList from "./components/CheckList";
import UserList from "./components/admin/UserList";
import ChecklistList from "./components/admin/ChecklistList";
import ChecklistVanoSanitario from "./components/volontariPage/ChecklistVanoSanitario";
import ChecklistVanoSanitarioList from "./components/admin/ChecklistVanoSanitarioList";
import ChecklistMezzoList from "./components/admin/ChecklistList";
import NotFound from "./components/NotFound";
// import Availability from "./components/Availability";
// import AdminAvailability from "./components/admin/AdminAvailability";
import "./components/css/CustomFooter.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <AppInitializer>
          <CustomNavbar />
          <main className="main-content">
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
              <Route
                path="/servizi/servizio-civile"
                element={<ServizioCivile />}
              />
              <Route path="/servizi/solidarieta" element={<Solidarietà />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/register" element={<SignIn />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/emergenza/blsd" element={<CorsoBlsd />} />
              <Route path="/emergenza/pblsd" element={<CorsoPblsd />} />
              <Route path="/emergenza/ptc" element={<CorsoPtc />} />
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
              <Route
                path="/checklist/check-list-vano-sanitario"
                element={<ChecklistVanoSanitario />}
              />
              <Route
                path="/checklists/lista-checklist-mezzo"
                element={<ChecklistMezzoList />}
              />
              <Route
                path="/checklists/lista-checklist-vano-sanitario"
                element={<ChecklistVanoSanitarioList />}
              />
              <Route path="/check-list" element={<CeckList />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/checklists" element={<ChecklistList />} />
              {/* <Route path="/availability" element={<Availability />} />
              <Route path="/admin/availabilities" element={<AdminAvailability />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <CustomFooter />
        </AppInitializer>
      </div>
    </Router>
  );
}

export default App;
