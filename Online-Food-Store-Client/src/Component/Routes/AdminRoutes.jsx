import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateRestaurant from "../../Admin Component/CreateRestaurant";
import Admin from "../../Admin Component/Admin";
const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={true ? <CreateRestaurant /> : <Admin />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
