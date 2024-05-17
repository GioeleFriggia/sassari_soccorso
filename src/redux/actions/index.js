import axios from "axios";

// Action Types
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";

const apiUrl = "http://localhost:8080/auth";

// Async Action Creator for user registration
export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/register`, userData);
    const { user, token } = response.data;

    localStorage.setItem("token", token);
    localStorage.setItem("userDetails", JSON.stringify(user));

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: { user, token },
    });
  } catch (error) {
    console.error("Registration Error:", error);
    dispatch({
      type: REGISTER_USER_FAILURE,
      payload:
        error.response?.data.message || "Unknown error during registration",
    });
  }
};

// Async Action Creator for user login
export const loginUser = (credentials, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, credentials);
    if (response.status === 200) {
      const { token, user } = response.data;
      console.log("Login riuscito, token ricevuto:", token);

      // Fetch user data after successful login
      dispatch(fetchUserData(token));
      localStorage.setItem("user", user);
      localStorage.setItem("token", token);
      navigate("/profile");
    } else {
      throw new Error("No token received");
    }
  } catch (error) {
    console.error("Login Error:", error);
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: error.response?.data.message || "Unknown error",
    });
  }
};

// Fetch User Data
// Fetch User Data
export const fetchUserData = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    dispatch({
      type: FETCH_USER_FAILURE,
      payload: error.response?.data.message || "Failed to fetch user data",
    });
  }
};

// Logout User
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userDetails");
  dispatch({ type: LOGOUT_USER });
};
