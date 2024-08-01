import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/NavBar";
import Profile from "./Component/Profile/Profile";
import CustomRoutes from "./Component/Routes/CustomRoutes";
import { getUser } from "./store/Authentication/Action";
import { darkTheme } from "./Theme/DarkTheme";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const auth = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUser(auth.token || token, navigate));
  }, [auth.token]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />
      <CustomRoutes />
      <Profile />
    </ThemeProvider>
  );
}

export default App;
