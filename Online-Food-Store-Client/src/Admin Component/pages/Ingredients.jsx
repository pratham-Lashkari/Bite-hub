import React from "react";
import IngredientCategoryTable from "./IngredientCategoryTable";
import { Grid } from "@mui/material";
import IngredientTable from "./IngredientTable";

const Ingredients = () => {
  return (
    <Grid className="p-2" container spacing={2}>
      <Grid item xs={12} lg={8}>
        <IngredientTable />
      </Grid>
      <Grid item xs={12} lg={4}>
        <IngredientCategoryTable />
      </Grid>
    </Grid>
  );
};

export default Ingredients;
