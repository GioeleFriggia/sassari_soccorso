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
    <form onSubmit={handleRegister}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
        placeholder="Surname"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <input
        type="text"
        name="avatarURL"
        value={formData.avatarURL}
        onChange={handleChange}
        placeholder="Avatar URL"
      />
      <input
        type="date"
        name="birthdate"
        value={formData.birthdate}
        onChange={handleChange}
        placeholder="Birthdate"
      />
      <input
        type="text"
        name="residence"
        value={formData.residence}
        onChange={handleChange}
        placeholder="Residence"
      />
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
      />
      <input
        type="text"
        name="membershipNumber"
        value={formData.membershipNumber}
        onChange={handleChange}
        placeholder="Membership Number"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default SignIn;
