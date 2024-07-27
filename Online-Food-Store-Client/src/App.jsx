import "./App.css";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/DarkTheme";
import NavBar from "./Component/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Home from "./pages/Home";
import RestaurantDetails from "./Component/Restaurant/RestaurantDetails";
import Cart from "./Component/Cart/Cart";
import Profile from "./Component/Profile/Profile";
import CustomRoutes from "./Component/Routes/CustomRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./store/Authentication/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
  }, [auth.jwt]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      <CustomRoutes />
      <Profile />
    </ThemeProvider>
  );
}

export default App;
