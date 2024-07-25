import React from "react";
import { Button, Card } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const AddressCard = ({ item, showButton, handleSelectAddress }) => {
  return (
    <Card className="flex gap-5 w-64 p-5">
      <HomeIcon />
      <div className="space-y-3 text-gray-500">
        <h1 className="font-semibold text-lg text-white">Home</h1>
        <p>Mumbai, new Shivam building gokuldham market</p>
        {showButton && (
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleSelectAddress()}
          >
            Select
          </Button>
        )}
      </div>
    </Card>
  );
};

export default AddressCard;
