import React from "react";
import CorsoBLSD from "../components/volontariPage/CorsoBLSD";
import CorsoPBLSD from "../components/volontariPage/CorsoPBLSD";
import CorsoPTC from "../components/volontariPage/CorsoPTC/";

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
