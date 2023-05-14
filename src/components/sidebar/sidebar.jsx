import itemsdata from "./itemsdata";
import SidebarItem from "./sidebarItem";

import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="logo"> Ahmed Zaid </div>
      <div className="items">
        {itemsdata.map((item, index) => {
          return (
            <SidebarItem
              key={index}
              id={item.id}
              icon={item.icon}
              name={item.name}
              route={item.route}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
