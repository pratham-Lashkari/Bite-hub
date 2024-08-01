import React from "react";
import ProfileNavigation from "./ProfileNavigation";
import { Route, Routes, useLocation } from "react-router-dom";
import UserProfile from "./UserProfile";
import Orders from "./Orders";
import Address from "./Address";
import Favorites from "./Favorites";
import Events from "./Events";

const Profile = () => {
  const location = useLocation("");
  return (
    <div className="lg:flex justify-between">
      <div className="sticky h-[3vh] lg:w-[20%]">
        {location.pathname.startsWith("/my-profile") && <ProfileNavigation />}
      </div>
      <div className="lg:w-[80%]">
        <Routes>
          <Route path="/my-profile" element={<UserProfile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/address" element={<Address />} />
          <Route path="/favourites" element={<Favorites />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
