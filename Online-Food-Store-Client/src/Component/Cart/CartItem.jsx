import { Chip, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCartItem, updateCartItem } from "../../store/Cart/Action";
import { getRestaurantById } from "../../store/Restaurant/Action";

const CartItem = ({ item }) => {
  const cart = useSelector((store) => store.cart);
  const menu = useSelector((store) => store.menu);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const foodItem = menu?.menuItems?.find((food) => food.id === item.foodId);
  const itemImage = item?.images?.[0] || foodItem?.images?.[0];

  const hadnleUpdateCartItem = (value) => {
    if (value == -1 && item?.quantity == 1) {
      handleRemoveCartItem();
    }
    const data = {
      cartItemId: item?.id,
      quantity: item?.quantity + value,
    };
    dispatch(updateCartItem(data, token));
  };
  const handleRemoveCartItem = () => {
    dispatch(removeCartItem({ cartItemId: item.id, token: token }));
  };
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src={itemImage}
            alt=""
          />
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>{item?.name}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <IconButton onClick={() => hadnleUpdateCartItem(-1)}>
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <div className="w-5 h-5 text-xs flex items-center justify-center">
                  {item?.quantity}
                </div>
                <IconButton onClick={() => hadnleUpdateCartItem(1)}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <p>₹{item?.totalPrice}</p>
        </div>
      </div>
      <div className="pt-3 space-x-2">
        {[1, 2].map((item, ind) => (
          <Chip key={ind} label={"bread"} />
        ))}
      </div>
    </div>
  );
};

export default CartItem;
