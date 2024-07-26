import React from 'react'
import NavBar from '../NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import RestaurantDetails from '../Restaurant/RestaurantDetails'
const CustomRoutes = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account/:register' element={<Home/>}/>
        <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default CustomRoutes