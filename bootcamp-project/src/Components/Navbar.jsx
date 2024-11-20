import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
// import Blog from './Blog'

const Navbar = () => {
  return (
    
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
          </Typography>
          
            <Link to={'/Blog'} style={{color:'white'}}><Button color="inherit">
                Home</Button> </Link>
                <Link to={'/AddBlogs'} style={{color:'white'}}><Button color="inherit">
                Add Blog</Button> </Link>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
    </Box>

    
  )
}

export default Navbar