import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{margin:'12%'}}>
        <Typography variant='h3' style={{color:'blueviolet'}}>BlogApp Login</Typography><br /><br />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" /><br /><br />

        <Button variant='contained'>Login</Button><br />br
        <Typography style={{color:'blueviolet'}}>
            <Link to={'/Signup'}>New user? Pleaseclick here</Link></Typography>

    </div>
  )
}

export default Login