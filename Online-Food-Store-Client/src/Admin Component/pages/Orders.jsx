import React, { useState } from "react";
import { Card, FormControl, RadioGroup, Typography } from "@mui/material";
const Orders = () => {
  const [filterValue, setFilterValue] = useState();
  return (
    <div className="px-2">
      <Card className="p-5">
        <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
          Order status
        </Typography>
        <FormControl>
          <RadioGroup row name="category" value={filterValue || "all"}>
            {" "}
          </RadioGroup>
        </FormControl>
      </Card>
    </div>
  );
};

export default Orders;
