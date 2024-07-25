import React from "react";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  return (
    <Box className="px-5 z-50 sticky top-0 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4 lg:mr-10 cursor-pointer">
          <li className="logo font-bold text-gray-300 text-2xl">BiteHub</li>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="">
          <Avatar sx={{ bgcolor: "white", color: pink.A400 }}>C</Avatar>
        </div>
        <div className="">
          <IconButton>
            <Badge color="secondary" badgeContent={3}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }}></ShoppingCartIcon>
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};

export default NavBar;
