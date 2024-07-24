import React from "react";
import { Divider, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const RestaurantDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home/india/indian fast food
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                src="https://t4.ftcdn.net/jpg/02/94/26/33/360_F_294263329_1IgvqNgDbhmQNgDxkhlW433uOFuIDar4.jpg"
                className="w-full h-[40vh] object-cover"
                alt="Images"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                className="w-full h-[40vh] object-cover"
                alt="Images"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMDY2NjE4LWltYWdlLWt3dnkzdnltLmpwZw.jpg"
                className="w-full h-[40vh] object-cover"
                alt="Images"
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Indain Fast food</h1>
          <p className="text-gray-500 mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate, nihil laudantium voluptatem, fugit facilis
            exercitationem distinctio nisi ipsum eum vitae eos?
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>Hawa Bangal</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>Hawa Bangal</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter"></div>
        <div className="space-y-10 lg:w-[20%] filter"></div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
