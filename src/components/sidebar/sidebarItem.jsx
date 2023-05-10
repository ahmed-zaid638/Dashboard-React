import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {  faUserGroup , faHouse , faCartPlus  , faChartSimple , faListOl , faBox , faGear} from "@fortawesome/free-solid-svg-icons";
library.add(faUserGroup  , faHouse , faCartPlus , faChartSimple  , faListOl , faBox , faGear );

// eslint-disable-next-line react/prop-types
const SidebarItem = ({ name, icon, route}) => {
  return (
    <NavLink to={route} className="item" activeClassName="active">
      <span className="icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="name">{name}</span>
    </NavLink>
  );
};
export default SidebarItem;







