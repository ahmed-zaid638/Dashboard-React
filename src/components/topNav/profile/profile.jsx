import user from "../../../assets/images/user.svg";
import wallet from "../../../assets/images/wallet.svg";
import settings from "../../../assets/images/settings.svg";
import logout from "../../../assets/images/logout.svg";

import "./profile.css";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="">
        <img src={user} alt="" />
        <div>Profile</div>
      </div>
      <div className="">
        <img src={wallet} alt="" />
        <div>My wallet</div>
      </div>
      <div className="">
        <img src={settings} alt="" />
        <div>Settings</div>{" "}
      </div>
      <div className="">
        <img src={logout} alt="" />
        <div>Logout</div>{" "}
      </div>
    </div>
  );
};
