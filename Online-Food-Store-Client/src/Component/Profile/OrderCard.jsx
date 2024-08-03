import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = ({ item }) => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="https://miro.medium.com/v2/resize:fit:1400/0*oTfm1pTXLxitHHFy.jpg"
          alt=""
        />
        <div>
          <p>Pizza</p>
          <p>₹{item.totalPrice}</p>
        </div>
      </div>
      <div>
        <Button className="cursor-not-allowed">{item.orderStatus}</Button>
      </div>
    </Card>
  );
};

export default OrderCard;
