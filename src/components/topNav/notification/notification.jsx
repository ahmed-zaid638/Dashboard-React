import wanning from "../../../assets/images/warnning.svg";
import packag from "../../../assets/images/package.svg";
import cart from "../../../assets/images/cart.svg";
import "./notification.css";

export const Notification = () => {



  
  return (
    <div className="notification">
      <div className="">
        <img src={wanning} alt="" />
        <p>Lorem ipsum dolor sit amet fait consectetur adipisicin </p>
      </div>
      <div className="">
        <img src={packag} alt="" />
        <p>Lorem ipsum dolor sit amet fait consectetur adipisicin </p>
      </div>
      <div className="">
        <img src={wanning} alt="" />
        <p>Lorem ipsum dolor sit amet fait consectetur adipisicin </p>
      </div>
      <div className="">
        <img src={cart} alt="" />
        <p>Lorem ipsum dolor sit amet fait consectetur adipisicin </p>{" "}
      </div>
    </div>
  );
};
