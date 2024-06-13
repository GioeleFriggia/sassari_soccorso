import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";
import "../../components/css/login.css"; // Ensure your CSS path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }, navigate))
      .then((response) => {
        if (!response.success) {
          setError("Email o password non validi. Per favore riprova.");
        }
      })
      .catch(() => {
        setError("Si è verificato un errore. Per favore riprova.");
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container" style={{ marginTop: "60px" }}>
        <div className="login-logo">
          <img src="logo2.png" alt="Logo" />{" "}
        </div>
        <h2>Accedi</h2>
        <p>Benvenuto! Per continuare, effettua l'accesso al tuo account.</p>
        {error && <div className="error-modal">{error}</div>}
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            className="login-input"
            type="email"
            placeholder="Inserisci la tua email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-input-container">
            <input
              className="login-input"
              type={showPassword ? "text" : "password"}
              placeholder="Inserisci la tua password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="password-toggle-icon" onClick={toggleShowPassword}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <button className="login-button" type="submit">
            Accedi
          </button>
        </form>
        <p>
          Non hai un account?{" "}
          <span className="register-link" onClick={handleRegisterClick}>
            Registrati
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
