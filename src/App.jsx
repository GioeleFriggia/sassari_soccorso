import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from "../src/components/CustomNavbar";
import CustomFooter from "../src/components/CustomFooter";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/ChiSiamo";
import DoveSiamo from "../src/pages/DoveSiamo";
import Formazione from "../src/pages/Formazione";
import ProtezioneCivile from "../src/components/componentsServizi/ProtezioneCivile";
import Soccorso from "../src/components/componentsServizi/Soccorso";
import Solidarietà from "../src/components/componentsServizi/Solidarietà";
import Login from "../src/components/componentsLogin/Login";
import SignIn from "../src/components/componentsLogin/SignIn";
import Profile from "../src/components/componentsLogin/Profile";
import PrivacyPolicyPage from "../src/components/componentsLogin/PrivactPolicy";
import ServizioCivile from "../src/components/componentsServizi/ServizioCivile";
import AppInitializer from "../src/components/AppInitializer";
import CorsoBlsd from "../src/components/volontariPage/CorsoBlsd";
import CorsoPblsd from "../src/components/volontariPage/CorsoPblsd";
import CorsoPtc from "../src/components/volontariPage/CorsoPtc";
import AreaEmergenza from "../src/components/AreaEmergenza";
import AreaProtezioneCivile from "../src/components/AreaProtezioneCivile";
import PianoEmComunale from "../src/components/volontariPage/PianoEmComunale";
import ComunicazioneRadio from "../src/components/volontariPage/ComunicazioniRadio";
import CheckListMezzo from "../src/components/volontariPage/CeckListMezzo";
import CeckList from "../src/components/CheckList";
import UserList from "../src/components/admin/UserList";
import ChecklistList from "../src/components/admin/ChecklistList";
import ChecklistVanoSanitario from "../src/components/volontariPage/ChecklistVanoSanitario";
import ChecklistVanoSanitarioList from "../src/components/admin/ChecklistVanoSanitarioList";
import ChecklistMezzoList from "../src/components/admin/ChecklistList";
// import Availability from "../src/components/Availability";
// import AdminAvailability from "../src/components/admin/AdminAvailability";
import "../src/components/css/CustomFooter.css";

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
            </Routes>
          </main>
          <CustomFooter />
        </AppInitializer>
      </div>
    </Router>
  );
}

export default App;
