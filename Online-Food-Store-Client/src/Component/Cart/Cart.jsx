import { Button, Card, Divider } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import AddressCard from "./AddressCard";
import AddLocationIcon from "@mui/icons-material/AddLocation";

const Cart = () => {
  const handleSelectAddress = () => {};
  const handleOpenAddressModal = () => {};

  return (
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {[1, 2].map((ind) => (
            <CartItem key={ind} />
          ))}
          <Divider />
          <div className="billdetails px-5 text-sm">
            <p className="font-extralight py-5 ">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>₹400</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Deliver Fee</p>
                <p>₹344</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>₹344</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between">
              <p>Total pay</p>
              <p>₹344</p>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb=0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 2, 3].map((item) => (
                <AddressCard
                  item={item}
                  showButton={true}
                  handleSelectAddress={handleSelectAddress}
                />
              ))}
              <Card className="flex gap-5 w-64 p-5">
                <AddLocationIcon />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">
                    Add Address
                  </h1>
                  <p>Create a new Address for your order</p>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleOpenAddressModal()}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
  );
};

export default Cart;