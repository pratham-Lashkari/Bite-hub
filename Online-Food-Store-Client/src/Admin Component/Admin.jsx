import React from "react";
import AdminSideBar from "./AdminSideBar";

const Admin = () => {
  return (
    <div>
      <div className="lg:flex justify-between">
        <div>
          <AdminSideBar />
        </div>
      </div>
    </div>
  );
};

export default Admin;
