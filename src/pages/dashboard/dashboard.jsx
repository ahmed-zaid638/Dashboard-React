import lock from "../../assets/images/lock.svg";
import cart from "../../assets/images/cart.svg";
import check from "../../assets/images/check.svg";
import dollar from "../../assets/images/dollar.svg";
import { Chart } from "./chart";
import { TopCustomers } from "./tables";
import { LatestOrders } from "./tables";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="fs-2 mb-4 fw-bold">Dashboard</h1>
      <div className="stats d-flex gap-4 w-100">
        <div className="boxes w-50 ">
          {/* box  */}
          <div className="box ">
            <div className="icon">
              <img src={lock} alt="" className="" />
            </div>
            <div className="ms-4">
              <h4 className="fs-1 fw-bold">1,995</h4>
              <p className="ms-2 fs-5">Total Sales</p>
            </div>
          </div>
          {/* box  */}
          <div className="box ">
            <div className="icon">
              <img src={cart} alt="" className="" />
            </div>
            <div className="ms-4">
              <h4 className="fs-1 fw-bold">1,995</h4>
              <p className="ms-2 fs-5">Total Sales</p>
            </div>
          </div>
          {/* box  */}
          <div className="box ">
            <div className="icon">
              <img src={dollar} alt="" className="" />
            </div>
            <div className="ms-4">
              <h4 className="fs-1 fw-bold">1,995</h4>
              <p className="ms-2 fs-5">Total Sales</p>
            </div>
          </div>
          {/* box  */}
          <div className="box ">
            <div className="icon">
              <img src={check} alt="" className="" />
            </div>
            <div className="ms-4">
              <h4 className="fs-1 fw-bold">1,995</h4>
              <p className="ms-2 fs-5">Total Sales</p>
            </div>
          </div>
        </div>
        <div className="graph w-50  ">
          <Chart />
        </div>
      </div>
      <div className="tables">
        <TopCustomers />
        <LatestOrders />
      </div>
    </div>
  );
};
export default Dashboard;
