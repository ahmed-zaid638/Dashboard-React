import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import Customers from "../pages/customers/customers";
import { Analytics } from "../pages/analytics/analytics";
import { Products } from "../pages/products/products";
import { Orders } from "../pages/orders/orders";
import { Categories } from "../pages/categories/categories";
import { Discount } from "../pages/discount/discount";
import { Inventory } from "../pages/inventory/inventory";
import { Settings } from "../pages/settings/settings";

const _Routes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/discount" element={<Discount />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default _Routes;
