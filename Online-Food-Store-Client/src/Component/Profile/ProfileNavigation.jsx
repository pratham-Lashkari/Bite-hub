import { Divider, Drawer, useMediaQuery } from "@mui/material";
import React from "react";
import { profileMenu } from "../../constants/Profile";
import {useNavigate} from 'react-router-dom'

const ProfileNavigation = ({ open = true, handleClose }) => {
  const isSmallScreen = useMediaQuery('(min-width:800px)');
  const navigate = useNavigate();

  const handleNavigate = (item)=>{
    navigate(`/my-profile/${item.title.toLowerCase()}`)
  }

  return (
    <div>
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        open={open}
        onClose={handleClose}
        anchor="left"
        sx={{ zIndex: 1, position:"sticky" }}
      >
        <div className=" lg:w-[20vw]  flex flex-col justify-center text-xl gap-7 pt-20">
          {
            profileMenu.map((item , ind) => <>
            <div onClick={()=>handleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer">
              {item.icon}
              <span>{item.title}</span>
            </div>
            {ind !== profileMenu.length-1 && <Divider/> }
          </>)
          }
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavigation;
