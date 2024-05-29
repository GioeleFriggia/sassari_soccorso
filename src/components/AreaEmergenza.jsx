import React from "react";
import CorsoBlsd from "../../CorsoBlsd";
import CorsoPblsd from "../components/volontariPage/CorsoPblsd";
import CorsoPtc from "../components/volontariPage/CorsoPtc";

const AreaEmergenza = () => {
  return (
    <div>
      <CorsoBlsd />
      <CorsoPblsd />
      <CorsoPtc />
    </div>
  );
};

export default AreaEmergenza;
