import { useState } from "react";
import "./topNav.css";
import search from "../../assets/images/search.svg";
import theme from "../../assets/images/theme.svg";
import notication from "../../assets/images/notification.svg";
import photo from "../../assets/images/photo.jpg";
import { Theme } from "./theme/theme";
import { Notification } from "./notification/notification";
import { Profile } from "./profile/profile";

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false);
  const [profileToggle, setprofileToggle] = useState(false);

  return (
    <div className="topnav">
      <div className="topnav-left">
        <input type="text" placeholder="Search here" />
        <img src={search} alt="" />
      </div>
      <div className="topnav-right">
        <div className="profile-icon">
          <img src={photo} alt=""  onClick={() => setprofileToggle(!profileToggle)} />
          <span>Ahmed</span>
           {profileToggle && <Profile />}
        </div>
        <div className="notfication-icon">
          <div className="count">12</div>
          <img src={notication} alt="" onClick={() => setNotificationToggle(!notificationToggle)} />
          {notificationToggle &&  <Notification />}
        </div>
        <div className="theme-icon" onClick={() => setIsOpen(!isOpen) } >
          <img src={theme} alt=""  />
          {isOpen && <Theme />}
        </div>
      </div>
    </div>
  );
};
export default TopNav;
