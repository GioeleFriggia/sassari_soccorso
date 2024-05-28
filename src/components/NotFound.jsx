// src/components/NotFound.jsx
import React from "react";
import image404 from "../../public/img404.jpeg";
import "../components/css/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <img src={image404} alt="404 - Not Found" className="not-found-image" />
      <p className="not-found-message">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
