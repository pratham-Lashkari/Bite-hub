import React from 'react'
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
  return (
    <div className='px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>

        <div className='flex items-center space-x-4'>
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <li className='logo font-bold text-gray-300 text-2xl'>
                    BiteHub
                </li>
            </div>

        </div>
            <div className='flex items-center space-x-2 lg:space-x-10'>
                   <div className=''>
                      <IconButton>
                         <SearchIcon sx={{fontSize:"1.5rem"}}/>
                      </IconButton>
                   </div>
                   <div className=''>

                   </div>
            </div>
    </div>
  )
}

export default NavBar