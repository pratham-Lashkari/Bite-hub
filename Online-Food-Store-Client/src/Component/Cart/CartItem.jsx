import React from "react";

const CartItem = () => {
  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*oTfm1pTXLxitHHFy.jpg"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>Pizza</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
