import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const AddBlogs = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{margintop:25,marginright:233, padding:195}}>


      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
            
          
          <TextField fullWidth id="outlined-basic" label="Blog Name" variant="outlined" /><br /><br />
        <br />
        </Grid>
        <Grid size={6}>
        <TextField fullWidth  id="outlined-basic" label="BlogImage Url" variant="outlined" /><br /><br /><br /><br />

          
        </Grid>
        <Grid size={6}>
          
        <TextField fullWidth  id="outlined-basic" label="Blog Author" variant="outlined" /><br /><br />

        </Grid>
        <Grid size={6}>
          
        <TextField fullWidth  id="outlined-basic" label="Blog Description" variant="outlined" /><br /><br />

        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Button variant='contained'>Submit</Button>
        </Grid>
        {/* <Grid size={6}>
          
        <Typography style={{color:'blueviolet'}}>
            <Link to={'/Login'}>Registered user? Pleaseclick here</Link></Typography>
         </Grid> */}
      </Grid>
    </Box>
  
  )
}

export default AddBlogs