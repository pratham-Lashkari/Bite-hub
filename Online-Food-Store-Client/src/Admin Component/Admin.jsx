import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Menu from "./pages/Menu";
import FoodCategory from "./pages/FoodCategory";
import Ingredients from "./pages/Ingredients";
import Events from "./pages/Events";
import RestaurantDetails from "./pages/RestaurantDetails";
import CreateMenu from "./CreateMenu";

const Admin = () => {
  return (
    <div>
      <div className="lg:flex justify-between">
        <div>
          <AdminSideBar />
        </div>
        <div className="lg:w-[80%]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/category" element={<FoodCategory />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/events" element={<Events />} />
            <Route path="/details" element={<RestaurantDetails />} />
            <Route path="/add-menu" element={<CreateMenu />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
