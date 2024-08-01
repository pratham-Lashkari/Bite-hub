import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { foodTypes } from "../../constants/RestaurantDetailsFilter";
import { getMenuItemsByRestaurantId } from "../../store/Menu/Action";
import {
  getRestaurantById,
  getRestaurantsCategory,
} from "../../store/Restaurant/Action";
import MenuCard from "./MenuCard";

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState();

  // const auth = useSelector((store) => store.auth);
  const restaurant = useSelector((store) => store.restaurant);
  const menu = useSelector((store) => store.menu);

  const handleFilter = (e) => {
    setFoodType(e.target.value);
  };
  const handleFilterCategory = (e) => {
    setSelectedCategory(e.target.value);
  };
  useEffect(() => {
    dispatch(getRestaurantById({ token, restaurantId: id }));
    dispatch(getRestaurantsCategory({ restaurantId: id, token }));
  }, []);

  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantId({
        token: token,
        restaurantId: id,
        vegetarian: foodType === "vegetarain" ? true : false,
        // nonveg: false,
        seasonal: foodType === "seasonal" ? true : false,
        foodCategory: selectedCategory,
      })
    );
  }, [selectedCategory]);
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
                  onChange={handleFilterCategory}
                  name="food_type"
                  value={selectedCategory || "all"}
                >
                  {restaurant.categories.map((item, ind) => (
                    <FormControlLabel
                      key={ind}
                      value={item.name}
                      control={<Radio />}
                      label={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.menuItems.map((item, ind) => (
            <MenuCard key={ind} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
