import { Box, Button, TextField, Typography, } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{margintop:25,padding:195}}>

<Typography variant="h3" style={{color:'blue'}} gutterBottom>
        Sign-up
      </Typography>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
            
          
          <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" /><br /><br />

        </Grid>
        <Grid size={6}>
        <TextField fullWidth  id="outlined-basic" label="Email" variant="outlined" /><br /><br />

          
        </Grid>
        <Grid size={6}>
          
        <TextField fullWidth  id="outlined-basic" label="Password No" variant="outlined" /><br /><br />

        </Grid>
        <Grid size={6}>
          
        <TextField fullWidth  id="outlined-basic" label="Phone No" variant="outlined" /><br /><br />

        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Button variant='contained'>Signup</Button>
        </Grid>
        {/* <Grid size={6}>
          
        <Typography style={{color:'blueviolet'}}>
            <Link to={'/Login'}>Registered user? Pleaseclick here</Link></Typography>
         </Grid> */}
      </Grid>
    </Box>
  )
}

export default Signup