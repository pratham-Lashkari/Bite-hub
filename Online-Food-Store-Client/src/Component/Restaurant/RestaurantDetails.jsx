import React, { useEffect, useState } from "react";
import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import {
  categories,
  foodTypes,
  menuCards,
} from "../../constants/RestaurantDetailsFilter";
import MenuCard from "./MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantById } from "../../store/Restaurant/Action";

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, restaurant } = useSelector((store) => store);
  const token = localStorage.getItem("token");
  const { id, city } = useParams();

  const handleFilter = (e) => {
    console.log("value is: " + e.target.value);
  };
  useEffect(() => {
    dispatch(getRestaurantById({ token, restaurantId: id }));
  }, []);
  console.log("Restaruna by id is " + restaurant.restaurant);
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
                src={restaurant.restaurant?.images[0]}
                className="w-full h-[40vh] object-cover"
                alt="Images"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img src={restaurant.restaurant?.images[1]} alt="Images" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                src={restaurant.restaurant?.images[2]}
                className="w-full h-[40vh] object-cover"
                alt="Images"
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">
            {restaurant.restaurant?.name}
          </h1>
          <p className="text-gray-500 mt-1">
            {restaurant.restaurant?.description}
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>
                {restaurant.restaurant?.address.city}{" "}
                {restaurant.restaurant?.address.streetAddress}
              </span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>Morning 9:00 Am to 9:00 PM</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType || "all"}
                >
                  {foodTypes.map((item, ind) => (
                    <FormControlLabel
                      key={ind}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType || "all"}
                >
                  {categories.map((item, ind) => (
                    <FormControlLabel
                      key={ind}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menuCards.map((item, ind) => (
            <MenuCard key={ind} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
