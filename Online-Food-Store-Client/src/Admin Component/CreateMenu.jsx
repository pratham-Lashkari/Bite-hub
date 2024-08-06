import React, { useState } from "react";
import { useFormik } from "formik";
import {
  CircularProgress,
  Grid,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import { uploadImagesToCloudinary } from "./UploadToCloudinary";

const initialValues = {
  name: "",
  description: "",
  price: "",
  category: "",
  restaurantId: "",
  vegetarian: true,
  seasonal: false,
  ingredients: [],
  images: [],
};

const CreateMenu = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("Form Values", values);
    },
  });

  const [uploadImage, setUploadImage] = useState(false);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadImage(true);
      try {
        const imageUrl = await uploadImagesToCloudinary(file);
        console.log(imageUrl);
        formik.setFieldValue("images", [...formik.values.images, imageUrl]);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setUploadImage(false);
      }
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = formik.values.images.filter((_, i) => i !== index);
    formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className="py-10 lg:flex items-center justify-center min-h-screen">
      <div className="max-w-4xl w-full">
        <h1 className="font-bold text-2xl text-center py-2">
          Add New Menu Item
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
            <Grid className="flex flex-wrap gap-5" item xs={12}>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
                accept="image/*"
              />
              <label className="relative" htmlFor="fileInput">
                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                  <AddPhotoAlternateIcon className="text-white" />
                </span>
                {uploadImage && (
                  <div className="absolute left-0 ring-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className="flex flex-wrap gap-2">
                {formik.values.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      className="w-24 h-24 object-cover"
                      src={image}
                      alt="Uploaded"
                    />
                    <IconButton
                      onClick={() => handleRemoveImage(index)}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        outline: "none",
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Item Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="price"
                name="price"
                label="Price"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="category"
                name="category"
                label="Category"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.category}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="restaurantId"
                name="restaurantId"
                label="Restaurant ID"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.restaurantId}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="ingredients"
                name="ingredients"
                label="Ingredients (comma separated)"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.ingredients.join(", ")}
                helperText="Enter ingredients separated by commas."
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Add Menu Item
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default CreateMenu;
