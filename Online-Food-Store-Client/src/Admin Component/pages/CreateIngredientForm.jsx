import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const CreateIngredientForm = () => {
  const [formData, setFormData] = useState({
    categoryName: "",
    restaurantId: "",
  });
  const handleSubmit = () => {
    const data = {
      name: formData.categoryName,
      ingredientCategoryId: {
        id: 1,
      },
    };
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Category
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="categoryName"
            name="categoryName"
            label="Category"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.categoryName}
          />
          <FormControl fullWidth>
            <InputLabel id="veg-label">Vegetarian</InputLabel>
            <Select
              labelId="veg-label"
              id="vegetarian"
              name="vegetarian"
              value={formData.ingredientCategoryId}
              onChange={handleInputChange}
              input={<OutlinedInput label="Vegetarian" />}
              MenuProps={MenuProps}
            >
              {["Rice", "Soup", "pizza"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" type="submit">
            Crate Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientForm;
