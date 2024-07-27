import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";

const UserProfile = () => {

  const handleLogOut =()=>{

  }
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center ">
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className="py-5 text-2xl">Pratham Lashkari</h1>
        <p>Email : prathamlashkari@gamil.com</p>
        <Button  variant="contained" onClick={handleLogOut} sx={{ margin: "2rem 0rem" }}>LogOut</Button>
      </div>
    </div>
  );
};

export default UserProfile;
