import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrder } from "../../store/Order/Action";

const Orders = () => {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getUserOrder(token));
  }, []);
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-xl text-center py-7 font-semibold">My Orders</h1>
      <div className="space-y-5 w-full lg:w-1/2">
        {order.orders?.map((item, ind) => (
          <OrderCard item={item} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
