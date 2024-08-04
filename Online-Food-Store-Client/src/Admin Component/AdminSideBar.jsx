import React from "react";
import Drawer from "@mui/material/Drawer";
import { Divider, useMediaQuery } from "@mui/material";
import { adminNav } from "../constants/AdminNav";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/Authentication/Action";
const AdminSideBar = ({ handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-widht:100px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (item) => {
    navigate(`/admin/restaurant${item.path}`);
    if (item.title === "Logout") {
      navigate("/");
      dispatch(logout());
    }
  };
  return (
    <Drawer
      variant={isSmallScreen ? "temporary" : "permanent"}
      onClose={handleClose}
      open={true}
      anchor="left"
      sx={{ zIndex: 1 }}
    >
      <div className="w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]">
        {adminNav.map((item, ind) => (
          <>
            <div
              onClick={() => handleNavigate(item)}
              className="px-5 flex items-center gap-5 cursor-pointer"
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
            {ind !== adminNav.length - 1 && <Divider />}
          </>
        ))}
      </div>
    </Drawer>
  );
};

export default AdminSideBar;
