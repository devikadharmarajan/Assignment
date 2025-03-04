import { Paper, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Home = () => {

    function createData(
        name,
        calories,
        fat,
        carbs,
        protein,
      ) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('MARCO', "UNNI", "6:30",  <Rating name="size-small" defaultValue={2} size="small" />),
        createData('OFFICER', "KUNCHAKO BOBAN", "10:00",  <Rating name="size-small" defaultValue={2} size="small" />),
        createData('ARM', "TOVINO", "1:00",  <Rating name="size-small" defaultValue={2} size="small" />),
        createData('GOLAM', "SALIM", "7:00",  <Rating name="size-small" defaultValue={2} size="small" />),
        
      ];
  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>MOVIE NAME</TableCell>
            <TableCell align="right">ACTOR</TableCell>
            <TableCell align="right">TIME</TableCell>
            <TableCell align="right">RATING</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    
    </div>
  )
}

export default Home