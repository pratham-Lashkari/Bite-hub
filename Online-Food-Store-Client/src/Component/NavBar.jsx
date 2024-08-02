import React from "react";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);
  const cart = useSelector((store) => store.cart);

  const handleAvatarClick = () => {
    // if (auth.user.role === "ROLE_CUSTOMER") {
    navigate("/my-profile");
    // } else {
    // navigate("/admin/restaurant");
    // }/
  };
  return (
    <Box className="px-5 z-50 sticky top-0 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4 lg:mr-10 cursor-pointer">
        <li
          onClick={() => navigate("/")}
          className="logo font-bold text-gray-300 text-2xl"
        >
          BiteHub
        </li>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="">
          {auth.user ? (
            <Avatar
              onClick={handleAvatarClick}
              sx={{ bgcolor: "white", color: pink.A400 }}
            >
              {auth.user.fullName.charAt(0).toUpperCase()}
            </Avatar>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <PersonIcon />
            </IconButton>
          )}
        </div>
        <div className="">
          <IconButton onClick={() => navigate("/cart")}>
            <Badge color="secondary" badgeContent={cart?.cartItems.length}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }}></ShoppingCartIcon>
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
};

export default NavBar;
