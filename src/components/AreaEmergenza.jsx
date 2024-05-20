import React from "react";
import CorsoBLSD from "../components/volontariPage/CorsoBlsd/";
import CorsoPBLSD from "../components/volontariPage/CorsoPblsd";
import CorsoPTC from "../components/volontariPage/CorsoPtc";

const AreaEmergenza = () => {
  return (
    <div>
      <CorsoBLSD />
      <CorsoPBLSD />
      <CorsoPTC />
    </div>
  );
};

export default AreaEmergenza;
