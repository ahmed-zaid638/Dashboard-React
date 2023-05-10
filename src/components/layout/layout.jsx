import Sidebar from "../sidebar/sidebar";
import TopNav from "../topNav/topNav";
import { HashRouter } from "react-router-dom";
import _Routes from "../Routes";
import "./layout.css";

const Layout = () => {
  return (
    <HashRouter>
      <div className="layout">
        <Sidebar />
        <div className="layout-content">
          <TopNav />
          <_Routes />
        </div>
      </div>
    </HashRouter>
  );
};

export default Layout;
