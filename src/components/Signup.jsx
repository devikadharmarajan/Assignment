//import React from 'react'

import { Button, TextField } from "@mui/material"

const Signup = () => {
  return (
    <div className="cc">
      <h1>SIGN UP</h1>
      <TextField id="outlined-basic" label="NAME" variant="outlined" />
      <br /><br />
      <TextField id="outlined-basic" label="EMAIL" variant="outlined" />
      <br /><br />
      <TextField id="outlined-basic"  type="password"  label="PASSWORD" variant="outlined" />
      <br /><br />
      <TextField id="outlined-basic"  label="PHONE" variant="outlined" />
      <br /><br />
      <Button variant="contained">SIGNUP</Button>
    </div>
  )
}

export default Signup