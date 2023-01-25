import React from 'react'
import SideNav from '../../Components/SideNav/SideNav'
import Box from '@mui/material/Box';

const HomePage = () => {
  return (
    <>
     <Box sx={{ display: 'flex' }}>
     <SideNav/>
      <h1>Home</h1>
     </Box>
      
    </>
  )
}

export default HomePage
