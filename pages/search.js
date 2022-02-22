import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, description, condition) {
  return { name, description, condition};
}

const rows = [
  createData('Monopoly', 'The classic version', 'fair'),
  createData('Monopoly', 'The classic version', 'fair'),
  createData('Monopoly', 'The classic version', 'fair')
];

export default function Search() {
  return (
    <div>
      <Button variant="contained">Search</Button>

      <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align="right">Description</TableCell>
        <TableCell align="right">Condition</TableCell>
        <TableCell align="right">Actions</TableCell>
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
          <TableCell align="right">{row.description}</TableCell>
          <TableCell align="right">{row.condition}</TableCell>
          <TableCell align="right">
            <Button variant="contained">Favorite</Button>
            <Button variant="contained">Take</Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
    </div>
  )
}
