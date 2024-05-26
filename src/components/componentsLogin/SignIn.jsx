import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";
import "../css/SignIn.css"; // Import the CSS file

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    birthdate: "",
    residence: "",
    city: "",
    membershipNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!formData.name || !formData.surname || !formData.password) {
      alert("Please fill out all required fields.");
      return;
    }
    try {
      const response = await dispatch(registerUser(formData));
      if (response.success) {
        setFormData({
          name: "",
          surname: "",
          email: "",
          password: "",
          birthdate: "",
          residence: "",
          city: "",
          membershipNumber: "",
        });
        navigate("/");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <div className="register-logo">
          <img src="/public/logo2.png" alt="Logo" />
        </div>
        <h2>Registrazione</h2>
        <form onSubmit={handleRegister} className="register-form">
          <input
            className="register-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Inserisci il tuo nome..."
            required
          />
          <input
            className="register-input"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Inserisci il tuo cognome..."
            required
          />
          <input
            className="register-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Inserisci la tua email..."
            required
          />
          <input
            className="register-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Inserisci la tua password..."
            required
          />
          <input
            className="register-input"
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            placeholder="gg/mm/aaaa"
          />
          <input
            className="register-input"
            type="text"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
            placeholder="Residenza"
          />
          <input
            className="register-input"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Città"
          />
          <input
            className="register-input"
            type="text"
            name="membershipNumber"
            value={formData.membershipNumber}
            onChange={handleChange}
            placeholder="Numero di Iscrizione"
          />
          <button className="register-button" type="submit">
            Iscriviti
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
