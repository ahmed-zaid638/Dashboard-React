import Sidebar from "../sidebar/sidebar";
import TopNav from "../topNav/topNav";
import { BrowserRouter as Router } from "react-router-dom";
import _Routes from "../Routes";
import "./layout.css";

const Layout = () => {
  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <div className="layout-content">
          <TopNav />
          <_Routes />
        </div>
      </div>
    </Router>
  );
};

export default Layout;




