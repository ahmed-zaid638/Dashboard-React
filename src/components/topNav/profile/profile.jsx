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
        <div>Ahmed</div>
      </div>
      <div className="">
        <img src={wallet} alt="" />
        <div>Ahmed</div>
      </div>
      <div className="">
        <img src={settings} alt="" />
        <div>Ahmed</div>{" "}
      </div>
      <div className="">
        <img src={logout} alt="" />
        <div>Ahmed</div>{" "}
      </div>
    </div>
  );
};
