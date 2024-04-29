import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
      </BrowserRouter>
    </>
  );
}

export default App;
