import { Drawer, useMediaQuery } from '@mui/material'
import React from 'react'


const ProfileNavigation = () => {
  const isSmallScreen = useMediaQuery("(max-widht:1080)")
  return (
    <div>
        <Drawer open={true} anchor='left' sx={{zIndex:1}}>

        </Drawer>
    </div>
  )
}

export default ProfileNavigation