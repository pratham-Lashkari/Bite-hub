import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CartItem from "./CartItem";
import AddressCard from "./AddressCard";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useSelector } from "react-redux";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const [open, setopen] = useState(false);
  const cart = useSelector((store) => store.cart);
  const initialValues = {
    streetAddress: "",
    state: "",
    pincode: "",
    city: "",
  };

  const handleSelectAddress = () => {};
  const handleOpenAddressModal = () => setopen(true);
  const handleClose = () => setopen(false);
  const handleSubmit = (values) => console.log(values);
  return (
    <>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {cart.cartItems?.map((item, ind) => (
            <CartItem key={ind} item={item} />
          ))}
          <Divider />
          <div className="billdetails px-5 text-sm">
            <p className="font-extralight py-5 ">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>₹{cart?.cart?.total}</p>
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
              {[1, 2, 3].map((item, ind) => (
                <AddressCard
                  key={ind}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    label="Street Address"
                    name="streetAddress"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("Street Address")}
                    helprText={
                      <ErrorMessage>
                        {(msg) => <span className="text-red-600">{msg}</span>}
                      </ErrorMessage>
                    }
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    label="State"
                    name="state"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("State")}
                    helprText={
                      <ErrorMessage>
                        {(msg) => <span className="text-red-600">{msg}</span>}
                      </ErrorMessage>
                    }
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    label="City"
                    name="city"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("City")}
                    helprText={
                      <ErrorMessage>
                        {(msg) => <span className="text-red-600">{msg}</span>}
                      </ErrorMessage>
                    }
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    label="PinCode"
                    name="pincode"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("PinCode")}
                    helprText={
                      <ErrorMessage>
                        {(msg) => <span className="text-red-600">{msg}</span>}
                      </ErrorMessage>
                    }
                  ></Field>
                  <Grid>
                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      color="primary"
                    >
                      {" "}
                      Deliver Here
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
