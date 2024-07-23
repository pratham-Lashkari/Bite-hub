import {Card, Chip} from '@mui/material'
import React from 'react'


const RestaurantCard = () => {
  return (
    <Card>
        <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
            <img className='w-full h-[10rem] rounded-t-md object-cover' 
             src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" alt="" />

             <Chip 
              size='small'
              className='absolute top-2 left-2'
              color={true?"success":"error"}
              label={true ? "open" :"closed"} >
             </Chip>
        </div>
        <div className='p-4 textPart lg:flex w-full justify-between'>
            <div className='space-y-1'>
                <p className='text-gray-500 text-sm'>
                    Craving it all? Dive into our global fla...
                </p>
            </div>
        </div>
    </Card>
  )
}

export default RestaurantCard