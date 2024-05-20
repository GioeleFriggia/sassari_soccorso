import React from "react";
import "../../App.css"; // Assicurati di importare il file CSS

const BLSD = () => {
  const googleSlidesUrl =
    "https://docs.google.com/presentation/d/e/2PACX-1vRfgL16o_mHs3KXI_CJEJhXdOoVaZkUM33W0SS-38umOcmLcwTXRf79kcWf9h5pDw/embed?start=false&loop=false&delayms=60000";

  return (
    <div className="blsd-container">
      <h1>Manuale Basic Life Support and Defibrillation (BLSD)</h1>
      <div className="responsive-iframe-container">
        <iframe
          src={googleSlidesUrl}
          frameBorder="0"
          allowFullScreen
          mozAllowFullScreen
          webkitAllowFullScreen
          title="Manuale BLSD"
          className="responsive-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default BLSD;
