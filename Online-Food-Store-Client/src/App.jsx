import './App.css'
import {ThemeProvider} from '@mui/material'
import { darkTheme } from './Theme/DarkTheme'
import NavBar from './Component/NavBar'
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import Home from './pages/Home';

function App() {

  return (
        <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
            <NavBar/>
            <Home/>
        </ThemeProvider>
  )
}

export default App
