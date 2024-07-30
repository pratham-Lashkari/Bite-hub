import React from "react";
import "../styles/Home.scss";
import MultiCarousel from "../Component/Carousels/MultiCarousel";
import RestaurantCard from "../Component/Restaurant/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllRestaurantsAction } from "../store/Restaurant/Action";

const Home = () => {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((store) => store);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getAllRestaurantsAction(token));
  }, []);

  return (
    <div className="">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">Bite Hub</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Taste the Convenience Food, Fast and Delivered.
          </p>
        </div>
        <div className="cover absolute top-0 left-0 ring-0"></div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <p
          className="text-2xl font-semibold text-gray-400 py-3
         pb-10"
        >
          Top Meals
        </p>
        <MultiCarousel />
      </section>

      <section className="px-5 lg:px-20">
        <h1 className="text-2xl font-semibold text-gray-500 py-3">
          Order For Our handpick Favourites
        </h1>
        <div className="flex flex-wrap items-center justify-around gap-5">
          {restaurant.restaurants.map((item, ind) => (
            <RestaurantCard key={ind} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
