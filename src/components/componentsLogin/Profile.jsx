import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserData, logoutUser } from "../../redux/actions";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const { user, token } = auth;

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUserData(token));
    }
  }, [dispatch, token, user]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login"); // Redirect to login page after logout
  };

  if (!auth) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">Profile Page</div>
      <div className="profile-field">
        <strong>Name:</strong> <span>{user.name}</span>
      </div>
      <div className="profile-field">
        <strong>Surname:</strong> <span>{user.surname}</span>
      </div>
      <div className="profile-field">
        <strong>Email:</strong> <span>{user.email}</span>
      </div>
      <div className="profile-field">
        <strong>Avatar URL:</strong>{" "}
        <span>{user.avatarURL || "Not provided"}</span>
      </div>
      <div className="profile-field">
        <strong>Birthdate:</strong>{" "}
        <span>{user.birthdate || "Not provided"}</span>
      </div>
      <div className="profile-field">
        <strong>Residence:</strong>{" "}
        <span>{user.residence || "Not provided"}</span>
      </div>
      <div className="profile-field">
        <strong>City:</strong> <span>{user.city || "Not provided"}</span>
      </div>
      <div className="profile-field">
        <strong>Membership Number:</strong>{" "}
        <span>{user.membershipNumber || "Not provided"}</span>
      </div>
      <button onClick={handleLogout} className="profile-logout-button">
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
