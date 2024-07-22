import React from "react";
import '../styles/Home.scss'
const Home = () => {
  return (
    <div className="">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">Bite Hub</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Taste the Convenience Food, Fast and Delivered.
          </p>
        </div>
        <div className="cover absolute top-0 left-0 ring-0">

        </div>
      </section>
    </div>
  );
};

export default Home;
