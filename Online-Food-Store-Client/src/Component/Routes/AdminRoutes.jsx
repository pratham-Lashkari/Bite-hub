import React from "react";
import { Route, Routes } from "react-router-dom";
const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={false ? <CreateRestaurantForm /> : <Admin />}
        />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
