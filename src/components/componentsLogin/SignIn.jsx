import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/index";

const SignIn = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    avatarURL: "",
    birthdate: "",
    residence: "",
    city: "",
    membershipNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!formData.name || !formData.surname || !formData.password) {
      alert("Please fill out all required fields.");
      return;
    }
    dispatch(registerUser(formData));
  };

  return (
    <div className="sign-in-wrapper">
      <div className="sign-in-container">
        <div className="sign-in-logo">
          <img src="logo2.jpg" alt="Logo" />
        </div>
        <h2>Registrazione</h2>
        <form onSubmit={handleRegister} className="sign-in-form">
          <label>Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Inserisci il tuo nome..."
            required
          />
          <label>Cognome</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Inserisci il tuo cognome..."
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Inserisci la tua email..."
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Inserisci la tua password..."
            required
          />
          <label>Avatar URL</label>
          <input
            type="text"
            name="avatarURL"
            value={formData.avatarURL}
            onChange={handleChange}
            placeholder="Avatar URL"
          />
          <label>Data di Nascita</label>
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            placeholder="gg/mm/aaaa"
          />
          <label>Residenza</label>
          <input
            type="text"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
            placeholder="Residenza"
          />
          <label>Città</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Città"
          />
          <label>Numero di Iscrizione</label>
          <input
            type="text"
            name="membershipNumber"
            value={formData.membershipNumber}
            onChange={handleChange}
            placeholder="Numero di Iscrizione"
          />
          <button type="submit">Iscriviti</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
