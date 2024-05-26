import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSelector } from "reselect";
import {
  logoutUser,
  fetchUserData,
  uploadAvatar,
} from "../../redux/actions/index";
import "../css/ProfilePage.css";

const mySelector = (state) => state.someData;

const memoizedSelector = createSelector(mySelector, (data) =>
  data.filter((item) => item.someCondition)
);

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const { user, token } = auth || {};
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUserData(token));
    }
  }, [dispatch, token, user]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setLoading(true);
    dispatch(uploadAvatar(user.id, e.target.files[0], token)).then(() => {
      setLoading(false);
    });
  };

  const handleAvatarClick = () => {
    document.getElementById("fileInput").click();
  };

  if (!auth) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  const borderColor = user.avatarURL ? "#3fc826" : "#dc3545";
  const avatarText = user.avatarURL
    ? "Clicca per cambiare foto profilo"
    : "Inserisci un'immagine di profilo";

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div
          className="profile-avatar"
          onClick={handleAvatarClick}
          style={{
            borderColor: borderColor,
          }}
        >
          {loading && <div className="spinner"></div>}
          {!loading && <img src={user.avatarURL || ""} alt="Avatar" />}
        </div>
        <div className="profile-avatar-text">{avatarText}</div>
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          className="profile-upload-input"
        />
        <h2 className="profile-header">Profilo</h2>
        {user.role === "ADMIN" && (
          <div className="profile-admin">
            <strong>Ruolo:</strong> <span>ADMIN</span>
          </div>
        )}
        <div className="profile-field">
          <strong>Nome:</strong> <span>{user.name}</span>
        </div>
        <div className="profile-field">
          <strong>Cognome:</strong> <span>{user.surname}</span>
        </div>
        <div className="profile-field">
          <strong>Email:</strong> <span>{user.email}</span>
        </div>
        <div className="profile-field">
          <strong>Data di nascita:</strong>{" "}
          <span>{user.birthdate || "Non fornito"}</span>
        </div>
        <div className="profile-field">
          <strong>Residenza:</strong>{" "}
          <span>{user.residence || "Non fornito"}</span>
        </div>
        <div className="profile-field">
          <strong>Città:</strong> <span>{user.city || "Non fornito"}</span>
        </div>
        <div className="profile-field">
          <strong>Numero di iscrizione:</strong>{" "}
          <span>{user.membershipNumber || "Non fornito"}</span>
        </div>
        <button
          onClick={handleLogout}
          className="profile-button profile-logout-button"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
