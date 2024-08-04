import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import CustomRoutes from "./CustomRoutes";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin/restaurant/*" element={<AdminRoutes />} />
        <Route path="/*" element={<CustomRoutes />} />
      </Routes>
    </div>
  );
};

export default Routers;
