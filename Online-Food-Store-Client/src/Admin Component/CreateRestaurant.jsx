import React, { useState } from "react";
import { useFormik } from "formik";
import { CircularProgress, Grid } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
const CreateRestaurant = () => {
  const formik = useFormik();
  const [uploadImage, setUploadImage] = useState(false);
  const handleImageChange = () => {};
  return (
    <div className="py-10 lg:flex items-center justify-center min-h-screen">
      <h1 className="font-bold text-2xl text-center py-2">
        Add New Restaurant
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
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600 ">
                <AddPhotoAlternateIcon className="text-white" />
              </span>
              {uploadImage && (
                <div className="absolute left-0 ring-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                  <CircularProgress />
                </div>
              )}
            </label>
            <div className="flex flex-wrap gap-2 ">
              {[1, 2, 3].map((image, index) => (
                <div>
                  <img src="" alt="" />
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateRestaurant;
