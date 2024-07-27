import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'

const Favorites = () => {
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>
        My Favorites
      </h1>
      <div className='flex flex-wrap gap-6 justify-center'>
        {
          [1,2,3,4].map((item , ind)=><RestaurantCard key={ind}/>)
        }
      </div>
    </div>
  )
}

export default Favorites