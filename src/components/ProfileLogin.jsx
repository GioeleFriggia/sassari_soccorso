import SingnInPage from "./componentsPofileLogin/SingnInPage";
import PolicyPrivacy from "./componentsPofileLogin/PolicyPrivacy";
import ProfilePage from "./componentsPofileLogin/ProfilePage";
import LoginPage from "./componentsPofileLogin/LoginPage";

const ProfileLogin = () => {
  return (
    <div>
      <LoginPage />
      <SingnInPage />
      <ProfilePage />
      <PolicyPrivacy />
    </div>
  );
};
export default ProfileLogin;
