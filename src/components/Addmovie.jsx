//import React from 'react'

import { Button, Rating, TextField } from "@mui/material"

const Addmovie = () => {
  return (
    <div className="cc">
        <h1>ADD MOVIE</h1>
        <TextField id="outlined-basic" label="MOVIE NAME" variant="outlined" />
      <br /><br />
      <TextField id="outlined-basic"  label="ACTOR" variant="outlined" />
      <br /><br />
      <TextField id="outlined-basic"  label="SHOW TIME" variant="outlined" />
      <br /><br />
      
      <Rating name="size-small" defaultValue={2} size="small" />
      <br /><br />
      <Button variant="contained">ADD</Button>
           
    </div>
  )
}

export default Addmovie