import React from "react";
import PDFViewer from "./components/PDFViewer";

const BlsdCorse = () => {
  return (
    <div>
      <h1>Corso BLSD</h1>
      <PDFViewer fileUrl="../../../public/Manuale BLSD.pdf" />
    </div>
  );
};

export default BlsdCorse;
