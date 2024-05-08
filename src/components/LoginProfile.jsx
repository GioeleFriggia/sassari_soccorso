import Login from "./componentsLogin/Login";
import SignIn from "./componentsLogin/SignIn";
import Profile from "./componentsLogin/Profile";
import PrivacyPolicyPage from "./componentsLogin/PrivactPolicy";

const LoginProfile = () => {
  return (
    <div>
      <Login />
      <SignIn />
      <Profile />
      <PrivacyPolicyPage />
    </div>
  );
};

export default LoginProfile;
