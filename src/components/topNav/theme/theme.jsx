import { useState } from "react";
import collapse from "../../../assets/images/collapse.svg";
import checked from "../../../assets/images/checked.svg";
import "./theme.css";


export const Theme = () => {
  const colors = ["Blue", "Red", "Cyan", "Green", "Orange"];
  const modes = ["Light", "Dark"];

  const [hide, setHide] = useState(false);

  return (
    <div className={`theme  ${hide ? "hide" : ""} `}>
      <div className="header">
        <div>Theme Settings </div>
        <img src={collapse} alt="" onClick={() => setHide(!hide)} />
      </div>
      {/* Mode  */}
      <div className="picker  mode-list">
        <div className="">Choose mode</div>
        <ul>
          {modes.map((mode , index) => (
            <li key={index}>
              <div>
                <img src={checked} alt="" />
              </div>
              <span>{mode}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* color list  */}
      <div className="picker color-list">
        <div>Choose color</div>
        <ul>
          {colors.map((color , index) => (
            <li key={index}>
              <div>
                <img src={checked} alt="" />
              </div>
              <span>{color}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
