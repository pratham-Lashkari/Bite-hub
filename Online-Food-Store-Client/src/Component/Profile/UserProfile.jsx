import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/Authentication/Action";

const UserProfile = () => {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center ">
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className="py-5 text-2xl">{auth.user.fullName}</h1>
        <p>Email : {auth.user.email}</p>
        <Button
          variant="contained"
          onClick={handleLogOut}
          sx={{ margin: "2rem 0rem" }}
        >
          LogOut
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
