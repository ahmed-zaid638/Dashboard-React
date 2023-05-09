import { Route  , Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import Customers from "../pages/customers/customers";


const _Routes = () => {
  return (
    <Routes>
      <Route path="/" exact element ={<Dashboard/>} />
      <Route path="/customers" element ={<Customers/>}/>
    </Routes>
  );
};

export default _Routes;









