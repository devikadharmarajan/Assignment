//import React from 'react'

import { Button, TextField } from "@mui/material"

const Login = () => {
  return (
    <div  className="cc">
       <h1>LOGIN</h1>
       <TextField id="outlined-basic" label="EMAIL" variant="outlined" />
      <br /><br />
      <TextField id="outlined-basic"  type="password"  label="PASSWORD" variant="outlined" />
      <br /><br />
      <Button variant="contained">LOGIN</Button>
           </div>
  )
}

export default Login