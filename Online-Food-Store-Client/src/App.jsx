import './App.css'
import {ThemeProvider} from '@mui/material'
import { darkTheme } from './Theme/DarkTheme'
import NavBar from './Component/NavBar'
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  return (
        <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
            <NavBar/>
        </ThemeProvider>
  )
}

export default App
