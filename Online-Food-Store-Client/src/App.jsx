import './App.css'
import {ThemeProvider} from '@mui/material'
import { darkTheme } from './Theme/DarkTheme'
import NavBar from './Component/NavBar'
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import Home from './pages/Home';
import RestaurantDetails from './Component/Restaurant/RestaurantDetails';
import Cart from './Component/Cart/Cart';

function App() {

  return (
        <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
            <NavBar/>
            {/* <Home/> */}
            {/* <RestaurantDetails/> */}
            <Cart/>
        </ThemeProvider>
  )
}

export default App
