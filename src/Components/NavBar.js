import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <NavLink style={{textDecoration:'none',margin:'1rem',color:'white'}} to='/'>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
              </Typography>
            </NavLink>

            <NavLink style={{textDecoration:'none',margin:'1rem',color:'white'}} to='/list'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              List
            </Typography>
            </NavLink>
            <NavLink style={{textDecoration:'none',margin:'1rem',color:'white'}} to='/createlist'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Createlist
            </Typography>
            </NavLink>

            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>

    </div>
  )
}

export default NavBar
